import {Dispatch} from 'redux';
import {usersApi} from '../api/api';

export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type UserPhotosType = {
    small: string | null
    large: string | null
}
export type UserContactsType = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}
export type UserProfileType = {
    aboutMe: string | null
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    contacts: UserContactsType
    photos: UserPhotosType
}

export type ProfilePageStateType = typeof initialState;

export type ActionsType = ReturnType<typeof addPost>
    | ReturnType<typeof changeNewPostText>
    | ReturnType<typeof setUserProfile>

const initialState = {
    postsData: [
        {id: '1', message: 'Hi, how are you?', likesCount: 15},
        {id: '2', message: '\'It\'s my first post', likesCount: 21},
        {id: '3', message: 'Hello World!', likesCount: 27}
    ] as Array<PostType>,
    newPostText: '',
    profile: null as null | UserProfileType
}

const profileReducer = (state: ProfilePageStateType = initialState, action: ActionsType): ProfilePageStateType => {
    switch (action.type) {
        case 'UN/PROFILE/ADD_POST' : {
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
        }
        case 'UN/PROFILE/CHANGE_NEW_POST_TEXT': {
            return {
                ...state,
                newPostText: action.payload.newPostText
            }
        }
        case 'UN/PROFILE/SET_USER_PROFILE': {
            return {
                ...state,
                profile: action.payload.profile
            }
        }

        default :
            return state;
    }
}


export const addPost = () => ({type: 'UN/PROFILE/ADD_POST'} as const);

export const changeNewPostText = (newPostText: string) => ({
    type: 'UN/PROFILE/CHANGE_NEW_POST_TEXT',
    payload: {newPostText}
} as const);

export const setUserProfile = (profile: UserProfileType) => ({
    type: 'UN/PROFILE/SET_USER_PROFILE',
    payload: {profile}
} as const)

export const getUserProfile = (userId: number) => async (dispatch: Dispatch) => {
    const profile = await usersApi.getProfile(userId);
    dispatch(setUserProfile(profile));
}

export default profileReducer;