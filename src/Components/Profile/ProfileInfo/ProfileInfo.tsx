import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src={'https://static9.depositphotos.com/1594308/1110/i/600/depositphotos_11107478-stock-photo-fantasy.jpg'}></img>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>

        </div>
    );
}

export default ProfileInfo