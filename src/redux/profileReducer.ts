const ADD_POST = 'ADD_POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT';

export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type ProfilePageType = typeof initialState;

export type ActionsType = ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewPostTextAC>

const initialState = {
    postsData: [
        {id: '1', message: 'Hi, how are you?', likesCount: 15},
        {id: '2', message: '\'It\'s my first post', likesCount: 21},
        {id: '3', message: 'Hello World!', likesCount: 27}
    ] as Array<PostType>,
    newPostText: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case 'ADD_POST' :
            const newPost: PostType = {
                id: String(state.postsData.length + 1),
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }

        case 'CHANGE_NEW_POST_TEXT':
            return {
                ...state,
                newPostText: action.payload.newPostText
            }

        default :
            return state;
    }
}


export const addPostAC = () => ({type: ADD_POST} as const);
export const changeNewPostTextAC = (newPostText: string) => ({
    type: CHANGE_NEW_POST_TEXT,
    payload: {newPostText}
} as const);

export default profileReducer;