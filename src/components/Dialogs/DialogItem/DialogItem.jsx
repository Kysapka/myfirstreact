import React from 'react';
import s from "./../Dialogs.module.css"
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialogsItems + ' ' + s.activeLink}>
            <img className="avatar" src="https://cs6.pikabu.ru/avatars/404/x404070-828004264.png"/>
            <NavLink activeClassName={s.activeLink} to={path}>{props.name}</NavLink>
        </div>

    );

}


export default DialogItem;