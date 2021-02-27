import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPost} from './Redux/State'

export let rerenderEntireTree = ()=> {
    ReactDOM.render(
        <div>
            <App state={state} addPost={addPost}/>
        </div>,
        document.getElementById('root')
    );
}

