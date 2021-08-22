import React, {FC} from 'react';
import {useFormik} from 'formik';

type PropsType = {
    onSubmit: (formData: PostFormData) => void,
};

export type PostFormData = {
    newPostText: string,
};

export const AddPostForm: FC<PropsType> = (props) => {
    const formik = useFormik({
        initialValues: {
            newPostText: '',
        },
        onSubmit: values => {
            props.onSubmit(values)
            formik.resetForm()
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <textarea
                id="newPostText"
                name="newPostText"
                onChange={formik.handleChange}
                value={formik.values.newPostText}
            />

            <button type="submit">Submit</button>
        </form>
    );
}