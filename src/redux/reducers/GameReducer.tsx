import {PersistentNotification} from "../../models/notifications";
import {Station} from "../../models/Station";
import { ServerStatus, GameInfo } from "../../models/models";
import { HubConnection } from "@microsoft/signalr";
import {AnyAction} from "redux";
import {Actions} from "../actions/actions";
import {PersistConfig} from "redux-persist/es/types";
import {storage} from "../storage";

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
    Settings: GameSettings;
}

export function gamePersistConfig(gameId: number): PersistConfig<any> {
    return {
        key: `game-${gameId}`,
        whitelist: [],
        storage
    }
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

const INITIAL_STATE: Game = {
    Name: "",
    HasRequestingPlayer: false,
    Id: -1,
    PlayersJoined: -1,
    PlayersMaximum: -1,
    ServerStatus: ServerStatus.Unknown,
    Server: {
        Id: "",
        Url: "",
    },
    DateStarted: "",
    DateEnding: "",
    //our own state
    Settings: {
        notificationsEnabled: false,
        disabledNotificationTypes: []
    }
};

export default (state: Game = INITIAL_STATE, action: AnyAction): Game => {
    switch (action.type) {
        case Actions.JOIN_GAME_SERVER:
            return {
                ...state,
                JoinInfo: action.payload.JoinInfo,
            };
        case Actions.ESTABLISH_GAME_SERVER_CONNECTION:
            return {
                ...state,
                        HubConnection: action.payload.HubConnection,
            };
        case Actions.ENTER_GAME:
            return {
                ...state,
                EnteredGame: true,
                GameInfo: action.payload.GameInfo
            };
        case Actions.CONNECTION_ERROR:
            return {
                ...state,
                ConnectionError: action.payload.error,
            };
        case Actions.UPDATE_NOTIFICATIONS:
            return {
                ...state,
                Notifications: action.payload.Notifications
            };
        case Actions.UPDATE_NOTIFICATIONS_ERROR:
            return {
                ...state,
                NotificationsError: action.payload.error
            };
        case Actions.UPDATE_STATIONS:
            return {
                ...state,
                Stations: action.payload.Stations
            };
        case Actions.UPDATE_STATIONS_ERROR:
            return {
                ...state,
                StationsError: action.payload.error,
            };
        case Actions.SET_NOTIFICATIONS_ENABLED:
            return {
                ...state,
                Settings: {
                    ...state.Settings,
                    notificationsEnabled: action.payload.enabled
                }
            };
        case Actions.SET_NOTIFICATION_TYPE_ENABLED:
            let newDisabledNotificationTypes = state.Settings.disabledNotificationTypes;
            newDisabledNotificationTypes = newDisabledNotificationTypes.filter(t => t!==action.payload.type);
            if (!action.payload.enabled) {
                newDisabledNotificationTypes.push(action.payload.type);
            }

            return {
                ...state,
                Settings: {
                    ...state.Settings,
                    disabledNotificationTypes: newDisabledNotificationTypes
                }
            };
    }
    return state;
};