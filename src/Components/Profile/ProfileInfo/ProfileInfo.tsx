import React from "react";
import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../Redux/Store";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: () => void
}
const ProfileInfo = ({profile, status, updateStatus}: PropsType) => {

    return (
        <div>
            <div>
                <img
                    src={'https://static9.depositphotos.com/1594308/1110/i/600/depositphotos_11107478-stock-photo-fantasy.jpg'} alt={'#'}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={profile?.photos.large}/>
                <ProfileStatusWithHooks profile={profile} status={status} updateStatus={updateStatus}/>
            </div>

        </div>
    );
}

export default ProfileInfo