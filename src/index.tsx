import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

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

let dialogsData: Array<DialogType> = [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Andrey"},
    {id: 3, name: "Sveta"},
    {id: 4, name: "Sasha"},
    {id: 5, name: "Viktor"},
    {id: 6, name: "Valera"},
]

let messagesData: Array<MessageType> = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How is your it-kamasutra"},
    {id: 3, message: "Yo"},
    {id: 4, message: "Yo"},
    {id: 5, message: "Yo"},
]

let postsData: Array<PostType> = [
    {id: 1, message: "Hi, how are you?", likesCount: 12},
    {id: 2, message: "It's my first post", likesCount: 11},
    {id: 3, message: "Blabla", likesCount: 5},
    {id: 4, message: "Dadada", likesCount: 14}
]

ReactDOM.render(
  <div>
    <App dialogs={dialogsData} messages={messagesData} posts={postsData}/>
  </div>,
  document.getElementById('root')
);

