import React from 'react';
import './index.css';
import store from "./Redux/redux_store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let rerenderEntireTree = (state: any) => {
    ReactDOM.render(
        <div>
            <App store={store}
            />
        </div>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());

store.subscribe(()=> {
    let state = store.getState()
    rerenderEntireTree(state);
});


