import React from 'react';
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";



const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
       props.savePhoto(e.target.files[0]);
   }
}
     return (
        <div>
            <div className={styles.descriptionBlock}>
                <img  className={styles.profilePhoto} alt={""}
                      src={props.profile.photos.large || userPhoto } />
                {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/> }
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
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