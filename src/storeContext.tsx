import React from 'react';
import {ActionsTypes, AppStateType} from './redux/store';
import {ActionType} from './redux/dialogsReducer';
import {ProfileActionType} from './redux/profileReducer';

export type StoreType = {
    _state: AppStateType
    _callSubscriber: (state: AppStateType) => void
    subscribe: (observer: (state: AppStateType) => void) => void
    getState: () => AppStateType
    dispatch: (action: ActionsTypes) => void
}

const StoreContext = React.createContext({} as StoreType);

type ProviderProps = {
    store: StoreType
    children: React.ReactNode
}

export const Provider = (props: ProviderProps) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
            </StoreContext.Provider>
    )
}

export default StoreContext;