import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = (props) => {
    return (<div>
            <div>
                <textarea></textarea>
                <button>Add post</button>

            </div>
            <div className={s.posts}>
                <Post countlike="7" message= "Hi, how are you"/>
                <Post countlike="12" message= "It's my first post" />

            </div>
        </div>
    )
}

export default MyPosts;