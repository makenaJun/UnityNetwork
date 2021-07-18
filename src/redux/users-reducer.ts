export type UserType = {
    id: string
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
};
export type UsersPageType = typeof initialState;

export type ActionsType = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>

const initialState = {
    users: [
        {
            id: '1',
            followed: false,
            fullName: 'Dmitry',
            status: 'I am a bos',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: '2',
            followed: false,
            fullName: 'Sasha',
            status: 'I am a bos too',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: '3',
            followed: true,
            fullName: 'Viktor',
            status: 'I am a bos too',
            location: {city: 'Kiev', country: 'Ukraine'}
        }
    ] as Array<UserType>
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {
    const changeFollowed = (userId: string, followed: boolean) => {
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

export const followAC = (userId: string) => ({type: 'FOLLOW', payload: {userId}} as const);

export const unfollowAC = (userId: string) => ({type: 'UNFOLLOW', payload: {userId}} as const);

export const setUsersAC = (users: Array<UserType>) => ({type: 'SET_USERS', payload: {users}} as const)