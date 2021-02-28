import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "../Post/Post";
import {PostType, ProfilePageType} from "../../../Redux/State";

type MyPostsPropsType = {
    profilePage: ProfilePageType
    addPost: (updateNewPostText: string) => void
    updateNewPostText: (updateNewPostText: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.profilePage.posts.map(p => <Post message={p.message}
                                                               likesCount={p.likesCount}/>)

    const addPost = () => {
        props.addPost(props.profilePage.newPostText);
    }

    const newTextChangeHandler = (event:ChangeEvent<HTMLTextAreaElement>)=> {
        props.updateNewPostText(event.currentTarget.value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={newTextChangeHandler}
                              value={props.profilePage.newPostText}>
                    </textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts