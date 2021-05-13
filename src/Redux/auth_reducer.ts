import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";

type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const SET_USER_DATA = 'SET_USER_DATA';

let initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

type ActionsType = ReturnType<typeof setAuthUserData>;

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export const setAuthUserData = (userId: number, email: string, login: string, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload:{userId, login, email, isAuth}
    } as const
};

export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
}

export const login = (email, password, rememberMe) => (dispatch: Dispatch) => {

    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                let message = response.data.messages.length >0 ?
                    response.data.messages[0]
                    : "Some error"
                dispatch(stopSubmit("login", {_error: "Common error"}));
            }
        });
}

export const logout = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
}

export default authReducer;