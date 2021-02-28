import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, StateType, updateNewPostText} from "./Redux/State";

export let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <div>
            <App state={state} addPost={addPost}
                 updateNewPostText={updateNewPostText}/>
        </div>,
        document.getElementById('root')
    );
}

