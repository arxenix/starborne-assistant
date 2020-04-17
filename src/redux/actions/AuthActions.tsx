import {AnyAction} from 'redux';
import constants from "../../config/constants";
import {encodeFormData} from "../../utils/utils";
import {LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS} from "./actions";
import {ThunkAction, ThunkDispatch} from 'redux-thunk';


//TODO transform this into async/await
export function login(user: string, password: string): ThunkAction<Promise<boolean>, {}, {}, AnyAction> {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch({type: LOGIN_START, payload: {}});
        try{
            const request = await fetch(constants.ENDPOINTS.AUTH, {
                method: "POST",
                body: encodeFormData({
                    "grant_type": "password",
                    "username": user,
                    "password": password,
                    "client_id": "StarborneClientApp",
                    "client_secret": "starborneclients.123"
                }),
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            });
            if (request.status !== 200 && request.status !== 400) {
                // noinspection ExceptionCaughtLocallyJS
                throw Error("HTTP error "+request.status);
            }
            const auth = await request.json();
            if (auth.hasOwnProperty("error")) {
                dispatch({type: LOGIN_FAILURE, payload: "Invalid username/password"})
                return false;
            } else {
                dispatch({type: LOGIN_SUCCESS, payload: {auth: auth, user: user, password: password}})
                return true;
            }
        }
        catch(err) {
            console.error(err);
            dispatch({type: LOGIN_FAILURE, payload: "Error while logging in - "+err})
            return false;
        }
    }
}
