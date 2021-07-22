import React, {FC} from 'react';
import styles from './Preloader.module.scss'
import {Transition} from 'react-transition-group';

type PropsType = {
    loaderVisible: boolean
}

export const Preloader: FC<PropsType> = (props) => {
    const {loaderVisible} = props;
    return (
        <div className={styles.wrapper}>
            <Transition in={loaderVisible}
                        timeout={500}
                        mountOnEnter
                        unmountOnExit
            >
                {state => (
                    <div className={`${styles.circle} ${styles[state]}`}/>
                )}
            </Transition>
        </div>
    )
}