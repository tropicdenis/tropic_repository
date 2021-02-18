import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import {DialogsPageType, DialogType, MessageType} from "../../Redux/State";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
}
const Dialogs = (props: DialogsPropsType) => {


    let dialogsElemets = props.dialogsPage.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages
        .map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElemets}
                </div>

                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs

