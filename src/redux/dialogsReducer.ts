const ADD_MESSAGE = 'ADD_MESSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE_NEW_MESSAGE_TEXT';

export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}

export type DialogsPagesType = typeof initialState;


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

const dialogsReducer = (state: DialogsPagesType = initialState, action: ActionType): DialogsPagesType => {

    switch (action.type) {
        case 'ADD_MESSAGE':
            const newMessage: MessageType = {
                id: String(state.messagesData.length + 1),
                message: state.newMessageText
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageText: ''
            }
        case 'CHANGE_NEW_MESSAGE_TEXT':
            return {
                ...state,
                newMessageText: action.payload.newMessageText
            }
        default:
            return state;
    }
}


export const addMessageAC = () => ({type: ADD_MESSAGE} as const);
export const newMessageTextAC = (newMessageText: string) => ({
    type: CHANGE_NEW_MESSAGE_TEXT,
    payload: {newMessageText}
} as const);

export default dialogsReducer;