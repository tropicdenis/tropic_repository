import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import {UsersContainer} from "./Components/Users/UsersContainer";
import Users from "./Components/Users/UsersAPIComponent";

type AppPropsType = {
}

const App: React.FC<AppPropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route
                        path='/dialogs'
                        render={() => <DialogsContainer/>}/>
                    <Route
                        path='/profile'
                        render={() => <Profile/>}/>
                    <Route
                        path='/users'
                        render={() => <UsersContainer/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
