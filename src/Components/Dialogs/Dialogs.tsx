import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import {DialogType, MessageType} from "../../index";

type DialogsPropsType={
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

const Dialogs = (props: DialogsPropsType) => {


    let dialogsElemets = props.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages
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

