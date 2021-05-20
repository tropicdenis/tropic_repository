import {Dispatch} from "redux";
import {getAuthUserData, setAuthUserData} from "./auth_reducer";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux_store";

type InitialStateType = {
    initialized: boolean
}

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState: InitialStateType = {
    initialized: false
};

type ActionsType = ReturnType<typeof initializedSuccess>;

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
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

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>

type ThunkDispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>

export const initializeApp = ():ThunkType => (dispatch: ThunkDispatchType) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        })
}

export default appReducer;