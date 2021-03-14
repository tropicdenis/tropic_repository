export type DialogType = {
    name: string,
    id: number
}
export type MessageType = {
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

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
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

export type ActionsType =
    ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator>

export const addPostActionCreator = () => {
    return {
        type: "ADD-POST",
    } as const
}
export const updateNewPostTextActionCreator = (newPostText:string)=> {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newPostText: newPostText
    } as const
}

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 11},
                {id: 3, message: "Blabla", likesCount: 5},
                {id: 4, message: "Dadada", likesCount: 14}
            ],
            newPostText: ""
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

    dispatch(action: ActionsType) {  // {type: "ADD-POST"}
        if (action.type === "ADD-POST") {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ""
            this._callSubscriber();
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newPostText;
            this._callSubscriber();
        }
    }
}

export default store
/*window.state = state;*/
//store - ООП

