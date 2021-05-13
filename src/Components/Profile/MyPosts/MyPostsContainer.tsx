import React from "react";
import {PostType} from "../../../Redux/Store";
import {addPostActionCreator} from "../../../Redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux_store";

type MapStateToPropsType = {
    posts: Array<PostType>
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => (
    {
        posts: state.profilePage.posts,

    }
)


export default connect(mapStateToProps, {addPostActionCreator})(MyPosts);

