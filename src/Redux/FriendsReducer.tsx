import {ActionsType, FriendType} from "./Store";

let initialState: Array<FriendType> = [
     {
          name: "Garry",
          avatarURL: "https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:kids-assets:/nick/properties/spongebob-squarepants/characters/gary-character-web-desktop.png?height=0&width=480&matte=true&crop=false"
     },
     {name: "Patrick", avatarURL: "https://upload.wikimedia.org/wikipedia/ru/4/4e/Patrick_star-4854.jpg"},
     {name: "Squidi", avatarURL: "https://www.meme-arsenal.com/memes/8ba9362a677fe74c4e7af0feaeef2360.jpg"}
]

const friendsReducer = (state = initialState, action:ActionsType) => {
     return state
}



export default friendsReducer