import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "../Post/Post";
import {ActionsType, ProfilePageType, StoreType} from "../../../Redux/Store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/ProfileReducer";
import MyPosts from "./MyPosts";

type MyPostsPropsType = {
    store: StoreType
}


const MyPostsContainer = (props: MyPostsPropsType) => {
    let state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    const newTextChangeHandler = (event:ChangeEvent<HTMLTextAreaElement>)=> {
        props.store.dispatch(updateNewPostTextActionCreator(event.currentTarget.value));
    }

    return (
        <MyPosts updateNewPostText={newTextChangeHandler}
                 addPost = {addPost}
                 posts = {state.profilePage.posts}
                 newPostText = {state.profilePage.newPostText}
        />
    );
}

export default MyPostsContainer