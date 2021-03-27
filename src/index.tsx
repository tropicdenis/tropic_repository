import React from 'react';
import './index.css';
import store from "./Redux/redux_store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";

let rerenderEntireTree = (state: any) => {
    ReactDOM.render(
        <div>
            <Provider store={store}>
            <App />
            </Provider>
        </div>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());

store.subscribe(()=> {
    let state = store.getState()
    rerenderEntireTree(state);
});


