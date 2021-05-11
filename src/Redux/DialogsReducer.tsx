
const SEND_MESSAGE = "SEND-MESSAGE";
export type DialogsActionsType = ReturnType<typeof sendMessageActionCreator>


export type DialogType = {
    name: string,
    id: number
}
export type MessageType = {
    id: number
    message: string
}

let initialState = {
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
    ] as Array<MessageType>,
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Valera"},
    ] as Array<DialogType>
}

export type InitialDialogsType = typeof initialState

const dialogsReducer = (state:InitialDialogsType = initialState, action: ActionsType):InitialDialogsType => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: new Date().getTime(), message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageActionCreator = (newMessageBody: string) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    } as const
}

type ActionsType = ReturnType<typeof  sendMessageActionCreator>

export default dialogsReducer