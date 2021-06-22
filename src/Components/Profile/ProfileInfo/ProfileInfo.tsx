import React, {ChangeEvent} from "react";
import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../Redux/Store";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user-avatar.jpg";
import Preloader from "../../common/Preloader/Preloader";

type PropsType = {
    isOwner: boolean
    profile: ProfileType | null
    status: string
    updateStatus: () => void
    savePhoto: (file: File) => void
}
const ProfileInfo = ({isOwner, profile, status, updateStatus, savePhoto}: PropsType) => {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
       if (e.target.files) {
           savePhoto(e.target.files[0])}
    }

    return (
        <div>
            <div>
                <img
                    src={'https://static9.depositphotos.com/1594308/1110/i/600/depositphotos_11107478-stock-photo-fantasy.jpg'} alt={'#'}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={profile?.photos.large || userPhoto} className={s.mainPhoto}/>
                { isOwner && <input type={"file"} onChange={onMainPhotoSelected}/> }
                <ProfileStatusWithHooks profile={profile} status={status} updateStatus={updateStatus}/>
            </div>

        </div>
    );
}

export default ProfileInfo