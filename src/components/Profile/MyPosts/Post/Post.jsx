import React from 'react';
import s from "./Post.module.css";

const Post = (props) => {
        return (
        <div className={s.item}>
            <img src="https://i.pinimg.com/736x/33/85/f2/3385f2e1ae928f80fda6304ce36c6165--avatar-makeup-film-avatar.jpg" />
            {props.message}
            <div>
                <span> {props.countlike} likes</span>
            </div>
        </div>
    )}

export default Post;