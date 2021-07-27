import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer, {ActionsType, ProfilePageStateType} from './profileReducer';
import dialogsReducer, {ActionType, DialogsPageStateType} from './dialogsReducer';
import {UsersPageStateType, usersReducer} from './users-reducer';
import authReducer, {authStateType} from './auth-reducer';
import thunkMiddleware from 'redux-thunk';

export type StateType = {
    profilePage: ProfilePageStateType
    dialogsPages: DialogsPageStateType
    usersPage: UsersPageStateType
    auth: authStateType
}

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

type RootStateType = typeof rootReducer;
export type AppStateType = ReturnType<RootStateType>
export type ActionsTypes = ActionType | ActionsType


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;