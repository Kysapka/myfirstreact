import React from 'react';
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
            <img src="http://i13.servimg.com/u/f13/17/99/72/91/pic10.jpg"/>

    <div className={s.loginBlock}>
        {props.isAuth
            ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
            : <NavLink to={'/login'}>Login</NavLink>
        }
    </div>

    </header>;
}

export default Header;