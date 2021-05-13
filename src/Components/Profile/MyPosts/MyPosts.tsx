import React from "react";
import s from './MyPosts.module.css';
import Post from "../Post/Post";
import {PostType} from "../../../Redux/Store";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {addPostActionCreator} from "../../../Redux/ProfileReducer";

type MyPostsPropsType = {
    posts: Array<PostType>
    addPostActionCreator: (text: string) => void
}


const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message}
                                                               likesCount={p.likesCount}/>)

    let onAddPost = (values: any ) => {
        props.addPostActionCreator(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

const maxLength10 = maxLengthCreator(10)

let AddNewPostForm = (props: any) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={Textarea}
                validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts