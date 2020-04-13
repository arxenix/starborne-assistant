import {LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS, REFRESH_TOKEN} from '../actions/actions';
import {Action, AnyAction} from "redux";

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
    error: string | null;
}

const INITIAL_STATE = {
    auth: null,
    auth_status: AUTH_STATUS.UNINITIALIZED,
    user: null,
    password: null,
    error: null
};

export default (state: State = INITIAL_STATE, action: AnyAction) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                auth_status: AUTH_STATUS.SUCCESS,
                error: null,
                ...action.payload
            };
        case REFRESH_TOKEN:
            return {
                ...state,
                auth_status: AUTH_STATUS.SUCCESS,
                error: null,
                ...action.payload
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                auth: null,
                auth_status: AUTH_STATUS.FAILURE,
                error: action.payload
            };
        case LOGIN_START:
            return {
                ...state,
                auth: null,
                auth_status: AUTH_STATUS.LOADING,
                error: null
            };
        default:
            return state;
    }
};

