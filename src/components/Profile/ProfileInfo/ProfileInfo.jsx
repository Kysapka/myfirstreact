import React from 'react';
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatus from "./ProfileStatus";



const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

     return (
        <div>
{/*           <div>
                <img src="http://demo.holathemes.com/simplest-html/assets/images/avatars/profile-cover.jpg" />
            </div>*/}
            <div className={styles.descriptionBlock}>
                <img  className={styles.profilePhoto} src={props.profile.photos.large} />
                <ProfileStatus status={"Hello my friends!"} />
                <div>
                    Обо мне: {props.profile.aboutMe}
                </div>
                <div>
                    Полное имя: {props.profile.fullName}
                </div>
                <div>
                    Контакты: <div>{props.profile.contacts.facebook}</div>
                    <div>{props.profile.contacts.website}</div>
                    <div>{props.profile.contacts.vk}</div>
                    <div>{props.profile.contacts.twitter}</div>
                    <div>{props.profile.contacts.instagram}</div>
                    <div>{props.profile.contacts.youtube}</div>
                    <div>{props.profile.contacts.github}</div>
                    <div>{props.profile.contacts.mainLink}</div>
                </div>

                {props.profile.lookingForAJob ?
                    <div>
                        Ищу работу! {props.profile.lookingForAJobDescription}
                    </div> : null }
            </div>
        </div>
    )
}

export default ProfileInfo;