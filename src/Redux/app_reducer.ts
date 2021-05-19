import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {FormAction, stopSubmit} from "redux-form";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux_store";
import {FormDataType} from "../Components/Login/Login";
import {getAuthUserData} from "./auth_reducer";

type InitialStateType = {
    initialized: boolean
}

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState: InitialStateType = {
    initialized: false
};

type ActionsType = ReturnType<typeof setAuthUserData>;

const appReducer = (state = initialState,
                    action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};

export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS
    } as const
};

export const initializeApp = () => (dispatch: Dispatch) => {
    let promise = dispatch(getAuthUserData());
    promise.then(()=> {
        dispatch(initializedSuccess());
    });
}

export default appReducer;