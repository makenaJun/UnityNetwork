import {Dispatch} from 'redux';
import {ResultsCode, usersApi} from '../api/api';

export type UserPhotosType = {
    small: string | null
    large: string | null
}
export type UserType = {
    id: number
    name: string
    status: string
    photos: UserPhotosType
    followed: boolean
};
export type UsersPageStateType = typeof initialState;

export type ActionsType =
    ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingInProgress>

const initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    currentPage: 1,
    totalUsersCount: 0,
    isFetching: false,
    followingInProgress: [] as Array<number>,
}

export const usersReducer = (state: UsersPageStateType = initialState, action: ActionsType): UsersPageStateType => {
    const changeFollowed = (userId: number, followed: boolean) => {
        return {
            ...state,
            users: state.users.map(u => u.id === userId ? {...u, followed: followed} : u)
        }
    };

    switch (action.type) {
        case 'UN/USERS/FOLLOW': {
            return changeFollowed(action.payload.userId, true);
        }
        case 'UN/USERS/UNFOLLOW': {
            return changeFollowed(action.payload.userId, false);
        }
        case 'UN/USERS/SET_USERS':
        case 'UN/USERS/SET_CURRENT_PAGE':
        case 'UN/USERS/SET_TOTAL_USERS_COUNT':
        case 'UN/USERS/TOGGLE_IS_FETCHHING': {
            return {
                ...state,
                ...action.payload
            }
        }
        case 'UN/USERS/TOGGLE_FOLLOWING_IS_PROGRESS': {
            return {
                ...state,
                followingInProgress: action.payload.isFetching ? [...state.followingInProgress, action.payload.userId] :
                    state.followingInProgress.filter(u => u !== action.payload.userId)
            }
        }
        default: {
            return state;
        }
    }
}

export const followSuccess = (userId: number) => ({type: 'UN/USERS/FOLLOW', payload: {userId}} as const);

export const unfollowSuccess = (userId: number) => ({type: 'UN/USERS/UNFOLLOW', payload: {userId}} as const);

export const setUsers = (users: Array<UserType>) => ({type: 'UN/USERS/SET_USERS', payload: {users}} as const);

export const setCurrentPage = (currentPage: number) => ({
    type: 'UN/USERS/SET_CURRENT_PAGE',
    payload: {currentPage}
} as const);

export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: 'UN/USERS/SET_TOTAL_USERS_COUNT',
    payload: {totalUsersCount}
} as const)

export const toggleIsFetching = (isFetching: boolean) => ({
    type: 'UN/USERS/TOGGLE_IS_FETCHHING',
    payload: {isFetching}
} as const)

export const toggleFollowingInProgress = (userId: number, isFetching: boolean) => ({
    type: 'UN/USERS/TOGGLE_FOLLOWING_IS_PROGRESS',
    payload: {
        userId,
        isFetching,
    }
} as const)

export const getUsers = (currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true));

    const data = await usersApi.getUsers(currentPage, pageSize);
    dispatch(setCurrentPage(currentPage));

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}

export const followUser = (userId: number, follow: boolean) => async (dispatch: Dispatch) => {
    dispatch(toggleFollowingInProgress(userId, true));
    const data = await usersApi[follow ? 'follow' : 'unfollow'](userId);

    if (data.resultCode === ResultsCode.SUCCESS) {
        dispatch(follow ? followSuccess(userId) : unfollowSuccess(userId));
    }

    dispatch(toggleFollowingInProgress(userId, false));
}