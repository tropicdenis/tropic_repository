import React from "react";
import {PostType, StoreType} from "../../../Redux/Store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux_store";
import {Dispatch} from "redux";

type MyPostsPropsType = {
    store: StoreType
}

type MapStateToPropsType = {
    posts: Array<PostType>
    newPostText: string
}

const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

type MapDispatchToPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}

const mapDispatchToProps = (dispatch: Dispatch ):MapDispatchToPropsType => {
    return {
        updateNewPostText: (text: string) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer