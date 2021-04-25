import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {getUserProfile} from "../../Redux/ProfileReducer";
import {ProfileType, RootStateType} from "../../Redux/Store";
import Preloader from "../common/Preloader/Preloader";
import {AppStateType} from "../../Redux/redux_store";

type PathParamsType = {
    userId: string
};

type MapStatePropsType = {
    profile: ProfileType | null
    isAuth: boolean
};

type MapDispatchToPropsType = {
    getUserProfile: (profile: any) => void
};

type OwnPropsType = MapStatePropsType & MapDispatchToPropsType;
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType;

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = +this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId)
    }

    render() {

        if (!this.props.isAuth) return <Redirect to={"/login"}/>

        return (
            <div>
                Hello
                {!this.props.profile ? <Preloader/> : <Profile {...this.props} profile={this.props.profile}/>}
            </div>
        );
    }
};
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }

};

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent);