import React from "react";
import {createField, GetStringKeys, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import { ProfileType } from "../../../Redux/Store";

type PropsType = {
    profile: ProfileType
}
type ProfileTypeKeys = GetStringKeys<ProfileType>
const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType > = ({handleSubmit, profile, error}) => {
    let contacts;
    if (profile?.contacts) { contacts = Object.keys(profile.contacts).map(key => {
            return <div key={key} >
                <b>{key}: {createField(key,"contacts" + key, [], Input )}</b>
            </div>
        })}
    // @ts-ignore
    return <form onSubmit={handleSubmit}>
        <div>
            <button onChange={handleSubmit}>save</button>
            {error && <div>
                {error}</div>}

        </div>
        <div>
            <b>Full name</b>:
            {createField<ProfileTypeKeys>("Full name", "fullName", [], Input)}
        </div>
        <div>
            <b>Looking for a job</b>: {createField("", "lookingForAJob", [], Input,
            {type: "checkbox"})}
        </div>
        <div>
            <b>My professional skills</b>:
            {createField<ProfileTypeKeys>("My professional skills",
                "lookingForAJobDescription",
                [], Textarea)}
        </div>
        <div>
            <b>About me</b>:
            {createField<ProfileTypeKeys>("About me",
                "aboutMe",
                [], Textarea)}
        </div>
        <div>
            <b>Contacts</b>:
            {contacts}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;