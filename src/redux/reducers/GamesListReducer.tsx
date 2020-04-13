import {ENTER_GAME, ESTABLISH_GAME_SERVER_CONNECTION, JOIN_GAME_SERVER, UPDATE_GAMES_LIST} from "../actions/actions";
import {ServerStatus} from "../../models/models";
import {HubConnection} from "@microsoft/signalr";
import {PersistentNotification} from "../../models/notifications";
import {AnyAction} from "redux";

export interface State {
    Games: {[Id: string]: Game};
}

export interface Game {
    //attrs from /ListGames api
    Name: string;
    HasRequestingPlayer: boolean;
    Id: number;
    PlayersJoined: number;
    PlayersMaximum: number;
    ServerStatus: ServerStatus;
    Server: GameServer;
    DateStarted: string;
    DateEnding: string;
    //our own state
    JoinInfo?: JoinInfo;
    HubConnection?: HubConnection;
    EnteredGame?: boolean;
    GameState?: GameState;
    PersistentNotifications?: PersistentNotification[];
}

export interface GameState {
    Stations?: Stations;
}

export interface Stations {

}

export interface JoinInfo {
    PlayerJoinToken: string;
    PlayerIdGlobal: string;
}

export interface GameServer {
    Id: string;
    Url: string;
}

const INITIAL_STATE = {
    Games: {},
};

export default (state: State = INITIAL_STATE, action: AnyAction) => {
    switch (action.type) {
        case UPDATE_GAMES_LIST:
            return {
                ...state,
                // map list of games into {gameId: game} dict
                Games: action.payload
                    .map((g: Game) => ({[g.Id]: g}))
                    .reduce((acc: any, val: any) => ({...acc, ...val}), {})
            };
        case JOIN_GAME_SERVER:
            return {
                ...state,
                Games: {
                    ...state.Games,
                    [action.payload.Id]: {
                        ...state.Games[action.payload.Id],
                        JoinInfo: action.payload.JoinInfo
                    }
                }
            };
        case ESTABLISH_GAME_SERVER_CONNECTION:
            return {
                ...state,
                Games: {
                    ...state.Games,
                    [action.payload.Id]: {
                        ...state.Games[action.payload.Id],
                        HubConnection: action.payload.HubConnection
                    }
                }
            };
        case ENTER_GAME:
            return {
                ...state,
                Games: {
                    ...state.Games,
                    [action.payload.Id]: {
                        ...state.Games[action.payload.Id],
                        EnteredGame: true,
                        GameState: {}
                    }
                }
            };
        default:
            return state;
    }
};

