import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../Redux/State";

type ProfilePropsType = {
        profilePage: {posts: Array<PostType>}
        addPost:  (text: string)=> void

}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts} addPost={props.addPost}/>
        </div>
    );
}

export default Profile