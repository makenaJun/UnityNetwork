import React, {FC} from 'react'
import {UserType} from '../../../redux/users-reducer';
import styles from './User.module.scss'
import Avatar from '../../common/Avatar/Avatar';


type PropsType = {
    user: UserType
    followingIsProgress: Array<number>
    followUser: (userId: number, follow: boolean) => void
};

export const User: FC<PropsType> = (props) => {
    const {user, followingIsProgress, followUser} = props;

    const onClickHandler = () => {
        user.followed ? followUser(user.id, false)
            : followUser(user.id, true)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.leftPart}>
                <Avatar link={`/profile/${user.id}`} alt={`Avatar ${user.name}`} urlImg={user.photos.large}
                        size={'normal'}/>
                <button onClick={onClickHandler}
                        disabled={followingIsProgress.some(id => id === user.id)}>{user.followed ? 'Unfollow' : 'Follow'}</button>
            </div>
            <div className={styles.rightPart}>
                <div className={styles.name}>{user.name}</div>
                <div className={styles.status}>{user.status}</div>
            </div>
        </div>
    )
}