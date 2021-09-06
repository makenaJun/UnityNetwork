import React, {FC} from 'react';
import styles from './MessageItem.module.scss';

type PropsType = {
    message: string,
    login: string | null,
}

export const MessageItem: FC<PropsType> = (props) => {
    const {message, login} = props;

    const firstLetter = login ? login.slice(0, 1).toUpperCase() :'N';

    return (
        <div className={styles.message}>
            <div className={styles.avatar}>{firstLetter}</div>
            {message}
        </div>
    )
}