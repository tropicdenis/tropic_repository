import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app_reducer";
import {AppStateType} from "./Redux/redux_store";
import Preloader from "./Components/common/Preloader/Preloader";

type AppPropsType = {
    getAuthUserData: () => void
    initializeApp: () => void
    initialized: boolean

}

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (

            <div className='app-wrapper'>
                <HeaderContainer getAuthUserData={this.props.getAuthUserData}/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route
                        path='/dialogs'
                        render={() => <DialogsContainer/>}/>
                    <Route
                        path='/profile/:userId?'
                        render={() => <ProfileContainer/>}/>
                    <Route
                        path='/users'
                        render={() => <UsersContainer/>}/>
                    <Route
                        path='/login'
                        render={() => <Login/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

export default compose<React.ComponentType>
(withRouter, connect(mapStateToProps, {initializeApp}))(App);
