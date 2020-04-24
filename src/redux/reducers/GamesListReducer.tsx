import {GameInfo, ServerStatus} from "../../models/models";
import {HubConnection} from "@microsoft/signalr";
import {PersistentNotification} from "../../models/notifications";
import {AnyAction} from "redux";
import {Station} from "../../models/Station";
import {Actions} from "../actions/actions";

export interface State {
    Games: {[Id: string]: Game};
    GamesError?: string;
    lastFetchedDate?: string;
    GamesSettings: {[Id: string]: GameSettings};
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
    GameInfo?: GameInfo;
    Notifications?: PersistentNotification[];
    Stations?: Station[];

    ConnectionError?: string;
    NotificationsError?: string;
    StationsError?: string;
}

export interface GameSettings {
    notificationsEnabled: boolean;
    disabledNotificationTypes: string[];
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
    GamesSettings: {}
};

export default (state: State = INITIAL_STATE, action: AnyAction) => {
    switch (action.type) {
        case Actions.UPDATE_GAMES_LIST:
            let newGamesSettings = state.GamesSettings;
            action.payload.forEach((g: Game) => {
                if (!state.GamesSettings.hasOwnProperty(g.Id)) {
                    newGamesSettings[g.Id] = {
                        notificationsEnabled: true,
                        disabledNotificationTypes: []
                    }
                }
            })

            return {
                ...state,
                // map list of games into {gameId: game} dict
                Games: action.payload
                    .map((g: Game) => ({[g.Id]: g}))
                    .reduce((acc: any, val: any) => ({...acc, ...val}), {}),

                GamesSettings: newGamesSettings
            };
        case Actions.UPDATE_GAMES_LIST_FAILURE:
            return {
                ...state,
                GamesError: action.payload.error,
            };
        case Actions.JOIN_GAME_SERVER:
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
        case Actions.ESTABLISH_GAME_SERVER_CONNECTION:
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
        case Actions.ENTER_GAME:
            return {
                ...state,
                Games: {
                    ...state.Games,
                    [action.payload.Id]: {
                        ...state.Games[action.payload.Id],
                        EnteredGame: true,
                        GameInfo: action.payload.GameInfo
                    }
                }
            };
        case Actions.CONNECTION_ERROR:
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
        case Actions.UPDATE_NOTIFICATIONS:
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
        case Actions.UPDATE_NOTIFICATIONS_ERROR:
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
        case Actions.UPDATE_LAST_FETCH_DATE:
            return {
                ...state,
                lastFetchedDate: new Date().toString()
            }
        case Actions.UPDATE_STATIONS:
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
        case Actions.UPDATE_STATIONS_ERROR:
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
        case Actions.SET_NOTIFICATIONS_ENABLED:
            return {
                ...state,
                GamesSettings: {
                    ...state.GamesSettings,
                    [action.payload.Id]: {
                        ...state.GamesSettings[action.payload.Id],
                        notificationsEnabled: action.payload.enabled
                    }
                }
            };
        case Actions.SET_NOTIFICATION_TYPE_ENABLED:
            let newDisabledNotificationTypes = state.GamesSettings[action.payload.Id].disabledNotificationTypes;
            newDisabledNotificationTypes = newDisabledNotificationTypes.filter(t => t!==action.payload.type);
            if (!action.payload.enabled) {
                newDisabledNotificationTypes.push(action.payload.type);
            }

            return {
                ...state,
                GamesSettings: {
                    ...state.GamesSettings,
                    [action.payload.Id]: {
                        ...state.GamesSettings[action.payload.Id],
                        disabledNotificationTypes: newDisabledNotificationTypes
                    }
                }
            };
        default:
            return state;
    }
};

