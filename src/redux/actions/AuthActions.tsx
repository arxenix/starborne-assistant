import {AnyAction, Dispatch} from 'redux';
import constants from "../../config/constants";
import {encodeFormData} from "../../utils/utils";
import {LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS} from "./actions";
import { ThunkAction, ThunkDispatch } from 'redux-thunk'


//TODO transform this into async/await
export function login(user: string, password: string): ThunkAction<Promise<void>, {}, {}, AnyAction> {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch({type: LOGIN_START, payload: {}});
        const r = await fetch(constants.ENDPOINTS.AUTH, {
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
        }).then(r => r.json());

        try{
            if (r.hasOwnProperty("error")) {
                dispatch({type: LOGIN_FAILURE, payload: "Invalid username/password"})
            } else {
                dispatch({type: LOGIN_SUCCESS, payload: {auth: r, user: user, password: password}})
            }
        }
        catch(err) {
            console.error(err);
            dispatch({type: LOGIN_FAILURE, payload: "Error while logging in"})
        }
    }
}
