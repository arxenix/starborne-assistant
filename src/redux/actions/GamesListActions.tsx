import {AnyAction} from 'redux';
import constants from "../../config/constants";
import {
    CONNECTION_ERROR,
    ENTER_GAME,
    ESTABLISH_GAME_SERVER_CONNECTION,
    JOIN_GAME_SERVER, SET_NOTIFICATION_TYPE_ENABLED, SET_NOTIFICATIONS_ENABLED,
    UPDATE_GAMES_LIST, UPDATE_GAMES_LIST_FAILURE,
    UPDATE_NOTIFICATIONS, UPDATE_NOTIFICATIONS_ERROR,
    UPDATE_STATIONS, UPDATE_STATIONS_ERROR
} from "./actions";
import {
    fetchJsonWithAccessToken, fetchMsgPackWithAccessToken,
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
import { navigate } from '../../NavigationContainer';

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
            }
            dispatch({type: CONNECTION_ERROR, payload: "Connection closed "+err});
            navigate("GamesList", {})
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
        }) as any;
        if (!r.isSuccess)
            throw new Error("EnterGame failure");
        console.debug("ENTERED GAME");
        console.debug(r);

        const r2 = await InvokeGetGameInfo(game.HubConnection!!) as any;
        console.debug("GAME INFO");
        console.debug(r2);
        if (!r2.isSuccess)
            throw new Error("GetGameInfo failure");
        dispatch({type: ENTER_GAME, payload: {Id: game.Id, GameInfo: r2.content}})
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
            dispatch({type: CONNECTION_ERROR, payload: {Id: gameId, error: `Failed to connect to server ${gameId} - ${err}`}});
            navigate("GamesList", {})
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

export function setNotificationTypeEnabled(gameId: number, notificationType: string, enabled: boolean): ThunkAction<Promise<void>, {}, {}, AnyAction> {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch({type: SET_NOTIFICATION_TYPE_ENABLED, payload: {Id: gameId, type: notificationType, enabled: enabled}});
    }
}

export function setNotificationsEnabled(gameId: number, enabled: boolean): ThunkAction<Promise<void>, {}, {}, AnyAction> {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch({type: SET_NOTIFICATIONS_ENABLED, payload: {Id: gameId, enabled: enabled}});
    }
}

export function fetchStations(gameId: number): ThunkAction<Promise<void>, RootState, {}, AnyAction> {
    return async (dispatch: ThunkDispatch<RootState, {}, AnyAction>, getState) => {
        const game: Game = getState().gamesList.Games[gameId.toString()];
        dispatch({type: UPDATE_STATIONS_ERROR, payload: {Id: gameId, error: undefined}});
        try {
            console.debug("fetchStations called!");
            const serializedStations = await promiseWithTimeout(
                fetchMsgPackWithAccessToken(game.Server.Url + constants.GAME_ENDPOINTS.STATIONS),
                30000
            );
            const stations = deserializeStations(serializedStations);
            console.debug("deserialized");
            console.debug(stations.length);
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

export function InvokeGetGameInfo<T>(connection: HubConnection) {
    return connection.invoke<T>("GetGameInfo");
}

export function InvokeGetNotifications<T>(connection: HubConnection) {
    return connection.invoke<T>("GetNotifications");
}

/*
export function InvokeGetStations<T>(connection: HubConnection) {
    return connection.invoke<T>("GetStations");
}
*/
