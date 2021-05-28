import React, {FC} from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/image/logo.png'

export const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}><img src={logo} alt={'Unity network logo'}/></div>
        </header>
    )
}