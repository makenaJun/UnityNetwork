import React, {FC} from 'react';
import styles from './MessageItem.module.scss';

type PropsType = {
    message: string
}

export const MessageItem: FC<PropsType> = (props) => {
    const {message} = props;

    return (
        <div className={styles.message}>
            <div className={styles.avatar}>D</div>
            {message}
        </div>
    )
}