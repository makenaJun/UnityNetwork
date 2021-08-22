import profileReducer, {
    addPost,
    ProfilePageStateType,
    setUserProfile,
    setUserStatus,
    UserProfileType
} from './profileReducer';

let startState: ProfilePageStateType;

beforeEach(() => {
    startState = {
        postsData: [
            {id: '1', message: 'Hi, how are you?', likesCount: 15},
            {id: '2', message: '\'It\'s my first post', likesCount: 21},
            {id: '3', message: 'Hello World!', likesCount: 27}
        ],
        profile: {
            userId: 1,
            fullName: 'Egor',
            aboutMe: '...',
            lookingForAJob: false,
            lookingForAJobDescription: null,
            contacts: {
                youtube: null,
                vk: null,
                website: null,
                twitter: null,
                mainLink: null,
                github: null,
                instagram: null,
                facebook: null
            },
            photos: {
                small: null,
                large: null
            }
        },
        status: '',
    }
});

describe('Profile reducer', () => {
    it('post should be added', () => {
        const message = 'New Message';
        const action = addPost(message);

        const endState = profileReducer(startState, action);

        expect(startState).not.toBe(endState);
        expect(endState.postsData.length).toBe(4);
        expect(endState.postsData[0].message).toBe(message);
        expect(endState.postsData[0].likesCount).toBe(0);
    });

    it('user profile should be set', () => {
        const testProfile: UserProfileType = {
            userId: 5,
            fullName: 'Igor Mao',
            aboutMe: 'humorist',
            lookingForAJob: true,
            lookingForAJobDescription: 'looking for a React developer job',
            contacts: {
                facebook: null,
                github: null,
                instagram: 'igor333',
                vk: null,
                mainLink: null,
                twitter: null,
                website: 'igor.ru',
                youtube: null
            },
            photos: {
                small: null,
                large: null
            }
        }

        const action = setUserProfile(testProfile);

        const endState = profileReducer(startState, action);

        if (!endState.profile) {
            throw new Error('Profile is not set');
        }
        expect(startState).not.toBe(endState);
        expect(endState.profile.userId).toBe(5);
        expect(endState.profile.fullName).toBe('Igor Mao');
        expect(endState.profile.contacts.website).toBe('igor.ru');

    });

    it('user status should be changed', () => {
        const TestStatus = 'Hello World!';
        const action = setUserStatus(TestStatus);

        const endState = profileReducer(startState, action);

        expect(startState).not.toBe(endState);
        expect(endState.status).toBe(TestStatus);
    });
});
