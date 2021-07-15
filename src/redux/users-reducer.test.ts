import {followAC, setUsersAC, unfollowAC, UsersPageType, usersReducer, UserType} from './users-reducer';

let startState: UsersPageType;

beforeEach(() => {
    startState = {
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
        ]
    }
})

test('user should be following', () => {
    const action = followAC('2')

    const endState = usersReducer(startState, action);

    expect(startState).not.toBe(endState);
    expect(startState.users[1]).not.toBe(endState.users[1]);
    expect(endState.users[1].followed).toBeTruthy()
})

test('user should be unfollowing', () => {
    const action = unfollowAC('3')

    const endState = usersReducer(startState, action);

    expect(startState).not.toBe(endState);
    expect(startState.users[2]).not.toBe(endState.users[2]);
    expect(endState.users[2].followed).toBeFalsy()
})

test('users should be set to state', () => {
    const newUsers: Array<UserType> = [
            {
                id: '4',
                followed: true,
                fullName: 'Igor',
                status: 'I am a bos',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: '5',
                followed: true,
                fullName: 'Masha',
                status: 'Hello',
                location: {city: 'Moscow', country: 'Russia'}
            }
        ]

    const action = setUsersAC(newUsers)

    const endState = usersReducer(startState, action);

    expect(startState).not.toBe(endState);
    expect(startState.users).not.toBe(endState.users);
    expect(endState.users.length).toBe(5)
    expect(endState.users[3].fullName).toBe('Igor')
    expect(endState.users[4].fullName).toBe('Masha')
})