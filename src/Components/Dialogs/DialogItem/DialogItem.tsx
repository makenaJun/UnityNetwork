import React, {FC} from 'react';
import styles from './DialogItems.module.scss';
import {NavLink} from 'react-router-dom';

type PropsType = {
    userName: string
    userId: string
}

export const DialogItem: FC<PropsType> = (props) => {
    const {userName, userId} = props;
    const path = `/dialogs/${userId}`;
    const firstLetterOfName = userName.slice(0, 1);
    return (
        <div className={styles.dialog}>
            <div className={styles.avatar}>{firstLetterOfName}</div>
            <NavLink to={path} className={styles.userLink}>{userName}</NavLink>
        </div>
    )
}