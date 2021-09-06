import React, {FC} from 'react';
import {useFormik} from 'formik';
import {ButtonSubmit} from '../../../common/FormControls/FormControls';
import * as Yup from 'yup';
import styles from '../../../Dialogs/AddMessageForm/AddMessageForm.module.scss';

type PropsType = {
    onSubmit: (formData: PostFormData) => void,
};

export type PostFormData = {
    newPostText: string,
};

const AddPostSchema = Yup.object().shape({
    newPostText: Yup.string()
        .max(150, 'Too Long! Max length is 150 symbols')
        .required('Field cannot be empty'),
});

export const AddPostForm: FC<PropsType> = (props) => {
    const formik = useFormik({
        initialValues: {
            newPostText: '',
        },
        validationSchema: AddPostSchema,
        onSubmit: values => {
            props.onSubmit(values)
            formik.resetForm()
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} className={styles.form}>
            <div className={styles.wrapper}>
            <textarea
                className={`${styles.entryField} ${formik.errors.newPostText && styles.entryFieldError}`}
                id="newPostText"
                name="newPostText"
                placeholder={`What's new?`}
                onChange={formik.handleChange}
                value={formik.values.newPostText}
            />
            <ButtonSubmit>Post</ButtonSubmit>
            </div>
            {formik.errors.newPostText && <div className={styles.error}>{formik.errors.newPostText}</div>}
        </form>
    );
}