import React, {FC, KeyboardEvent} from 'react';
import styles from './AddMessageForm.module.scss';
import {useFormik} from 'formik';

export type MessageFormDataType = {
    newMessageText: string,
};

type PropsType = {
    onSubmit: (formData: MessageFormDataType) => void,
};

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
        onSubmit: values => {
            props.onSubmit(values);
            formik.resetForm();
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} className={styles.wrapper}>
            <textarea
                className={styles.entryField}
                id="newMessageText"
                name="newMessageText"
                placeholder={'Enter your message'}
                onChange={formik.handleChange}
                value={formik.values.newMessageText}
                onKeyDown={ctrlEnterSendMessageHandler}
            />

            <button className={styles.button} type="submit">Send</button>
        </form>
    );
};