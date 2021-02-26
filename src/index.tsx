import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './Redux/State'
import {BrowserRouter} from "react-router-dom";
import {addPost} from './Redux/State'

addPost("SamuraiJS.com")

ReactDOM.render(
    <BrowserRouter>
        <App state={state} addPost={addPost}/>
    </BrowserRouter>,
    document.getElementById('root')
);

