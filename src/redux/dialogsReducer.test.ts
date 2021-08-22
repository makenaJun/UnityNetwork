import dialogsReducer, {addMessage, DialogsPageStateType} from './dialogsReducer';

let startState: DialogsPageStateType;

beforeEach(() => {
    startState = {
        dialogsData: [
            {id: '1', name: 'Igor'},
            {id: '2', name: 'Marina'},
            {id: '3', name: 'Sasha'},
        ],
        messagesData: [
            {id: '1', message: 'Hello'},
            {id: '2', message: 'How are you?'},
        ],
    }
});

describe('Dialogs reducer', () => {
    it('message should be added', () => {
        const message = 'New message';
        const action = addMessage(message);

        const endState = dialogsReducer(startState, action);

        expect(startState).not.toBe(endState);
        expect(endState.messagesData.length).toBe(3);
        expect(endState.messagesData[2].message).toBe(message);
    });
});