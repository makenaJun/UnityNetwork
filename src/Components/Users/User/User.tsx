import React, {FC} from 'react'
import {UserType} from '../../../redux/users-reducer';
import styles from './User.module.scss'
import Avatar from '../../common/Avatar/Avatar';


type PropsType = {
    user: UserType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
};

export const User: FC<PropsType> = (props) => {
    const {user, follow, unfollow} = props;

    const onClickHandler = () => {
        user.followed ? unfollow(user.id) : follow(user.id);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.leftPart}>
                <Avatar link={`/profile/${user.id}`} alt={`Avatar ${user.name}`} urlImg={user.photos.large}
                        size={'normal'}/>
                <button onClick={onClickHandler}>{user.followed ? 'Unfollow' : 'Follow'}</button>
            </div>
            <div className={styles.rightPart}>
                <div className={styles.name}>{user.name}</div>
                <div className={styles.status}>{user.status}</div>
            </div>
        </div>
    )
}