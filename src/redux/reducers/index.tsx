import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import AuthReducer, {authPersistConfig} from './AuthReducer';
import GamesListReducer, {gamesListPersistConfig} from "./GamesListReducer";
import {storage} from "../storage";

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, AuthReducer),
    gamesList: persistReducer(gamesListPersistConfig, GamesListReducer)
});

const rootPersistConfig = {
    whitelist: [],
    key: "root",
    storage
};

export default persistReducer(rootPersistConfig, rootReducer);
export type RootState = ReturnType<typeof rootReducer>;