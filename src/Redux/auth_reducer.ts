import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux_store";

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
                // ...action.payload
                id: action.payload.userId,
                email: action.payload.email,
                login: action.payload.login,
                isAuth: true
            };
        default:
            return state;
    }
};

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload:{userId, login, email, isAuth}
    } as const
};

export const getAuthUserData = (): ThunkType => (dispatch: ThunkDispatchType) => {
    return authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
}

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>

type ThunkDispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>

export const login = (email: string, password: string, rememberMe: boolean = false) => (dispatch: ThunkDispatchType) => {
    authAPI.login(email, password, rememberMe = false)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                let message = response.data.messages.length >0 ?
                    response.data.messages[0]
                    : "Some error"
                dispatch(stopSubmit("login", {_error: "Common error"}) as ActionsType) ;
            }
        });
}

export const logout = ():ThunkType => (dispatch: ThunkDispatchType) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
}

export default authReducer;