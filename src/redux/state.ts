export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}
export type ProfilePageType = {
    postsData: Array<PostType>
    newPostText: string
}
export type DialogsPagesType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
    newMessageText: string
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPages: DialogsPagesType
}
export type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void
    getState: () => StateType
    dispatch: (action: ActionType) => void
}
export type ActionType = {
    type: string
    payload?: any
}

const ADD_POST = 'ADD_POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE_NEW_MESSAGE_TEXT';

export const store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: '1', message: 'Hi, how are you?', likesCount: 15},
                {id: '2', message: '\'It\'s my first post', likesCount: 21},
                {id: '3', message: 'Hello World!', likesCount: 27}
            ],
            newPostText: ''
        },
        dialogsPages: {
            dialogsData: [
                {id: '1', name: 'Igor'},
                {id: '2', name: 'Marina'},
                {id: '3', name: 'Sasha'},
                {id: '4', name: 'Maxim'},
                {id: '5', name: 'Andrei'},
                {id: '6', name: 'Zenia'}
            ],
            messagesData: [
                {id: '1', message: 'Hello'},
                {id: '2', message: 'How are you?'},
                {id: '3', message: 'My first message))'},
                {id: '4', message: 'Yo yo yo'},
                {id: '5', message: 'Hello man!'}
            ],
            newMessageText: ''
        }
    },
    _callSubscriber(state: StateType) {
        console.log('State changed')
    },
    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action: ActionType) {
        if (action.type === ADD_POST) {
            const newPost: PostType = {
                id: String(this._state.profilePage.postsData.length + 1),
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === CHANGE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.payload.newPostText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            const newMessage: MessageType = {
                id: String(this._state.dialogsPages.messagesData.length + 1),
                message: this._state.dialogsPages.newMessageText
            }
            this._state.dialogsPages.messagesData.push(newMessage);
            this._state.dialogsPages.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === CHANGE_NEW_MESSAGE_TEXT) {
            debugger
            this._state.dialogsPages.newMessageText = action.payload.newMessageText;
            this._callSubscriber(this._state);
        }
    }
}


export const addPostAC = (): ActionType => ({type: ADD_POST});
export const changeNewPostText = (newPostText: string): ActionType => ({
    type: CHANGE_NEW_POST_TEXT,
    payload: {newPostText}
});
export const addMessageAC = () => ({type: ADD_MESSAGE});
export const newMessageTextAC = (newMessageText: string) => ({
    type: CHANGE_NEW_MESSAGE_TEXT,
    payload: {newMessageText}
});
