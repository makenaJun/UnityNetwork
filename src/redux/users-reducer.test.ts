import {
    follow,
    setCurrentPage, setTotalUsersCount,
    setUsers, toggleIsFetching,
    unfollow,
    UsersPageType,
    usersReducer,
    UserType
} from './users-reducer';

let startState: UsersPageType;

beforeEach(() => {
    startState = {
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
                followed: false
            },
            {
                id: 3,
                name: 'Viktor',
                status: 'I am a bos too',
                photos: {
                    small: null,
                    large: null
                },
                followed: true
            }
        ]
        ,
        currentPage: 1,
        pageSize: 5,
        totalUsersCount: 21,
        isFetching: false
    }
})

describe('user reducer', () => {
    it('user should be following', () => {
        const action = follow(2)

        const endState = usersReducer(startState, action);

        expect(startState).not.toBe(endState);
        expect(startState.users[1]).not.toBe(endState.users[1]);
        expect(endState.users[1].followed).toBeTruthy()
    });

    it('user should be unfollowing', () => {
        const action = unfollow(3)

        const endState = usersReducer(startState, action);

        expect(startState).not.toBe(endState);
        expect(startState.users[2]).not.toBe(endState.users[2]);
        expect(endState.users[2].followed).toBeFalsy()
    });

    it('users should be set to state', () => {
        const newUsers: Array<UserType> = [
            {
                id: 4,
                name: 'Igor',
                status: 'I am a bos',
                photos: {
                    small: null,
                    large: null
                },
                followed: true
            },
            {
                id: 5,
                name: 'Masha',
                status: 'Hello',
                photos: {
                    small: null,
                    large: null
                },
                followed: true
            }
        ]

        const action = setUsers(newUsers)

        const endState = usersReducer(startState, action);

        expect(startState).not.toBe(endState);
        expect(startState.users).not.toBe(endState.users);
        expect(endState.users.length).toBe(2)
        expect(endState.users[0].name).toBe('Igor')
        expect(endState.users[1].name).toBe('Masha')
    });

    it('current page should be changed', () => {
        const nextCurrentPage = 2;

        const action = setCurrentPage(nextCurrentPage);

        const endState = usersReducer(startState, action);

        expect(startState).not.toBe(endState);
        expect(startState.currentPage).toBe(1);
        expect(endState.currentPage).toBe(2);
    });

    it('total count users should be installed', () => {
        const totalUsersCount = 10487;

        const action = setTotalUsersCount(totalUsersCount);

        const endState = usersReducer(startState, action);

        expect(startState).not.toBe(endState);
        expect(startState.totalUsersCount).toBe(21);
        expect(endState.totalUsersCount).toBe(10487);
    });

    it('is fetching should be changed for true ', () => {

        const action = toggleIsFetching(true);

        const endState = usersReducer(startState, action);

        expect(startState).not.toBe(endState);
        expect(endState.isFetching).toBeTruthy();
    });

    it('is fetching should be changed for false ', () => {

        startState.isFetching = true;

        const action = toggleIsFetching(false);

        const endState = usersReducer(startState, action);

        expect(startState).not.toBe(endState);
        expect(endState.isFetching).toBeFalsy();
    });
})
