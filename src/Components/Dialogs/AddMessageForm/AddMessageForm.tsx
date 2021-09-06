import React, {FC, KeyboardEvent} from 'react';
import styles from './AddMessageForm.module.scss';
import {useFormik} from 'formik';
import {ButtonSubmit} from '../../common/FormControls/FormControls';
import * as Yup from 'yup';

export type MessageFormDataType = {
    newMessageText: string,
};

type PropsType = {
    onSubmit: (formData: MessageFormDataType) => void,
};

const AddMessageSchema = Yup.object().shape({
    newMessageText: Yup.string()
        .max(150, 'Too Long! Max length is 150 symbols')
        .required('Field cannot be empty'),
});

export const AddMessageForm: FC<PropsType> = (props) => {
    const ctrlEnterSendMessageHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && e.ctrlKey) {
            formik.handleSubmit();
        }
    };

    const formik = useFormik({
        initialValues: {
            newMessageText: '',
        },
        validationSchema: AddMessageSchema,
        onSubmit: values => {
            props.onSubmit(values);
            formik.resetForm();
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} className={styles.form}>
            <div className={styles.wrapper}>
               <textarea
                   className={`${styles.entryField} ${formik.errors.newMessageText && styles.entryFieldError}`}
                   id="newMessageText"
                   name="newMessageText"
                   placeholder={'Enter your message'}
                   onChange={formik.handleChange}
                   value={formik.values.newMessageText}
                   onKeyDown={ctrlEnterSendMessageHandler}
               />
                <ButtonSubmit>Send</ButtonSubmit>
            </div>
            {formik.errors.newMessageText && <div className={styles.error}>{formik.errors.newMessageText}</div>}
        </form>
    );
};