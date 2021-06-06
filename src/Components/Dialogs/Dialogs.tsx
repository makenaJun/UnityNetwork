import React, {FC} from 'react';
import styles from './Dialogs.module.scss';
import {DialogItem} from './DialogItem/DialogItem';
import {MessageItem} from './MessageItem/MessageItem';

export const Dialogs: FC = () => {

    const dialogsData = [
        {id: '1', name: 'Igor'},
        {id: '2', name: 'Marina'},
        {id: '3', name: 'Sasha'},
        {id: '4', name: 'Maxim'},
        {id: '5', name: 'Andrei'}
    ]
    const messagesData = [
        {id: '1', message: 'Hello'},
        {id: '2', message: 'How are you?'},
        {id: '3', message: 'My first message))'},
        {id: '4', message: 'Yo yo yo'}
    ]

    return (
        <div>
            <div className={styles.wrapperDialogs}>
                <div className={styles.dialogsItem}>
                    {dialogsData.map(user => <DialogItem key={user.id} userId={user.id} userName={user.name}/>)}
                </div>
                <div className={styles.messagesItem}>
                    {messagesData.map(message => (<MessageItem key={message.id} message={message.message}/>))}
                </div>

            </div>
            <div><textarea/>
                <button>Send</button>
            </div>
        </div>
    )
}