import React, {FC} from 'react';
import styles from './Dialogs.module.scss';
import {DialogItem} from './DialogItem/DialogItem';
import {MessageItem} from './MessageItem/MessageItem';
import {DialogsPagesType} from '../../redux/state';

type PropsType = {
    dialogsPages: DialogsPagesType
}

export const Dialogs: FC<PropsType> = (props) => {

    const {dialogsData, messagesData} = props.dialogsPages;

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