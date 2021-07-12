import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../Redux/Store";

type PropsType = {
    isOwner: boolean
    profile: ProfileType | null
    status: string
    updateStatus: ()=> void
    savePhoto: () => void
    saveProfile: (profile: ProfileType) => Promise<any>
}
const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         savePhoto={props.savePhoto}
                         saveProfile={props.saveProfile}
            />
            <MyPostsContainer />
        </div>
    );
}

export default Profile