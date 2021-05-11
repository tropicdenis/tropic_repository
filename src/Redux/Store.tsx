import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import friendsReducer from "./FriendsReducer";

type DialogType = {
    name: string,
    id: number
}
type MessageType = {
    id: number
    message: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type DialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website:string
    youtube: string
    mainLink: string
}

export type PhotosType = {
    small: string
    large:string
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts:ContactsType
    photos: PhotosType
}

export type ProfilePageType = {
    posts: Array<PostType>
    profile:ProfileType | null
    status: string
}

export type FriendType = {
    name: string
    avatarURL: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    friends: Array<FriendType>
}
export type StoreType = {
    getState: () => RootStateType
    _state: RootStateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}

export type ActionsType = any

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 11},
                {id: 3, message: "Blabla", likesCount: 5},
                {id: 4, message: "Dadada", likesCount: 14}
            ],
            profile: null,
            status: ''
        },
        dialogsPage: {
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How is your it-kamasutra"},
                {id: 3, message: "Yo"},
                {id: 4, message: "Yo"},
                {id: 5, message: "Yo"},
            ],
            dialogs: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Sasha"},
                {id: 5, name: "Viktor"},
                {id: 6, name: "Valera"},
            ]
        },
        friends: [
            {
                name: "Garry",
                avatarURL: "https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:kids-assets:/nick/properties/spongebob-squarepants/characters/gary-character-web-desktop.png?height=0&width=480&matte=true&crop=false"
            },
            {name: "Patrick", avatarURL: "https://upload.wikimedia.org/wikipedia/ru/4/4e/Patrick_star-4854.jpg"},
            {name: "Squidi", avatarURL: "https://www.meme-arsenal.com/memes/8ba9362a677fe74c4e7af0feaeef2360.jpg"}
        ]
    },
    _callSubscriber() {
        console.log("State changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer //набллюдатель
    },

    dispatch(action: ActionsType) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.friends = friendsReducer(this._state.friends, action)

        this._callSubscriber();
    }
}

export default store
/*window.state = state;*/
//store - ООП

