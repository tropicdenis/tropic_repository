import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "../Post/Post";
import {ActionsType, PostType, ProfilePageType} from "../../../Redux/Store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/ProfileReducer";

type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void
}


const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message}
                                                               likesCount={p.likesCount}/>)

    const onAddPost = () => {
        props.addPost();
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
                              value={props.newPostText}>
                    </textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts