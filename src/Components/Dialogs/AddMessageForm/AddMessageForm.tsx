import React, {ChangeEvent, FC} from 'react';
import {ActionType, addMessageAC, newMessageTextAC} from '../../../redux/state';
import styles from './AddMessageForm.module.scss'

type PropsType = {
    newMessageText: string
    dispatch: (action: ActionType) => void
}

export const AddMessageForm: FC<PropsType> = (props) => {
    const {newMessageText, dispatch} = props;

    const messageTextChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const newMessageText = event.currentTarget.value;
        dispatch(newMessageTextAC(newMessageText))
    }

    const addMessageHandler = () => {
        dispatch(addMessageAC())
    }

    return (
        <div className={styles.wrapper}>
            <textarea className={styles.entryField} rows={5} onChange={messageTextChangeHandler}
                      value={newMessageText}/>
            <button className={styles.button} onClick={addMessageHandler}>Send</button>
        </div>
    )
}