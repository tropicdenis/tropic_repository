import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux_store";
import {setAuthUserData} from "../../Redux/auth_reducer";


class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
               if (response.data.resultCode === 0) {
                   let {id, email, login} = response.data.data
                   this.props.setAuthUserData(id, email, login);
               }
            });
    }

    render() {
        return (
            <Header
                isAuth={this.props.isAuth}
                login={this.props.login}
            />
        );
    }
};

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect (mapStateToProps, {setAuthUserData})(HeaderContainer)