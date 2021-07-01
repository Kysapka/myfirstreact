import React from 'react';
import s from './FriendsItem.module.css';
import {NavLink} from 'react-router-dom';


const FriendsItem = (props) => {
    let path = "/friends/" + props.id;

    return  (
        <div className={s.avatar}>
            <div>
                <img src="https://cs6.pikabu.ru/avatars/404/x404070-828004264.png"/>
            </div>
            <div className={s.friendItem}>
                <NavLink activeClassName={s.activeLink} to={path}>{props.name}</NavLink>
            </div>
        </div>
    )
};

export default FriendsItem;