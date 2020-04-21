import {Platform} from "react-native";
import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import * as SecureStore from 'expo-secure-store';
import { persistReducer } from 'redux-persist';
import GamesListReducer from "./GamesListReducer";
import createSecureStorage from '@neverdull-agency/expo-unlimited-secure-store';

/*
function fixKey(key: string) {
    return key.replace(/[^a-z0-9.\-_]/gi, "_");
}

function createSecureStorage(options: SecureStoreOptions = {}) {
    return {
        getItem: (key: string) =>
            SecureStore.getItemAsync(fixKey(key), options),
        setItem: (key: string, value: any) =>
            SecureStore.setItemAsync(fixKey(key), value, options),
        removeItem: (key: string) =>
            SecureStore.deleteItemAsync(fixKey(key), options)
    };
}
*/

const storage = Platform.OS === "web" ? require("redux-persist/lib/storage"): createSecureStorage({
    // @ts-ignore
    keychainService: "starborne.mobile.client",
    keychainAccessible: SecureStore.ALWAYS_THIS_DEVICE_ONLY,
});


const authPersistConfig = {
    whitelist: ["user", "password"],
    key: "auth",
    storage
};

const gamesListPersistConfig = {
    //whitelist: ["Games"],
    whitelist: ["lastFetchedDate", "GamesSettings"],
    key: "games",
    storage
};

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, AuthReducer),
    gamesList: persistReducer(gamesListPersistConfig, GamesListReducer)
    //chat: ChatReducer
});

const rootPersistConfig = {
    whitelist: [],
    key: "root",
    storage
};

export default persistReducer(rootPersistConfig, rootReducer);
export type RootState = ReturnType<typeof rootReducer>;