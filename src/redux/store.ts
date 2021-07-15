import {combineReducers, createStore} from 'redux';
import profileReducer, {ProfileActionType, ProfilePageType} from './profileReducer';
import dialogsReducer, {ActionType, DialogsPagesType} from './dialogsReducer';
import {UsersPageType, usersReducer} from './users-reducer';

export type StateType = {
    profilePage: ProfilePageType
    dialogsPages: DialogsPagesType
    usersPage: UsersPageType
}

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

type RootStateType = typeof reducers;
export type AppStateType = ReturnType<RootStateType>
export type ActionsTypes = ActionType | ProfileActionType

const store = createStore(reducers);

export default store;