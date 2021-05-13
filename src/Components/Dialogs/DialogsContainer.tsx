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

export default compose<React.ComponentType>(
    connect(mapStateToProps, {sendMessageActionCreator}),
    withAuthRedirect
)(Dialogs)

