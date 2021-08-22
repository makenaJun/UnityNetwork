import React, {FC} from 'react';
import {LoginForm, LoginFormValuesType} from './LoginForm/LoginForm';
import styles from './Login.module.scss';
import {authApi} from '../../api/auth-api';

export const Login: FC = () => {

    const onSubmit = (formData: LoginFormValuesType) => {
        const {email, password, rememberMe} = formData;
        authApi.login(email, password, rememberMe)
            .then(console.log);
    }

    return (
        <div className={styles.wrapperBox}>
            <h2>Login</h2>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    );
};

