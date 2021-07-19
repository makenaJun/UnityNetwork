import {followAC, setUsersAC, unfollowAC, UsersPageType, usersReducer, UserType} from './users-reducer';

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
    }
})

describe('user reducer', () => {
    it('user should be following', () => {
        const action = followAC(2)

        const endState = usersReducer(startState, action);

        expect(startState).not.toBe(endState);
        expect(startState.users[1]).not.toBe(endState.users[1]);
        expect(endState.users[1].followed).toBeTruthy()
    });

    it('user should be unfollowing', () => {
        const action = unfollowAC(3)

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

        const action = setUsersAC(newUsers)

        const endState = usersReducer(startState, action);

        expect(startState).not.toBe(endState);
        expect(startState.users).not.toBe(endState.users);
        expect(endState.users.length).toBe(5)
        expect(endState.users[3].name).toBe('Igor')
        expect(endState.users[4].name).toBe('Masha')
    });
})
