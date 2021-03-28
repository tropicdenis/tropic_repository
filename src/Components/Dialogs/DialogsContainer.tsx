import React, {ChangeEvent} from "react";
import {StoreType} from "../../Redux/Store";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../Redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

type DialogsPropsType = {
    store: StoreType
}

let mapStateToProps = (state: ) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: ) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyActionCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer

