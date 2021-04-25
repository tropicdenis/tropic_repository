import React from "react";
import {
    InitialDialogsType,
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator
} from "../../Redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux_store";
import {Dispatch} from "redux";
type MapStateToPropsType = {
    dialogsPage: InitialDialogsType
    isAuth: boolean
}

let mapStateToProps = (state: AppStateType ): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

type MapDispatchToPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

let mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType  => {
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

