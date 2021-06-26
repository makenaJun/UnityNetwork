import React, {ChangeEvent, FC, KeyboardEvent} from 'react';
import {ActionType, addMessageAC, newMessageTextAC} from '../../../redux/state';
import styles from './AddMessageForm.module.scss'

type PropsType = {
    newMessageText: string
    dispatch: (action: ActionType) => void
}

export const AddMessageForm: FC<PropsType> = (props) => {
    const {newMessageText, dispatch} = props;

    const changeMessageTextHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const newMessageText = event.currentTarget.value;
        dispatch(newMessageTextAC(newMessageText))
    }

    const sendMessageHandler = () => {
        dispatch(addMessageAC())
    }
    const ctrlEnterSendMessageHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && event.ctrlKey) {
            sendMessageHandler()
        }
    }

    return (
        <div className={styles.wrapper}>
            <textarea className={styles.entryField} onChange={changeMessageTextHandler}
                      value={newMessageText} placeholder={'Enter your message'} onKeyDown={ctrlEnterSendMessageHandler}/>
            <button className={styles.button} onClick={sendMessageHandler}>Send</button>
        </div>
    )
}