import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux_store";
import {getAuthUserData} from "../../Redux/auth_reducer";


class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.getAuthUserData();
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

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)