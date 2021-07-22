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
    ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>

const initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    currentPage: 1,
    totalUsersCount: 0,
    isFetching: false
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {
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
        case 'UN/USERS/SET_USERS': {
            return {
                ...state,
                users: action.payload.users
            }
        }
        case 'UN/USERS/SET_CURRENT_PAGE': {
            return {
                ...state,
                currentPage: action.payload.currentPage
            }
        }
        case 'UN/USERS/SET_TOTAL_USERS_COUNT': {
            return {
                ...state,
                totalUsersCount: action.payload.totalCount
            }
        }
        case 'UN/USERS/TOGGLE_IS_FETCHHING': {
            return {
                ...state,
                isFetching: action.payload.isFetching
            }
        }
        default: {
            return state;
        }
    }
}

export const follow = (userId: number) => ({type: 'UN/USERS/FOLLOW', payload: {userId}} as const);

export const unfollow = (userId: number) => ({type: 'UN/USERS/UNFOLLOW', payload: {userId}} as const);

export const setUsers = (users: Array<UserType>) => ({type: 'UN/USERS/SET_USERS', payload: {users}} as const);

export const setCurrentPage = (currentPage: number) => ({
    type: 'UN/USERS/SET_CURRENT_PAGE',
    payload: {currentPage}
} as const);

export const setTotalUsersCount = (totalCount: number) => ({
    type: 'UN/USERS/SET_TOTAL_USERS_COUNT',
    payload: {totalCount}
} as const)

export const toggleIsFetching = (isFetching: boolean) => ({
    type: 'UN/USERS/TOGGLE_IS_FETCHHING',
    payload: {isFetching}
} as const)