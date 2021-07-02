import {ActionType, PostType, ProfilePageType} from './state';

const ADD_POST = 'ADD_POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT';

const profileReducer = (state: ProfilePageType, action: ActionType): ProfilePageType => {
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