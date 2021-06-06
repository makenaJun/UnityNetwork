import React, {FC} from 'react';
import styles from './Post.module.scss';
import heart from '../../../../assets/icon/heart.png';

type PropsType = {
    id: string
    message: string
    likesCount: number
}

export const Post: FC<PropsType> = (props) => {
    const {message, likesCount} = props;
    return (
        <div>
            <div className={styles.avatar}><img
                src={'http://pristor.ru/wp-content/uploads/2017/06/%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%B8-%D1%84%D0%BE%D1%82%D0%BE-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D0%B2-%D0%AE%D1%82%D1%83%D0%B1-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BD%D1%8B%D0%B5-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-15.jpg'}
                alt={'avatar'}/></div>
            <div>{message}</div>
            <span><img src={heart} alt={'Like'}/>{likesCount}</span>
        </div>
    )
}