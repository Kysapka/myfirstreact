import s from "./preloader.module.css"
import preloader from "../../../assets/images/preloader.gif";
import React from "react";

let Preloader = (props) => {
    return <img className={s.preloader} src={preloader} />


}

export default Preloader;