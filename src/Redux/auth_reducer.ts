import {authAPI} from "../api/api";
import {Dispatch} from "redux";

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
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }
};

export const setAuthUserData = (userId: number, email: string, login: string) => {
    return {
        type: SET_USER_DATA,
        data:{userId, login, email}
    } as const
};

export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login));
            }
        });
}

export default authReducer;