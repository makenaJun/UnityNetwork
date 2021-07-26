import React, {FC} from 'react'
import {UserType} from '../../../redux/users-reducer';
import styles from './User.module.scss'
import Avatar from '../../common/Avatar/Avatar';
import {usersApi} from '../../../api/api';


type PropsType = {
    user: UserType
    followingIsProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    toggleFollowingInProgress: (userId: number, isFetching: boolean) => void
};

export const User: FC<PropsType> = (props) => {
    const {user, followingIsProgress, follow, unfollow, toggleFollowingInProgress} = props;

    const onClickHandler = () => {
        if (user.followed) {
            toggleFollowingInProgress(user.id, true)
            usersApi.unfollow(user.id)
                .then(data => {
                    if (data.resultCode === 0) {
                        unfollow(user.id);
                    }
                    toggleFollowingInProgress(user.id, false)
                })
        } else {
            toggleFollowingInProgress(user.id, true)
            usersApi.follow(user.id)
                .then(data => {
                    if (data.resultCode === 0) {
                        follow(user.id);
                    }
                    toggleFollowingInProgress(user.id, false)
                })
        }
        // user.followed ? unfollow(user.id) : follow(user.id);
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