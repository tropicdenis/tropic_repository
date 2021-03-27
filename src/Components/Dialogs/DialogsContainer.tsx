import React, {ChangeEvent} from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import {StoreType} from "../../Redux/Store";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../Redux/DialogsReducer";
import Dialogs from "./Dialogs";

type DialogsPropsType = {
    store: StoreType
}
const DialogsContainer = (props: DialogsPropsType) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    let onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(body))
    }
    return (
       <Dialogs
           store={props.store}
           updateNewMessageBody={onNewMessageChange}
           sendMessage = {onSendMessageClick}
           dialogsPage = {state}
       />
    )
}

export default DialogsContainer

