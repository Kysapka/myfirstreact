import React from 'react';
import MyPosts from './MyPosts';
import Post from './Post/Post';
import props from '../../../redux/store';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';


const MyPostsContainer = (props) => {

    let state =  props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (<MyPosts updateNewPostText={onPostChange} addPost={addPost}
                     posts={state.profilePage.posts}
    />)
}

export default MyPostsContainer;