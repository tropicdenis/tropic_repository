import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile ) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img
                    src={'https://static9.depositphotos.com/1594308/1110/i/600/depositphotos_11107478-stock-photo-fantasy.jpg'}></img>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>

        </div>
    );
}

export default ProfileInfo