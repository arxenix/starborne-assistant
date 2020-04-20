import {AnyAction} from 'redux';
import constants from "../../config/constants";
import {
    CONNECTION_ERROR,
    ENTER_GAME,
    ESTABLISH_GAME_SERVER_CONNECTION,
    JOIN_GAME_SERVER,
    UPDATE_GAMES_LIST, UPDATE_GAMES_LIST_FAILURE,
    UPDATE_NOTIFICATIONS, UPDATE_NOTIFICATIONS_ERROR,
    UPDATE_STATIONS, UPDATE_STATIONS_ERROR
} from "./actions";
import {
    fetchJsonWithAccessToken,
    fetchWithAccessToken,
    promiseWithTimeout
} from "../../utils/api";
import {Game, JoinInfo, State as GamesState} from "../reducers/GamesListReducer";
import {encodeFormData} from "../../utils/utils";
import {ClientType, EnterGameModel, GameActionResult, RoleType} from "../../models/models";
import {buildHubConnection} from "../../utils/websockets";
import {HubConnection} from "@microsoft/signalr";
import {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {RootState} from "../reducers";
import {MarkNotificationAsReadBindingModel} from "../../models/notifications";
import {deserializeStations} from "../../utils/serialization";
import {decode} from "@msgpack/msgpack";
import * as b64 from "base64-js";
import { navigate } from '../../../App';

export function fetchGamesList(): ThunkAction<Promise<void>, {}, {}, AnyAction> {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        try {
            const r = await fetchJsonWithAccessToken(constants.ENDPOINTS.LIST_GAMES, {
                method: "POST"
            }) as GamesState;
            dispatch({type: UPDATE_GAMES_LIST, payload: r.Games});
        }
        catch (err) {
            console.error(err);
            dispatch({type: UPDATE_GAMES_LIST_FAILURE, payload: "Failed to fetch games - " + err});
        }
    }
}


export function joinGameServer(gameId: number): ThunkAction<Promise<JoinInfo>, {}, {}, AnyAction> {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        const r = await fetchJsonWithAccessToken(constants.ENDPOINTS.JOIN_SERVER, {
            method: "POST",
            body: encodeFormData({"GameId": gameId.toString()}),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }) as JoinInfo;
        console.debug("received JoinServer Response:");
        console.debug(r);
        dispatch({type: JOIN_GAME_SERVER, payload: {Id: gameId, JoinInfo: r}});
        return r;
    }
}

export function establishGameConnection(gameId: number): ThunkAction<Promise<HubConnection>, RootState, {}, AnyAction> {
    return async (dispatch: ThunkDispatch<RootState, {}, AnyAction>, getState) => {
        const game: Game = getState().gamesList.Games[gameId.toString()];
        const hubConnection = buildHubConnection(game.Server.Url + constants.GAME_ENDPOINTS.WEBSOCKET);
        hubConnection.onclose((err?: Error) => {
            console.log(`Closed connection to game server name: ${game.Name}, id: ${game.Id}, url: ${game.Server.Url}`);
            if (err) {
                console.error(err);
                dispatch({type: CONNECTION_ERROR, payload: "Connection error: "+err});
                navigate("GamesList", {})
            }
        });

        await hubConnection.start();
        console.debug(`Connected to game server name: ${game.Name}, id: ${game.Id}, url: ${game.Server.Url}`);
        dispatch({type: ESTABLISH_GAME_SERVER_CONNECTION, payload: {Id: game.Id, HubConnection: hubConnection}});
        return hubConnection;
    }
}

export function enterGame(gameId: number): ThunkAction<Promise<void>, RootState, {}, AnyAction> {
    return async (dispatch: ThunkDispatch<RootState, {}, AnyAction>, getState) => {
        const game: Game = getState().gamesList.Games[gameId.toString()];
        const r = await InvokeEnterGame(game.HubConnection!!, {
                ...game.JoinInfo!!,
                IsBot: false,
                VersionValue: constants.VERSION_VALUE,
                PlayerJoinRole: RoleType.User,
                ClientType: ClientType.Game
            });
        console.debug("ENTERED GAME!");
        console.debug(r);
        dispatch({type: ENTER_GAME, payload: {Id: game.Id}})
    }
}

export function joinEstablishAndEnterGame(gameId: number): ThunkAction<Promise<void>, RootState, {}, AnyAction> {
    return async (dispatch: ThunkDispatch<RootState, {}, AnyAction>) => {
        dispatch({type: CONNECTION_ERROR, payload: {Id: gameId, error: undefined}});
        try {
            await dispatch(joinGameServer(gameId));
            await dispatch(establishGameConnection(gameId));
            await dispatch(enterGame(gameId));
        }
        catch(err) {
            console.error(err);
            dispatch({type: CONNECTION_ERROR, payload: {Id: gameId, error: "Failed to connect - "+err}});
        }
    }
}

