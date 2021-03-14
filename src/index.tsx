import React from 'react';
import './index.css';
import store, {RootStateType} from "./Redux/State";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <div>
            <App state={state}
                 addPost={store.addPost}
                 updateNewPostText={store.updateNewPostText}/>
        </div>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);


