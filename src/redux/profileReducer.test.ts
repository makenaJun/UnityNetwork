import profileReducer, {addPostAC, changeNewPostTextAC, ProfilePageType} from './profileReducer';

let startState: ProfilePageType;

beforeEach(() => {
    startState = {
        postsData: [
            {id: '1', message: 'Hi, how are you?', likesCount: 15},
            {id: '2', message: '\'It\'s my first post', likesCount: 21},
            {id: '3', message: 'Hello World!', likesCount: 27}
        ],
        newPostText: 'New Message'
    }
})

test(' post should be added', () => {
    const action = addPostAC();

    const endState = profileReducer(startState, action);

    expect(startState).not.toBe(endState);
    expect(endState.postsData.length).toBe(4);
    expect(endState.postsData[3].message).toBe('New Message');
    expect(endState.postsData[3].likesCount).toBe(0);
})

test('new post text should change', () => {
    const testTextNewPost = 'New text'

    const action = changeNewPostTextAC(testTextNewPost);

    const endState = profileReducer(startState, action);

    expect(startState).not.toBe(endState);
    expect(endState.postsData.length).toBe(3);
    expect(endState.newPostText).toBe('New text');
})