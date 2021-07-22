import profileReducer, {
    addPost,
    changeNewPostText,
    ProfilePageStateType,
    setUserProfile,
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
        newPostText: 'New Message',
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
        }
    }
})
describe('Profile reducer', () => {
    it(' post should be added', () => {
        const action = addPost();

        const endState = profileReducer(startState, action);

        expect(startState).not.toBe(endState);
        expect(endState.postsData.length).toBe(4);
        expect(endState.postsData[3].message).toBe('New Message');
        expect(endState.postsData[3].likesCount).toBe(0);
    })

    it('new post text should change', () => {
        const testTextNewPost = 'New text'

        const action = changeNewPostText(testTextNewPost);

        const endState = profileReducer(startState, action);

        expect(startState).not.toBe(endState);
        expect(endState.postsData.length).toBe(3);
        expect(endState.newPostText).toBe('New text');
    })

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
            throw new Error('Profile is not set')
        }
        expect(startState).not.toBe(endState);
        expect(endState.profile.userId).toBe(5);
        expect(endState.profile.fullName).toBe('Igor Mao');
        expect(endState.profile.contacts.website).toBe('igor.ru');

    })
})
