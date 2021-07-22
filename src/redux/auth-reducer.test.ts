import authReducer, {authStateType, setAuthUserData} from './auth-reducer';

let startState: authStateType;

beforeEach(() => {
    startState = {
        userId: 2,
        email: '',
        login: '',
        isAuth: false
    }
})
describe('auth reducer', () => {
    it('user data should be set', () => {
        const userId = 100
        const login = 'Tolik'
        const email = 'tolik@gmail.com'


        const action = setAuthUserData(login, userId, email);

        const endState = authReducer(startState, action);

        expect(startState).not.toBe(endState);
        expect(endState.login).toBe(login);
        expect(endState.userId).toBe(userId);
        expect(endState.email).toBe(email);
        expect(endState.isAuth).toBeTruthy();
    })
})