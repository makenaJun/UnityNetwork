import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Dialogs.module.scss';
import {DialogItem} from './DialogItem/DialogItem';
import {MessageItem} from './MessageItem/MessageItem';

export const Dialogs: FC = () => {

    return (
        <div>
            <div className={styles.wrapperDialogs}>
                <div className={styles.dialogsItem}>
                    <DialogItem userId={'1'} userName={'Igor'}/>
                    <DialogItem userId={'2'} userName={'Marina'}/>
                    <DialogItem userId={'3'} userName={'Sasha'}/>
                    <DialogItem userId={'4'} userName={'Maxim'}/>
                    <DialogItem userId={'5'} userName={'Andrei'}/>
                </div>
                <div className={styles.messagesItem}>
                    <MessageItem message={'Hello'}/>
                    <MessageItem message={'How are you?'}/>
                    <MessageItem message={'My first message))'}/>
                    <MessageItem message={'Yo yo yo'}/>
                </div>

            </div>
            <div><textarea/>
                <button>Send</button>
            </div>
        </div>
    )
}