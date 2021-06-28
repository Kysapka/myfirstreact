import React from 'react';
import s from "./ProfileInfo.module.css";



const ProfileInfo = () => {
    return (
        <div>
           <div>
                <img src="	http://demo.holathemes.com/simplest-html/assets/images/avatars/profile-cover.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;