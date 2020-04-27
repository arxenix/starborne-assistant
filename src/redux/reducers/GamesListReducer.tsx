import {AnyAction} from "redux";
import {Actions} from "../actions/actions";
import {persistReducer} from "redux-persist";
import GameReducer, {Game, gamePersistConfig} from "./GameReducer";
import { PersistPartial } from "redux-persist/lib/persistReducer";
import {PersistConfig} from "redux-persist/es/types";
import {storage} from "../storage";

export interface State extends PersistPartial {
    Games: {[Id: string]: Game};
    GamesError?: string;
    lastFetchedDate?: string;
}

export const gamesListPersistConfig: PersistConfig<any> = {
    key: "gamesList",
    whitelist: ["lastFetchedDate"],
    storage
}

const INITIAL_STATE: State = {
    Games: {},
    _persist: {
        version: -1,
        rehydrated: false
    }
};


export default (state: State = INITIAL_STATE, action: AnyAction) => {
    switch (action.type) {
        case Actions.UPDATE_GAMES_LIST:
            return {
                ...state,
                // map list of games into {gameId: game} dict
                Games: action.payload
                    .map((g: Game) => ({[g.Id]: g}))
                    .reduce((acc: any, val: any) => ({...acc, ...val}), {}),
            };
        case Actions.UPDATE_LAST_FETCH_DATE:
            return {
                ...state,
                lastFetchedDate: new Date().toString(),
            }
        case Actions.UPDATE_GAMES_LIST_FAILURE:
            return {
                ...state,
                GamesError: action.payload.error,
            };
        default:
            if (action.payload?.Id) {
                return {
                    ...state,
                    Games: {
                        ...state.Games,
                        [action.payload.Id]: {
                            ...state.Games[action.payload.Id],
                            ...persistReducer(gamePersistConfig(action.payload.Id), GameReducer)(
                                {
                                    ...state.Games[action.payload.Id],
                                    _persist: state._persist
                                },
                                action
                            )
                        }
                    }
                }
            }
            return state;
    }
};

