import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../Redux/Store";
import ProfileStatus from './ProfileStatus'


type PropsType = {
    profile: ProfileType
}
const ProfileInfo = (props: PropsType) => {

    return (
        <div>
            <div>
                <img
                    src={'https://static9.depositphotos.com/1594308/1110/i/600/depositphotos_11107478-stock-photo-fantasy.jpg'}></img>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={"Hello"}/>
            </div>

        </div>
    );
}

export default ProfileInfo