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
export type UsersPageType = typeof initialState;

export type ActionsType = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>

const initialState = {
    users: [
        {
            id: 1,
            name: 'Dmitry',
            status: 'I am a bos',
            photos: {
                small: null,
                large: null
            },
            followed: false,
        },
        {
            id: 2,
            name: 'Sasha',
            status: 'I am a bos too',
            photos: {
                small: null,
                large: null
            },
            followed: true,
        },
        {
            id: 3,
            name: 'Viktor',
            status: 'I am a bos too',
            photos: {
                small: null,
                large: null
            },
            followed: false,
        }
    ] as Array<UserType>
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {
    const changeFollowed = (userId: number, followed: boolean) => {
        return {
            ...state,
            users: state.users.map(u => u.id === userId ? {...u, followed: followed} : u)
        }
    };

    switch (action.type) {
        case 'FOLLOW': {
            return changeFollowed(action.payload.userId, true);
        }
        case 'UNFOLLOW': {
            return changeFollowed(action.payload.userId, false);
        }
        case 'SET_USERS': {
            return {
                ...state,
                users: [...state.users, ...action.payload.users]
            }
        }
        default: {
            return state;
        }
    }
}

export const followAC = (userId: number) => ({type: 'FOLLOW', payload: {userId}} as const);

export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', payload: {userId}} as const);

export const setUsersAC = (users: Array<UserType>) => ({type: 'SET_USERS', payload: {users}} as const)