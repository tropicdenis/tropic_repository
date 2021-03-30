import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, PostType, ProfilePageType, StoreType} from "../../Redux/Store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile