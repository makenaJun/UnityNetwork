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
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPages: DialogsPagesType
}

export const state: StateType = {
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
        ]
    }
}

let rerenderEntireTree = (state: StateType) => {

}

export const changeNewPostText = (newPostText: string) => {
    state.profilePage.newPostText = newPostText;
    rerenderEntireTree(state);
}

export const addPost = () => {
    const newPost: PostType = {
        id: String(state.profilePage.postsData.length + 1),
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const subscribe = (observer: (state: StateType) => void) => {
    rerenderEntireTree = observer;
}