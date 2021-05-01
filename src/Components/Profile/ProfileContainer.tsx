import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getUserProfile} from "../../Redux/ProfileReducer";
import {ProfileType} from "../../Redux/Store";
import Preloader from "../common/Preloader/Preloader";
import {AppStateType} from "../../Redux/redux_store";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    userId: string
};

type MapStatePropsType = {
    profile: ProfileType | null
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
        profile: state.profilePage.profile
    }

};

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
) (ProfileContainer)


