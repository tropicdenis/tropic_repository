import {ActionsType, PostType, ProfilePageType} from "./Store";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

export type ProfileActionsType =
    ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator>

let initialState: UsersPageType = {
    users: []
};

const usersReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case FOLLOW:
            let stateCopy = {
                ...state,
                //users: [...state.users]
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            let stateCopy = {
                ...state,
                //users: [...state.users]
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:{
            return {...state, users: [...state.users, ...action.users]}
        }
    }
}

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId
    } as const
}

export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}
export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    } as const
}

export default usersReducer