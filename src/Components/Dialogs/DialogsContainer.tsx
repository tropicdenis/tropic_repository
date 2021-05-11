import React from "react";
import {InitialDialogsType, sendMessageActionCreator} from "../../Redux/DialogsReducer";
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
    sendMessage: (NewMessageBody:string) => void
}

let mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType  => {
    return {
        sendMessage: (NewMessageBody:string) => {
            dispatch(sendMessageActionCreator(NewMessageBody))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

