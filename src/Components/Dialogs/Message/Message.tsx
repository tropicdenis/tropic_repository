import React from "react";
import s from "../Dialogs.module.css"

type MessageType = {
    message: string
    id: number
}

const Message = (props: MessageType) => {
    return (
        <div className={s.messageItem}>{props.message}

        </div>

    )
}

export default Message

