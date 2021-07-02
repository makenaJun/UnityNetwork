import React, {FC} from 'react';
import {ActionType, addMessageAC, DialogsPagesType, newMessageTextAC} from '../../redux/dialogsReducer';
import {Dialogs} from './Dialogs';

type PropsType = {
    dialogsPage: DialogsPagesType
    dispatch: (action: ActionType) => void
}

export const DialogsContainer: FC<PropsType> = (props) => {
    const {dialogsPage, dispatch} = props;

    const changeMessageText = (newText: string) => {
        const action = newMessageTextAC(newText);
        dispatch(action);
    };
    const sendMessage = () => {
        const action = addMessageAC();
        dispatch(action);
    };

    return <Dialogs dialogsPage={dialogsPage} changeMessageText={changeMessageText} sendMessage={sendMessage}/>
}