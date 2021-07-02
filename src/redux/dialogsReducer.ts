import {ActionType, DialogsPagesType, MessageType} from './state';

const ADD_MESSAGE = 'ADD_MESSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE_NEW_MESSAGE_TEXT';

const dialogsReducer = (state: DialogsPagesType, action: ActionType): DialogsPagesType => {

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