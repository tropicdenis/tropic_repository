import React from "react";
import {
    InitialDialogsType,
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator
} from "../../Redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux_store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

type MapStateToPropsType = {
    dialogsPage: InitialDialogsType
}

let mapStateToProps = (state: AppStateType ): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
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

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

