import React, {FC} from 'react';
import styles from './Dialogs.module.scss';
import {DialogItem} from './DialogItem/DialogItem';
import {MessageItem} from './MessageItem/MessageItem';
import {AddMessageForm} from './AddMessageForm/AddMessageForm';
import {DialogsPagesType} from '../../redux/dialogsReducer';

type PropsType = {
    dialogsPage: DialogsPagesType
    changeMessageText: (newText: string) => void
    sendMessage: () => void
}

export const Dialogs: FC<PropsType> = (props) => {
    const {changeMessageText, sendMessage} = props;
    const {dialogsData, messagesData, newMessageText} = props.dialogsPage;

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
            <AddMessageForm changeMessageText={changeMessageText} sendMessage={sendMessage} newMessageText={newMessageText}/>
        </div>
    )
}