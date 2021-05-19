import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux_store";
import {logout} from "../../Redux/auth_reducer";

type HeaderContainerType = {
    isAuth: boolean
    login: string | null
    logout: () => void
    getAuthUserData: () => void
}

class HeaderContainer extends React.Component<HeaderContainerType, any> {

    render() {
        return (
            <Header
                {...this.props}
            />
        );
    }
};

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {logout})(HeaderContainer)