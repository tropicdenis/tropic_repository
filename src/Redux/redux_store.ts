import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import friendsReducer from "./FriendsReducer";
import usersReducer from "./UsersReducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friends: friendsReducer,
    usersPage: usersReducer
});


export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer);