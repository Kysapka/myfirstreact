import React from 'react';
import s from "./Post.module.css";

const Post = (props) => {
        return (
        <div className={s.item}>
            <img src="https://cs6.pikabu.ru/avatars/404/x404070-828004264.png" />
            {props.message}
            <div>
                <span> {props.likesCount} likes</span>
            </div>
        </div>
    )}

export default Post;