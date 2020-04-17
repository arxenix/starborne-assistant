import {
    CONNECTION_ERROR,
    ENTER_GAME,
    ESTABLISH_GAME_SERVER_CONNECTION,
    JOIN_GAME_SERVER,
    UPDATE_GAMES_LIST, UPDATE_GAMES_LIST_FAILURE, UPDATE_LAST_FETCH_DATE,
    UPDATE_NOTIFICATIONS, UPDATE_NOTIFICATIONS_ERROR, UPDATE_STATIONS, UPDATE_STATIONS_ERROR
} from "../actions/actions";
import {ServerStatus} from "../../models/models";
import {HubConnection} from "@microsoft/signalr";
import {PersistentNotification} from "../../models/notifications";
import {AnyAction} from "redux";
import {Station} from "../../models/Station";

export interface State {
    Games: {[Id: string]: Game};
    GamesError?: string;
    lastFetchedDate?: string;
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
    Notifications?: PersistentNotification[];
    Stations?: Station[];

    ConnectionError?: string;
    NotificationsError?: string;
    StationsError?: string;
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
        case UPDATE_GAMES_LIST_FAILURE:
            return {
                ...state,
                GamesError: action.payload.error,
            };
        case JOIN_GAME_SERVER:
            return {
                ...state,
                Games: {
                    ...state.Games,
                    [action.payload.Id]: {
                        ...state.Games[action.payload.Id],
                        JoinInfo: action.payload.JoinInfo,
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
                        HubConnection: action.payload.HubConnection,
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
                    }
                }
            };
        case CONNECTION_ERROR:
            return {
                ...state,
                Games: {
                    ...state.Games,
                    [action.payload.Id]: {
                        ...state.Games[action.payload.Id],
                        ConnectionError: action.payload.error,
                    }
                }
            };
        case UPDATE_NOTIFICATIONS:
            return {
                ...state,
                Games: {
                    ...state.Games,
                    [action.payload.Id]: {
                        ...state.Games[action.payload.Id],
                        Notifications: action.payload.Notifications
                    }
                }
            };
        case UPDATE_NOTIFICATIONS_ERROR:
            return {
                ...state,
                Games: {
                    ...state.Games,
                    [action.payload.Id]: {
                        ...state.Games[action.payload.Id],
                        NotificationsError: action.payload.error
                    }
                }
            };
        case UPDATE_LAST_FETCH_DATE:
            return {
                ...state,
                lastFetchedDate: new Date().toString()
            }
        case UPDATE_STATIONS:
            return {
                ...state,
                Games: {
                    ...state.Games,
                    [action.payload.Id]: {
                        ...state.Games[action.payload.Id],
                        Stations: action.payload.Stations
                    }
                }
            };
        case UPDATE_STATIONS_ERROR:
            return {
                ...state,
                Games: {
                    ...state.Games,
                    [action.payload.Id]: {
                        ...state.Games[action.payload.Id],
                        StationsError: action.payload.error,
                    }
                }
            };
        default:
            return state;
    }
};

