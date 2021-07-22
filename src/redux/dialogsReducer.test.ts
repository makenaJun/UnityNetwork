import dialogsReducer, {addMessageAC, DialogsPagesType, newMessageTextAC} from './dialogsReducer';

let startState: DialogsPagesType;

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
        newMessageText: 'New'
    }
})
describe('Dialogs reducer', () => {
    it('message should be added', () => {
        const action = addMessageAC();

        const endState = dialogsReducer(startState, action);

        expect(startState).not.toBe(endState);
        expect(endState.messagesData.length).toBe(3);
        expect(endState.messagesData[2].message).toBe('New');
    })

    it('new message text should change', () => {
        const testTextNewPost = 'New text'

        const action = newMessageTextAC(testTextNewPost);

        const endState = dialogsReducer(startState, action);

        expect(startState).not.toBe(endState);
        expect(endState.messagesData.length).toBe(2);
        expect(endState.newMessageText).toBe('New text');
    })
})