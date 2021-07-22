export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}

export type DialogsPageStateType = typeof initialState;


export type ActionType =
    ReturnType<typeof addMessageAC>
    | ReturnType<typeof newMessageTextAC>

const initialState = {
    dialogsData: [
        {id: '1', name: 'Igor'},
        {id: '2', name: 'Marina'},
        {id: '3', name: 'Sasha'},
        {id: '4', name: 'Maxim'},
        {id: '5', name: 'Andrei'},
        {id: '6', name: 'Zenia'}
    ] as Array<DialogType>,
    messagesData: [
        {id: '1', message: 'Hello'},
        {id: '2', message: 'How are you?'},
        {id: '3', message: 'My first message))'},
        {id: '4', message: 'Yo yo yo'},
        {id: '5', message: 'Hello man!'}
    ] as Array<MessageType>,
    newMessageText: ''
}

const dialogsReducer = (state: DialogsPageStateType = initialState, action: ActionType): DialogsPageStateType => {

    switch (action.type) {
        case 'UN/DIALOGS/ADD_MESSAGE':
            const newMessage: MessageType = {
                id: String(state.messagesData.length + 1),
                message: state.newMessageText
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageText: ''
            }
        case 'UN/DIALOGS/CHANGE_NEW_MESSAGE_TEXT':
            return {
                ...state,
                newMessageText: action.payload.newMessageText
            }
        default:
            return state;
    }
}


export const addMessageAC = () => ({type: 'UN/DIALOGS/ADD_MESSAGE'} as const);
export const newMessageTextAC = (newMessageText: string) => ({
    type: 'UN/DIALOGS/CHANGE_NEW_MESSAGE_TEXT',
    payload: {newMessageText}
} as const);

export default dialogsReducer;