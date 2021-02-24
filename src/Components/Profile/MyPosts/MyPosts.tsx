import React from "react";
import s from './MyPosts.module.css';
import Post from "../Post/Post";
import {PostType} from "../../../Redux/State";

type MyPostsPropsType = {
    posts: Array<PostType>
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            alert(newPostElement.current.value)
            //alert(newPostElement.current?.value) Вместо IF. Проверит по ?
            // существует ли .current(не null)
        }

    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button
                        onClick={addPost}
                    >Add post
                    </button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts