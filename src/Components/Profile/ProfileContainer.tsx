import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {setUserProfile} from "../../Redux/ProfileReducer";
import {ProfileType, RootStateType} from "../../Redux/Store";
import {RouteComponentProps} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";

type PathParamsType = {
    userId: string
};

type MapStatePropsType = {
    profile: ProfileType | null
};

type MapDispatchToPropsType = {
     setUserProfile: (profile: any)  => void
};

type OwnPropsType = MapStatePropsType & MapDispatchToPropsType;
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType;

class ProfileContainer extends React.Component<PropsType>{
    componentDidMount(){
        let userId = +this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }
    render() {
        return (

            <div>
                Hello
                {!this.props.profile ? <Preloader /> : <Profile {...this.props} profile={this.props.profile}/>}
            </div>
        );
    }
};
let mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }

};

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);