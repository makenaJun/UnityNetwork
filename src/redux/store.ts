import {combineReducers, createStore} from 'redux';
import profileReducer, {ActionsType, ProfilePageType} from './profileReducer';
import dialogsReducer, {ActionType, DialogsPagesType} from './dialogsReducer';
import {UsersPageType, usersReducer} from './users-reducer';

export type StateType = {
    profilePage: ProfilePageType
    dialogsPages: DialogsPagesType
    usersPage: UsersPageType
}

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

type RootStateType = typeof rootReducer;
export type AppStateType = ReturnType<RootStateType>
export type ActionsTypes = ActionType | ActionsType

const store = createStore(rootReducer);

export default store;