export function fetchNotifications(gameId: number): ThunkAction<Promise<void>, RootState, {}, AnyAction> {
    return async (dispatch: ThunkDispatch<RootState, {}, AnyAction>, getState) => {
        const game: Game = getState().gamesList.Games[gameId.toString()];
        dispatch({type: UPDATE_NOTIFICATIONS_ERROR, payload: {Id: gameId, error: undefined}});
        try {
            const r = await InvokeGetNotifications(game.HubConnection!!) as any;
            dispatch({type: UPDATE_NOTIFICATIONS, payload: {Id: game.Id, Notifications: r.content}});
        }
        catch(err) {
            console.error(err);
            dispatch({type: UPDATE_NOTIFICATIONS_ERROR, payload: {Id: game.Id, error: "Failed to update notifications - "+err}});
        }
    }
}

export function markNotificationsAsRead(gameId: number, notificationIds: number[]): ThunkAction<Promise<void>, RootState, {}, AnyAction> {
    return async (dispatch: ThunkDispatch<RootState, {}, AnyAction>, getState) => {
        const game: Game = getState().gamesList.Games[gameId.toString()];
        try {
            const r = await InvokeMarkNotificationAsRead(game.HubConnection!!, {NotificationIds: notificationIds});
            console.log("MarkNotificationAsRead result: ");
            console.log(r);
            const Notifications = game.Notifications!!.filter(n => notificationIds.indexOf(n.id) === -1);
            dispatch({type: UPDATE_NOTIFICATIONS, payload: {Id: game.Id, Notifications: Notifications}});
        }
        catch(err) {
            console.error(err);
            //TODO - notification read error
        }
    }
}

function base64ToArrayBuffer(base64: string) {
    const binary_string = window.atob(base64);
    const len = binary_string.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
}


export function fetchStations(gameId: number): ThunkAction<Promise<void>, RootState, {}, AnyAction> {
    return async (dispatch: ThunkDispatch<RootState, {}, AnyAction>, getState) => {
        const game: Game = getState().gamesList.Games[gameId.toString()];
        dispatch({type: UPDATE_STATIONS_ERROR, payload: {Id: gameId, error: undefined}});
        try {
            console.log("fetchStations called!");
            /*const r = await fetchMsgPackWithAccessToken(
                game.Server.Url + constants.GAME_ENDPOINTS.STATIONS, {
                    method: "POST"
                });

             */
            const blob = await promiseWithTimeout(fetchWithAccessToken(game.Server.Url + constants.GAME_ENDPOINTS.STATIONS, {
                headers: {
                    "Content-Type": "application/x-msgpack"
                }
            }).then(r => {
                console.log("fetch done! blobbing...");
                console.log(r);
                return r.blob();
            }), 20000);
            console.log("got blob");
            /*
            const accessToken = await getAccessToken();
            const blob = await new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.onload = function() {
                    console.log("loaded blob!");
                    //console.log(xhr);
                    //console.log(xhr.response);
                    resolve(xhr.response);
                };
                xhr.onerror = function() {
                    reject(new Error('Network request failed'));
                };
                xhr.responseType = 'blob';
                xhr.open('GET', game.Server.Url + constants.GAME_ENDPOINTS.STATIONS, true);
                xhr.setRequestHeader("Authorization", "Bearer "+accessToken);
                xhr.setRequestHeader("Content-Type", "application/x-msgpack");
                xhr.send(null);
            }) as Blob;
             */
            const dataURI = await new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => {
                    console.log("finished reading data! wow");
                    resolve(reader.result as string);
                }
                reader.onerror = () => {
                    reject(new Error("Failed to read blob"));
                }
                reader.onprogress = (e) => {
                    console.log(e.loaded)
                }
                console.log("Starting blob read");
                reader.readAsDataURL(blob);
            }) as string;
            //data:application/octet-stream;base64,AAAAA
            console.log(dataURI.slice(0, 100));
            console.log(dataURI.slice("data:application/octet-stream;base64,".length, 100));
            const base64 = dataURI.slice("data:application/octet-stream;base64,".length);
            const byteArray = b64.toByteArray(base64);
            const r = decode(byteArray.buffer) as any;

            console.log("fetchStations result:");
            console.log(r);
            const stations = deserializeStations(r.Content);
            console.log("deserialized");
            console.log(stations);
            dispatch({type: UPDATE_STATIONS, payload: {Id: game.Id, Stations: stations}});
        }
        catch(err) {
            console.error(err);
            dispatch({type: UPDATE_STATIONS_ERROR, payload: {Id: game.Id, error: "Failed to update stations - "+err}});
        }
    }
}

export function InvokeMarkNotificationAsRead(connection: HubConnection, model: MarkNotificationAsReadBindingModel) {
    return connection.invoke<GameActionResult>("MarkNotificationAsRead", model);
}

export function InvokeEnterGame<T>(connection: HubConnection, model: EnterGameModel) {
    return connection.invoke<T>("EnterGame", model);
}

export function InvokeGetNotifications<T>(connection: HubConnection) {
    return connection.invoke<T>("GetNotifications");
}

/*
export function InvokeGetStations<T>(connection: HubConnection) {
    return connection.invoke<T>("GetStations");
}
*/
