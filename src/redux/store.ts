import {combineReducers, createStore} from 'redux';
import profileReducer, {ProfileActionType, ProfilePageType} from './profileReducer';
import dialogsReducer, {ActionType, DialogsPagesType} from './dialogsReducer';

export type StateType = {
    profilePage: ProfilePageType
    dialogsPages: DialogsPagesType
}

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

type RootStateType = typeof reducers;
export type AppStateType = ReturnType<RootStateType>
export type ActionsTypes = ActionType | ProfileActionType

const store = createStore(reducers);

export default store;
