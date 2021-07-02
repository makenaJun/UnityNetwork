import profileReducer, {addPostAC, changeNewPostTextAC} from './profileReducer';
import dialogsReducer, {addMessageAC, newMessageTextAC} from './dialogsReducer';

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
export type ActionType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewPostTextAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof newMessageTextAC>

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
    _callSubscriber(state) {
        console.log('State changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPages = dialogsReducer(this._state.dialogsPages, action);
        this._callSubscriber(this._state);
    }
}
