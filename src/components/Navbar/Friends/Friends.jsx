import React from 'react';
import s from "./Friends.module.css";
import FriendsItem from './FriendsItem/FriendsItem';



const Friends = (props) => {

    let friendsElements = props.state.friends.map(f => <FriendsItem name={f.name} id={f.id} />);

    return (
        <div className={s.friends}>
            <div>
                My Friends
            </div>
            <div>
                {friendsElements}
            </div>
        </div>

    );
}

export default Friends;
