import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Sidebar.module.scss';

export const Sidebar: FC = () => {
    return (
        <nav className={styles.sidebar}>
            <NavLink to={'/profile'} className={styles.profileLink} activeClassName={styles.active}>Profile</NavLink>
            <NavLink to={'/dialogs'} className={styles.messageLink} activeClassName={styles.active}>Messages</NavLink>
            <NavLink to={'/developers'}  className={styles.developersLink} activeClassName={styles.active}>Developers</NavLink>
        </nav>
    )
}