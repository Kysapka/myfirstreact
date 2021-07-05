import React from 'react';
import connect from 'react-redux/lib/connect/connect';
import Friends from './Friends';


let mapStateToProps = (state) => {
    return {
        friends: state.sidebarPage.friends
    }
}
let mapDispatchToProps = () => {
    return {

    }
}

let FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;