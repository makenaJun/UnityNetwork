import {Dispatch} from 'redux';
import {profileApi} from '../api/profile-api';
import {ResultsCode} from '../api/api';

export type PostType = {
    id: string,
    message: string,
    likesCount: number,
};
export type UserPhotosType = {
    small: string | null,
    large: string | null,
};
export type UserContactsType = {
    github: string | null,
    vk: string | null,
    facebook: string | null,
    instagram: string | null,
    twitter: string | null,
    website: string | null,
    youtube: string | null,
    mainLink: string | null,
};
export type UserProfileType = {
    aboutMe: string | null,
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string,
    contacts: UserContactsType,
    photos: UserPhotosType,
};

export type ProfilePageStateType = typeof initialState;

export type ActionsType = ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>

const initialState = {
    postsData: [
        {id: '1', message: 'Hi, how are you?', likesCount: 15},
        {id: '2', message: '\'It\'s my first post', likesCount: 21},
        {id: '3', message: 'Hello World!', likesCount: 27},
    ] as Array<PostType>,
    profile: null as null | UserProfileType,
    status: '' as null | string,
};

const profileReducer = (state: ProfilePageStateType = initialState, action: ActionsType): ProfilePageStateType => {
    switch (action.type) {
        case 'UN/PROFILE/ADD_POST' : {
            const newPost: PostType = {
                id: String(state.postsData.length + 1),
                message: action.payload.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                postsData: [newPost, ...state.postsData]
            };
        }
        case 'UN/PROFILE/SET_USER_PROFILE': {
            return {
                ...state,
                profile: action.payload.profile
            };
        }
        case 'UN/PROFILE/SET_USER_STATUS': {
            return {
                ...state,
                status: action.payload.status
            };
        }
        default :
            return state;
    }
}


export const addPost = (newPostText: string) => ({type: 'UN/PROFILE/ADD_POST', payload: {newPostText}} as const);

export const setUserProfile = (profile: UserProfileType) => ({
    type: 'UN/PROFILE/SET_USER_PROFILE',
    payload: {profile}
} as const);

export const setUserStatus = (status: string) => ({
    type: 'UN/PROFILE/SET_USER_STATUS',
    payload: {status}
} as const);

//THUNK

export const getUserProfile = (userId: number) => async (dispatch: Dispatch) => {
    const profile = await profileApi.getProfile(userId);
    dispatch(setUserProfile(profile));
};

export const getUserStatus = (userId: number) => async (dispatch: Dispatch) => {
    const status = await profileApi.getStatus(userId);
    if (typeof status === 'string') {
        dispatch(setUserStatus(status));
    }
};

export const updateUserStatus = (status: string) => async (dispatch: Dispatch) => {
    const response = await profileApi.updateStatus(status);
    if(response.resultCode === ResultsCode.SUCCESS){
        dispatch(setUserStatus(status));
    }
};

export default profileReducer;