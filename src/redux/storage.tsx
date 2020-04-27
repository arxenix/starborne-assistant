import {AsyncStorage} from "react-native";

/*export const storage = Platform.OS === "web" ? require("redux-persist/lib/storage"): createSecureStorage({
    // @ts-ignore
    keychainService: "starborne.mobile.client",
    keychainAccessible: SecureStore.ALWAYS_THIS_DEVICE_ONLY,
});
 */

export const storage = AsyncStorage;