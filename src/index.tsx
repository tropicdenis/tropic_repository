import React from 'react';
import './index.css';
import store from "./Redux/State";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let rerenderEntireTree = () => {
    ReactDOM.render(
        <div>
            <App store={store}
            />
        </div>,
        document.getElementById('root')
    );
}
rerenderEntireTree();

store.subscribe(rerenderEntireTree);


