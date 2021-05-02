import {ProfileType} from "../../../Redux/Store";
import s from "./ProfileInfo.module.css";
import React from "react";


type PropsType = {
    profile: ProfileType
}
const ProfileStatus = (props: PropsType) => {

    return (
        <div>
            <div>
                <span>props.status</span>
            </div>
            <div>
                <input value={props.status}/>
            </div>
        </div>
    );
}

export default ProfileStatus