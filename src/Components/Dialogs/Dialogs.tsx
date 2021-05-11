import React, {ChangeEvent} from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import {InitialDialogsType} from "../../Redux/DialogsReducer";
import {Field, reduxForm} from "redux-form";

type DialogsPropsType = {
    dialogsPage: InitialDialogsType
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
    isAuth: boolean
}
const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage;

    let dialogsElemets = state.dialogs
        .map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = state.messages
        .map(m => <Message message={m.message} key={m.id} id={m.id}/>)
    let newMessageBody = state.newMessageBody;
    let addNewMessage = (values:) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElemets}
                </div>

                <div className={s.messages}>
                    <div>{messagesElements}</div>

                </div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
    )
}

const AddMessageForm = (props:) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody" placeholder="Enter your message" />
            </div>
            <div>
                <button>Send Message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs

