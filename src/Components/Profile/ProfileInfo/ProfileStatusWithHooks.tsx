import {ProfileType} from "../../../Redux/Store";
import React, {ChangeEvent, useState} from "react";


type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

type StateType = {
    editMode: boolean,
    status: string
};

const  ProfileStatusWithHooks = (props: PropsType) =>{


    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>)=> {
        setStatus(e.currentTarget.value);
    }
        return (
            <div>
                { !editMode &&
                    <div>
                        <span onDoubleClick={activateEditMode}>{props.status || "------"}</span>
                    </div>
                }
                {editMode &&
                    <div>
                        <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                               value={status}
                               />
                    </div>
                }
            </div>
        );
    }


export default ProfileStatusWithHooks