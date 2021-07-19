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

export type ActionsType =
    ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>

const initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    currentPage: 1,
    totalUsersCount: 0
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
                users: action.payload.users
            }
        }
        case 'SET_CURRENT_PAGE': {
            return {
                ...state,
                currentPage: action.payload.currentPage
            }
        }
        case 'SET_TOTAL_USERS_COUNT': {
            return {
                ...state,
                totalUsersCount: action.payload.totalCount
            }
        }
        default: {
            return state;
        }
    }
}

export const followAC = (userId: number) => ({type: 'FOLLOW', payload: {userId}} as const);

export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', payload: {userId}} as const);

export const setUsersAC = (users: Array<UserType>) => ({type: 'SET_USERS', payload: {users}} as const);

export const setCurrentPageAC = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', payload: {currentPage}} as const);

export const setTotalUsersCountAC = (totalCount: number) => ({
    type: 'SET_TOTAL_USERS_COUNT',
    payload: {totalCount}
} as const)