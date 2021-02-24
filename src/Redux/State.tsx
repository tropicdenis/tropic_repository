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
}

export type FriendType = {
    name: string
    avatarURL: string
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    friends: Array<FriendType>
}

let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 11},
            {id: 3, message: "Blabla", likesCount: 5},
            {id: 4, message: "Dadada", likesCount: 14}
        ]
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
        {name: "Garry", avatarURL: "https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:kids-assets:/nick/properties/spongebob-squarepants/characters/gary-character-web-desktop.png?height=0&width=480&matte=true&crop=false"},
        {name: "Patrick", avatarURL: "https://upload.wikimedia.org/wikipedia/ru/4/4e/Patrick_star-4854.jpg"},
        {name: "Squidi", avatarURL: "https://www.meme-arsenal.com/memes/8ba9362a677fe74c4e7af0feaeef2360.jpg"}
    ]
}

export let addPost = (postMessage: string): void => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);

}

export default state