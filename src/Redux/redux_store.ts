import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import friendsReducer from "./FriendsReducer";
import usersReducer from "./UsersReducer";
import authReducer from "./auth_reducer";
import thunkMiddleware from "redux-thunk";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friends: friendsReducer,
    usersPage: usersReducer,
    auth: authReducer
});


export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));