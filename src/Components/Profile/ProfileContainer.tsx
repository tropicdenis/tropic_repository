import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../Redux/ProfileReducer";
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
    status: string
    authorizedUserId: number | null
    isAuth: boolean
};

type MapDispatchToPropsType = {
    getUserProfile: (userId: number | null) => void
    getUserStatus: (userId: number | null) => void
    updateUserStatus: () => void
};

type OwnPropsType = MapStatePropsType & MapDispatchToPropsType;
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType;

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId: number | null = +this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);

    }

    render() {
        return (
            <div>
                Hello
                {/*{!this.props.profile
                    ? <Preloader/>
                    : <Profile {...this.props} profile={this.props.profile}
                status={this.props.status} updateStatus={this.props.updateUserStatus}
                />}*/}
                <Profile {...this.props} profile={this.props.profile}
                         status={this.props.status} updateStatus={this.props.updateUserStatus}
                />
            </div>
        );
    }
};

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
};

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


