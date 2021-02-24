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
    let newMessageElement = React.createRef<HTMLTextAreaElement>();
    let addMessage = () => {
        if (newMessageElement.current) {
            let text = newMessageElement.current.value;
            alert(newMessageElement.current.value)
            //alert(newPostElement.current?.value) Вместо IF. Проверит по ?
            // существует ли .current(не null)
        }
    }
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElemets}
                </div>

                <div className={s.messages}>
                    {messagesElements}
                    <textarea ref={newMessageElement}></textarea>
                    <button onClick={addMessage}>Add Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs

