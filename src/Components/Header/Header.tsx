import React, {FC} from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/image/logo.png'
import Avatar from '../common/Avatar/Avatar';
import {NavLink} from 'react-router-dom';

type PropsType = {
    login: string | null
    userId: number | null
    isAuth: boolean
}

export const Header: FC<PropsType> = (props) => {
    const {isAuth, userId, login} = props
    return (
        <header className={styles.header}>
            <div className={styles.logo}><img src={logo} alt={'Unity network logo'}/></div>
            <div className={styles.login}>

                {isAuth ? `Hello: ${login}` : null}
                <Avatar link={`/profile/${userId}`} alt={'login'} urlImg={null} size={'small'}/>

                <NavLink to={`${isAuth ? '/logout' : '/login'}`}>
                    <button className={styles.button}>{isAuth ? 'logout' : 'login'}</button>
                </NavLink>
            </div>
        </header>
    )
}