import {Dispatch} from 'redux';
import {authApi, ResultsCode} from '../api/api';

export type authStateType = typeof initialState;

export type ActionsType = ReturnType<typeof setAuthUserData>

const initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false
}

const authReducer = (state: authStateType = initialState, action: ActionsType): authStateType => {
    switch (action.type) {
        case 'UN/AUTH/SET_USER_DATA': {
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        }
        default :
            return state;
    }
}


export const setAuthUserData = (login: string, userId: number, email: string) => ({
    type: 'UN/AUTH/SET_USER_DATA',
    payload: {login, userId, email}
} as const);

export const getAuthUserData = () => async (dispatch: Dispatch) => {
    const response = await authApi.me();
    if (response.resultCode === ResultsCode.SUCCESS) {
        const {login, id, email} = response.data;
        dispatch(setAuthUserData(login, id, email));
    }
}


export default authReducer;