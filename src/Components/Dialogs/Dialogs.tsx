import React, {FC} from 'react';
import styles from './Dialogs.module.scss';
import {DialogItem} from './DialogItem/DialogItem';
import {MessageItem} from './MessageItem/MessageItem';
import {AddMessageForm, MessageFormDataType} from './AddMessageForm/AddMessageForm';
import {DialogsPageStateType} from '../../redux/dialogsReducer';

type PropsType = {
    dialogsPage: DialogsPageStateType,
    sendMessage: (newMessageText: string) => void,
};

export const Dialogs: FC<PropsType> = (props) => {
    const {sendMessage} = props;
    const {dialogsData, messagesData} = props.dialogsPage;

    const onSubmit = (formData: MessageFormDataType) => {
        const {newMessageText} = formData;
        sendMessage(newMessageText);
    };

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
            <AddMessageForm onSubmit={onSubmit}
            />
        </div>
    )
};