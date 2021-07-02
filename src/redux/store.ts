import {combineReducers, createStore} from 'redux';
import profileReducer, {ProfileActionType, ProfilePageType} from './profileReducer';
import dialogsReducer, {ActionType, DialogsPagesType} from './dialogsReducer';
import {StoreType} from '../storeContext';

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

const store: StoreType = createStore(reducers);

export default store;
