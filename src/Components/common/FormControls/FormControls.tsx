import React, {FC} from 'react';
import styles from './FormControls.module.scss';

type InputPropsType = {
    className?: string,
    errorClassName?: string,
    id?: string,
    name?: string,
    type?: 'email' | 'text' | 'password',
    placeholder?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value?: string,
    error?: string,
}

export const Input: FC<InputPropsType> = (props) => {
    const {
        id,
        className,
        errorClassName,
        name,
        placeholder,
        onChange,
        value,
        type,
        error,
    } = props;
    return <div>
        <input
            className={`${!className && styles.input}  ${className} ${error && styles.errorInput} ${errorClassName}`}
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
        {error ?
            <span
                className={`${styles.errorSpan}`}>
                    {error}
                </span>
            : null}
    </div>
}


type ButtonPropsType = {}

export const ButtonSubmit: FC<ButtonPropsType> = (props) => {
    const {children} = props;

    return (
        <button
            type="submit"
            className={styles.button}>
            {children}
        </button>
    )
}