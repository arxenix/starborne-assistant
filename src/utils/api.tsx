import {store} from "../redux/store";
import {AUTH_STATUS} from "../redux/reducers/AuthReducer";
import constants from "../config/constants";
import {encodeFormData} from "./utils";
import {REFRESH_TOKEN} from "../redux/actions/actions";
import {decode} from "@msgpack/msgpack";

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


function base64ToArrayBuffer(base64: string) {
    const bin = window.atob(base64);
    const len = bin.length;
    const bytes = new Uint8Array(len);
    for (let i=0; i<len; i++) {
        bytes[i] = bin.charCodeAt(i);
    }
    return bytes.buffer;
}

export async function fetchMsgPackWithAccessToken(url: RequestInfo, options?: RequestInit): Promise<any> {
    // TODO - arrayBuffer() not supported by react-native :/
    /*
    options = withHeader(options, "Content-Type", "application/x-msgpack");
    //TODO make sure r.headers.get("Content-Type") is application/x-msgpack
    return fetchWithAccessToken(url, options)
        .then(r => r.arrayBuffer())
        .then(r => decode(r));
     */
    return xmlHttpFetch(url as string, options);
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