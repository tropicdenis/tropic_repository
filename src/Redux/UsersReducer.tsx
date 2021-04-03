import {ActionsType} from "./Store";
type PhotosType = {
    small: string
    large: string
}
export type UserType = {
    id: number
    photos: PhotosType
    followed: boolean
    fullName: string
    status: string
}

export type InitialStateType = {
    users: Array<UserType>
}

let initialState: InitialStateType = {
    users: [] as Array<UserType>
};

export type UsersActionsType =
    ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>

const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case "SET_USERS":
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
            default:
                return state;
        }
}

export const followAC = (userId: number) => {
    return {
        type: "FOLLOW",
        userId
    } as const
}

export const unfollowAC = (userId: number) => {
    return {
        type: "UNFOLLOW",
        userId
    } as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: "SET_USERS",
        users
    } as const
}

export default usersReducer