// TODO - can we fix this gross hack? seems to be needed for parseURL to work
import {Buffer} from 'buffer'
import {parseURL, serializeURL} from "whatwg-url";
import * as querystring from "querystring";
import {
    HttpTransportType,
    HubConnection,
    HubConnectionBuilder,
    ILogger,
    JsonHubProtocol,
    LogLevel
} from "@microsoft/signalr";
import constants from "../config/constants";
import {getAccessToken} from "./api";

global.Buffer = Buffer;


// TODO - wait for new signalR update that allows us to pass headers
// here we create a wrapper around WebSocket to allow us to add the Authorization header
// TODO - web compatibility? is it even possible?
export class WebSocketWrapper extends WebSocket {
    // @ts-ignore
    constructor(url, protocols, options) {
        const parsedURL = parseURL(url);
        if (parsedURL && parsedURL.query) {
            const parsedQuery = querystring.parse(parsedURL.query);
            if (parsedQuery.hasOwnProperty("access_token")) {
                parsedURL.query = null;
                //console.log("FIXED URL -> "+serializeURL(parsedURL)); // works!
                // @ts-ignore
                return new WebSocket(serializeURL(parsedURL), protocols, {...options, headers: {"Authorization": `Bearer ${parsedQuery.access_token}`}});
            }
        }
        // @ts-ignore
        return new WebSocket(url, protocols, options);
    }
}

export class ConsoleLogger implements ILogger {
    log(level: LogLevel, message: string): void {
        console.debug(`WebSocket Log [${LogLevel[level]}] ${message}`);
    }
}


export function connectWebSocket(url: string) {
    const hubConnection = buildHubConnection(url);
    hubConnection.start()
        .then(() => {
        })
        .catch((r: any) => {
            console.error("FAILED TO CONNECT TO WS! :(");
            console.error(r);
        });

    hubConnection.onclose((err?:Error) =>  {
        console.error("WEBSOCKET CLOSED!");
        console.error(err);
    });
}

export function buildHubConnection(url: string): HubConnection {
    // @ts-ignore
    return new HubConnectionBuilder().withUrl(url, {
        //logger: new ConsoleLogger(),
        //logMessageContent: __DEV__,
        logMessageContent: false,
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets,
        withCredentials: true,
        WebSocket: WebSocketWrapper,
        accessTokenFactory() {
            return getAccessToken();
        }

    }).withHubProtocol(new JsonHubProtocol()).build();
    //.withAutomaticReconnect() -- test me
    //hubConnection.serverTimeoutInMilliseconds = 120000; //2min - too long timer in native
    //hubConnection.keepAliveIntervalInMilliseconds = 60000; //1min -- too long timer in native
}
