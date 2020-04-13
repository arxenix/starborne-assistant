import {store} from "../redux/store";
import {AUTH_STATUS} from "../redux/reducers/AuthReducer";
import constants from "../config/constants";
import {encodeFormData} from "./utils";
import {REFRESH_TOKEN} from "../redux/actions/actions";

/*
export function fetchGamesList(): Promise<void> {
    return fetchJsonWithAccessToken(constants.ENDPOINTS.LIST_GAMES, {method: "POST"}).then(r=> {
        // @ts-ignore
        store.dispatch({type: UPDATE_GAMES_LIST, payload: r.Games});
    });
}
 */


export function connectToServers() {
    for(const game of getJoinedGames()) {
        game.Server.Url
    }
}

export function getJoinedGames() {
    return store.getState().gamesList.Games.filter(g => g.HasRequestingPlayer);
}

export function getAccessToken(): Promise<string> {
    const auth = store.getState().auth;
    if (auth.auth_status === AUTH_STATUS.SUCCESS) {
        const expirationDate = new Date(auth.auth![".expires"]);
        expirationDate.setUTCSeconds(expirationDate.getUTCSeconds() + 10); // add offset for potential latency
        if (new Date() < expirationDate) {
            // dont need to refresh
            return Promise.resolve(auth.auth!.access_token);
        }
        else {
            // need to refresh
            console.log("Refreshing Access token...");
            // TODO - handle case where no refresh token, or refresh token expired?..
            return fetch(constants.ENDPOINTS.AUTH, {
                method: "POST",
                body: encodeFormData({
                    "grant_type": "refresh_token",
                    "refresh_token": auth.auth!.refresh_token,
                    "client_id": "StarborneClientApp",
                    "client_secret": "starborneclients.123"
                })
            })
                .then(r => r.json())
                .then(r => {
                    store.dispatch({type: REFRESH_TOKEN, payload: {auth: r}});
                    return r.access_token;
                });
        }
    }
    else {
        throw Error("Login no longer works? idk :(");
    }
}


export function fetchJsonWithAccessToken(url: RequestInfo, options?: RequestInit): Promise<any> {
    return getAccessToken().then((token: string) => {
        if (options === undefined) {
            options = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        }
        if (options.headers) {
            // @ts-ignore
            options.headers["Authorization"] = `Bearer ${token}`;
        }
        else {
            options.headers = {
                "Authorization": `Bearer ${token}`
            }
        }
        return fetch(url, options).then(r=> r.json());
    });
}
