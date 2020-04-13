import {AnyAction} from 'redux';
import constants from "../../config/constants";
import {
    ENTER_GAME,
    ESTABLISH_GAME_SERVER_CONNECTION,
    JOIN_GAME_SERVER,
    UPDATE_GAMES_LIST,
    UPDATE_NOTIFICATIONS
} from "./actions";
import {fetchJsonWithAccessToken} from "../../utils/api";
import {JoinInfo, State as GamesState} from "../reducers/GamesListReducer";
import {encodeFormData} from "../../utils/utils";
import {ClientType, EnterGameModel, RoleType} from "../../models/models";
import {buildHubConnection} from "../../utils/websockets";
import {HubConnection} from "@microsoft/signalr";
import {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {RootState} from "../reducers";

export function fetchGamesList(): ThunkAction<Promise<void>, {}, {}, AnyAction> {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        const r = await fetchJsonWithAccessToken(constants.ENDPOINTS.LIST_GAMES, {
            method: "POST"
        }) as GamesState;
        dispatch({type: UPDATE_GAMES_LIST, payload: r.Games});
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
        const game = getState().gamesList.Games[gameId.toString()];
        const hubConnection = buildHubConnection(game.Server.Url);
        hubConnection.onclose((err?: Error) => {
            console.log(`Closed connection to game server name: ${game.Name}, id: ${game.Id}, url: ${game.Server.Url}`);
            if (err)
                console.error(err);
        });

        await hubConnection.start();
        console.debug(`Connected to game server name: ${game.Name}, id: ${game.Id}, url: ${game.Server.Url}`);
        dispatch({type: ESTABLISH_GAME_SERVER_CONNECTION, payload: {Id: game.Id, HubConnection: hubConnection}});
        return hubConnection;
    }
}

export function enterGame(gameId: number): ThunkAction<Promise<void>, RootState, {}, AnyAction> {
    return async (dispatch: ThunkDispatch<RootState, {}, AnyAction>, getState) => {
        const game = getState().gamesList.Games[gameId.toString()];
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

export function joinEstablishAndEnterGame(gameId: number): ThunkAction<Promise<HubConnection>, RootState, {}, AnyAction> {
    return async (dispatch: ThunkDispatch<RootState, {}, AnyAction>) => {
        await dispatch(joinGameServer(gameId));
        const hubConnection = await dispatch(establishGameConnection(gameId));
        await dispatch(enterGame(gameId));
        return hubConnection;
    }
}

export function fetchNotifications(gameId: number): ThunkAction<Promise<void>, RootState, {}, AnyAction> {
    return async (dispatch: ThunkDispatch<RootState, {}, AnyAction>, getState) => {
        const game = getState().gamesList.Games[gameId.toString()];
        const r = await InvokeGetNotifications(game.HubConnection!!) as any;
        dispatch({type: UPDATE_NOTIFICATIONS, payload: {Id: game.Id, Notifications: r.content}});
    }
}

export function InvokeEnterGame<T>(connection: HubConnection, model: EnterGameModel) {
    return connection.invoke<T>("EnterGame", model);
}

export function InvokeGetNotifications<T>(connection: HubConnection) {
    return connection.invoke<T>("GetNotifications");
}
