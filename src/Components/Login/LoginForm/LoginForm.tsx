import React, {FC} from 'react';
import {useFormik} from 'formik';
import styles from './LoginForm.module.scss';
import * as Yup from 'yup';
import {ButtonSubmit, Input} from '../../common/FormControls/FormControls';

type PropsType = {
    onSubmit: (formData: LoginFormValuesType) => void,
};


export type LoginFormValuesType = {
    email: string,
    password: string,
    rememberMe: boolean,
};

const LoginSchema = Yup.object().shape({
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Field is required'),
    email: Yup.string().email('Invalid email').required('Field is required'),
});

export const LoginForm: FC<PropsType> = (props) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        validationSchema: LoginSchema,
        onSubmit: values => {
            props.onSubmit(values);
        },
    });


    return (
        <form onSubmit={formik.handleSubmit} className={styles.wrapperForm}>
            <div className={styles.rowForm}>
                <Input
                    error={formik.errors.email && formik.touched.email ? formik.errors.email : undefined}
                    id="email"
                    name="email"
                    type="email"
                    placeholder={'Email'}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
            </div>
            <div className={styles.rowForm}>
                <Input
                    error={formik.errors.password}
                    id="password"
                    type="password"
                    placeholder={'Password'}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
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
                <ButtonSubmit>Submit</ButtonSubmit>
            </div>
        </form>
    );
};

