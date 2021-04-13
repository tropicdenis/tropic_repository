import {ActionsType, PostType, ProfilePageType, ProfileType} from "./Store";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";

export type ProfileActionsType =
    ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator> |
    ReturnType<typeof setUserProfile>

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11},
        {id: 3, message: "Blabla", likesCount: 5},
        {id: 4, message: "Dadada", likesCount: 14}
    ],
    newPostText: "",
    profile: null
};

const profileReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newPostText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default :
            return state
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    } as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}

export const updateNewPostTextActionCreator = (newPostText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: newPostText
    } as const
}

export default profileReducer