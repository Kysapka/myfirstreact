import {rerenderEntireTree} from '../render';

let state = {

    profilePage: {
        posts: [
            {id: "1", message: "Hi, how are you?", likesCount: 12},
            {id: "2", message: "It\'s my first post!", likesCount: 11},
            {id: "3", message: "Bla bla", likesCount: 7},
            {id: "4", message: "Da da", likesCount: 5}
        ],
        newPostText: 'it-kamasutra.com'
    },
    dialogsPage: {
        messages: [
            {id: "1", message: "Hi"},
            {id: "2", message: "How are you?"},
            {id: "3", message: "Yo"},
            {id: "4", message: "Yo"},
            {id: "5", message: "Yo"},
        ],
        dialogs: [
            {id: "1", name: "Dimych"},
            {id: "2", name: "Andrey"},
            {id: "3", name: "Sveta"},
            {id: "4", name: "Sasha"},
            {id: "5", name: "Viktov"},
            {id: "6", name: "Valera"}
        ]
    },
    sidebar: {
        friends: [
            {id: "1", name: "Pavel"},
            {id: "2", name: "Andrey"}
        ]
    }
}

window.state = state;

export let addPost = () => {

    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText =newText;
    rerenderEntireTree(state);
}


export default state;