import {store} from "../redux/store";
import {AUTH_STATUS} from "../redux/reducers/AuthReducer";
import constants from "../config/constants";
import {encodeFormData} from "./utils";
import {decode} from "@msgpack/msgpack";
import * as b64 from "base64-js";
import {Actions} from "../redux/actions/actions";

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
                    store.dispatch({type: Actions.REFRESH_TOKEN, payload: {auth: r}});
                    return r.access_token;
                });
        }
    }
    else {
        throw Error("Login no longer works? idk :(");
    }
}

function withHeader(options: RequestInit | undefined, key: string, value: string): RequestInit {
    return {
        ...options,
        headers: {
            ...options?.headers,
            [key]: value
        }
    }
}

export function fetchWithAccessToken(url: RequestInfo, options?: RequestInit): Promise<Response> {
    return getAccessToken().then((token: string) => {
        options = withHeader(options, "Authorization", `Bearer ${token}`);
        console.log("fetch:");
        console.log(url);
        console.log(options);
        return fetch(url, options);
    });
}

export function fetchJsonWithAccessToken(url: RequestInfo, options?: RequestInit): Promise<any> {
    return fetchWithAccessToken(url, options).then(r => r.json());
}

function xmlHttpFetch(url: string, options?: RequestInit) {
    return new Promise(async (resolve, reject) => {
        const request = new XMLHttpRequest();
        request.onabort = () => {
            reject(new Error("Request aborted"));
        }
        request.onload = () => {
            if (request.status === 200) {
                resolve(decode(Buffer.from(request.response)));
            } else {
                reject(new Error(request.statusText));
            }
        };

        request.onprogress = (a) => {
            console.log(a);
        }

        request.onloadstart = () => {
            console.log("load start");
        }
        request.onloadend = () => {
            console.log("load end");
        }
        request.onreadystatechange = (state) => {
            console.log("ready state change");
            console.log(request);
        }
        request.timeout = 10000;
        request.ontimeout = () => reject(new Error("Request timed out"));
        request.onerror = () => reject(new Error(request.statusText));
        request.responseType = 'arraybuffer';

        setInterval(() => {
            console.log("READY STATE " +request.readyState)
            console.log("STATUS " +request.status)
        }, 1000)

        request.open(options?.method ?? "GET", url);
        for (const [k,v] of Object.entries(options?.headers ?? {})) {
            request.setRequestHeader(k, v)
        }
        request.setRequestHeader('Content-Type', 'application/x-msgpack');
        request.setRequestHeader('Authorization', `Bearer ${await getAccessToken()}`);
        console.log("Sending xmlHttpRequest!");
        console.log(request);
        request.send();
    });
}

export async function fetchMsgPackWithAccessToken(url: RequestInfo, options?: RequestInit): Promise<any> {
    const blob = await fetchWithAccessToken(url, {
        headers: {
            "Content-Type": "application/x-msgpack"
        }
    }).then(r => {
        console.log("fetch done! blobbing...");
        console.log(r);
        return r.blob();
    });
    console.debug("got blob");
    const dataURI = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            console.debug("finished reading blob data");
            resolve(reader.result as string);
        }
        reader.onerror = () => {
            reject(new Error("Failed to read blob"));
        }
        console.debug("Starting blob read");
        reader.readAsDataURL(blob);
    }) as string;

    const prefix = "data:application/octet-stream;base64,";
    console.debug(dataURI.length);
    const base64 = dataURI.slice(prefix.length, dataURI.length);
    console.debug(base64.length);
    const byteArray = b64.toByteArray(base64);
    console.debug(byteArray.length);
    const r = decode(byteArray.buffer) as any;
    console.log("decoded msgpack");
    if (r.HasErrors) {
        throw new Error(r.Error);
    }
    return r.Content;
}

export function promiseWithTimeout<T>(promise: Promise<T>, timeoutMs: number, failureMessage?: string) {
    let timeoutHandle: NodeJS.Timeout;
    const timeoutPromise = new Promise<never>((resolve, reject) => {
        timeoutHandle = setTimeout(() => reject(new Error(failureMessage)), timeoutMs);
    });
    return Promise.race([
        promise,
        timeoutPromise
    ]).then((result) => {
        clearTimeout(timeoutHandle);
        return result;
    });
}