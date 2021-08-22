import React, {FC} from 'react';
import {useFormik} from 'formik';
import styles from './LoginForm.module.scss';

type PropsType = {
    onSubmit: (formData: LoginFormValuesType) => void,
};


export type LoginFormValuesType = {
    email: string,
    password: string,
    rememberMe: boolean,
};

type ErrorsType = {
    email?: string,
    password?: string,
};

const loginValidate = (values: LoginFormValuesType) => {
    const errors: ErrorsType = {};
    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length > 20) {
        errors.password = 'Must be 20 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};

export const LoginForm: FC<PropsType> = (props) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        validate: loginValidate,
        onSubmit: values => {
            props.onSubmit(values);
        },
    });


    return (
        <form onSubmit={formik.handleSubmit} className={styles.wrapperForm}>
            <div className={styles.rowForm}>
                <input
                    className={`${styles.input} ${formik.errors.email && formik.touched.email && styles.errorInput}`}
                    id="email"
                    name="email"
                    type="email"
                    placeholder={'Email'}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email ?
                    <span
                        className={`${styles.errorSpan}`}>
                    {formik.errors.email}
                </span>
                    : null}
            </div>
            <div className={styles.rowForm}>
                <input
                    className={`${styles.input} ${formik.errors.password && formik.touched.password && styles.errorInput}`}
                    id="password"
                    type="password"
                    placeholder={'Password'}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                {formik.errors.password && formik.touched.password ?
                    <span
                        className={`${styles.errorSpan}`}>
                    {formik.errors.password}
                </span>
                    : null}
            </div>
            <div className={styles.wrapperCheckbox}>
                <input
                    className={styles.checkbox}
                    id="rememberMe"
                    name={'rememberMe'}
                    type="checkbox"
                    onChange={formik.handleChange}
                    checked={formik.values.rememberMe}
                />
                <label htmlFor="rememberMe"> Remember me</label>
            </div>
            <div>
                <button type="submit"
                        disabled={!!formik.errors.email || !!formik.errors.password}
                        className={styles.button}>
                    Submit
                </button>
            </div>
        </form>
    );
};

