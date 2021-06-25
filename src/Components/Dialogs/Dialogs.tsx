import React, {FC} from 'react';
import styles from './Dialogs.module.scss';
import {DialogItem} from './DialogItem/DialogItem';
import {MessageItem} from './MessageItem/MessageItem';
import {ActionType, DialogsPagesType} from '../../redux/state';
import {AddMessageForm} from './AddMessageForm/AddMessageForm';

type PropsType = {
    dialogsPages: DialogsPagesType
    dispatch: (action: ActionType) => void
}

export const Dialogs: FC<PropsType> = (props) => {
    const {dispatch} = props;
    const {dialogsData, messagesData, newMessageText} = props.dialogsPages;

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
            <AddMessageForm dispatch={dispatch} newMessageText={newMessageText}/>
        </div>
    )
}