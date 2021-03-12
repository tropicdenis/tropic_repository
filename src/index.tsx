import React from 'react';
import './index.css';
import state, {subscribe} from "./Redux/State";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, StateType, updateNewPostText} from "./Redux/State";

let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <div>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </div>,
        document.getElementById('root')
    );
}
rerenderEntireTree(state);

subscribe(rerenderEntireTree);


