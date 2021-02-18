import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {DialogType, MessageType, PostType} from "./index";


type AppPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    posts: Array<PostType>
}

const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                  {/*  <Route
                        path='/dialogs'
                        render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route
                        path='/profile'
                        render={() => <Profile posts={props.posts}/>}/>*/}
                    <Route
                        path='/profile'
                        render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route
                        path='/profile'
                        render={() => <Profile posts={props.posts}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
