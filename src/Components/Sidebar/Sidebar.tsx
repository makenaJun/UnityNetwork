import React, {FC} from "react";
import styles from './Sidebar.module.scss';

export const Sidebar: FC = () => {
    return (
        <nav className={styles.sidebar}>
            <div>Profile</div>
            <div>Messages</div>
            <div>News</div>
            <div>Users</div>
        </nav>
    )
}