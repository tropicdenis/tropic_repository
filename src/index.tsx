import React from 'react';
import './index.css';
import {store} from "./Redux/redux_store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(

        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>

        </Provider>,
    document.getElementById('root')
);
