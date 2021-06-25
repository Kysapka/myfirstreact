import React from 'react';
import s from "./Profile.module.css";

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src="http://plantura.ru/wp-content/uploads/2018/02/%D0%9A%D1%83%D0%B1%D0%B0-%D1%87%D1%82%D0%BE-%D0%BD%D1%83%D0%B6%D0%BD%D0%BE-%D0%B7%D0%BD%D0%B0%D1%82%D1%8C.jpg" />
        </div>
        <div>
            ava + description
        </div>
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>
        </div>
    </div>
}

export default Profile;