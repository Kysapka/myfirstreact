import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {render, screen} from "@testing-library/react";
import App from "../App";

let state = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It is my first post!", likesCount: 11},
        {id: 3, message: "Bla bla", likesCount: 7},
        {id: 4, message: "Da da", likesCount: 5}
    ]};

test('new post should be added', () => {
    // 1. length of post should be incremented
    let action = addPostActionCreator("it-kamasutra.com");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(5);

});

test('message of new post should be correct', () => {
    // 1. length of post should be incremented
    let action = addPostActionCreator("it-kamasutra.com");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[4].message).toBe("it-kamasutra.com");
});

test('after deleting length of messages should be decrement', () => {
    // 1. length of post should be incremented
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);

});

test('after deleting length should not be decrement if id is incorrect', () => {
    // 1. length of post should be incremented
    let action = deletePost(1000);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(4);

});



