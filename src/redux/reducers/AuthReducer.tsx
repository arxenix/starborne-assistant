import {AnyAction} from "redux";
import {Actions} from "../actions/actions";

export interface Auth {
    access_token: string;
    refresh_token: string;
    userName: string;
    ".expires": string;
}

export enum AUTH_STATUS {
    UNINITIALIZED,
    LOADING,
    SUCCESS,
    FAILURE
}

export interface State {
    auth: Auth | null;
    auth_status: AUTH_STATUS;
    user: string | null;
    password: string | null;
    login_error: string | null;
}

const INITIAL_STATE = {
    auth: null,
    auth_status: AUTH_STATUS.UNINITIALIZED,
    user: null,
    password: null,
    login_error: null
};

export default (state: State = INITIAL_STATE, action: AnyAction) => {
    switch (action.type) {
        case Actions.LOGIN_SUCCESS:
            return {
                ...state,
                auth_status: AUTH_STATUS.SUCCESS,
                login_error: null,
                ...action.payload
            };
        case Actions.REFRESH_TOKEN:
            return {
                ...state,
                auth_status: AUTH_STATUS.SUCCESS,
                login_error: null,
                ...action.payload
            };
        case Actions.LOGIN_FAILURE:
            return {
                ...state,
                auth: null,
                auth_status: AUTH_STATUS.FAILURE,
                login_error: action.payload
            };
        case Actions.LOGIN_START:
            return {
                ...state,
                auth: null,
                auth_status: AUTH_STATUS.LOADING,
                login_error: null
            };
        default:
            return state;
    }
};

