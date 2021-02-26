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
import {StateType, addPost} from "./Redux/State";

type AppPropsType = {
    state: StateType
    addPost: (text: string)=> void
}
const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/* <Route
                        path='/dialogs'
                        component={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route
                        path='/profile'
                        component={() => <Profile posts={props.posts}/>}/>*/}

                    <Route
                        path='/dialogs'
                        render={() => <Dialogs dialogsPage={props.state.dialogsPage} />} />
                    <Route
                        path='/profile'
                        render={() => <Profile
                            profilePage={props.state.profilePage}
                        addPost={props.addPost}/>} />

                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
