import React, {FC} from 'react'
import {UserType} from '../../../redux/users-reducer';
import styles from './User.module.scss'
import Avatar from '../../common/Avatar/Avatar';
import axios from 'axios';


type PropsType = {
    user: UserType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
};

export const User: FC<PropsType> = (props) => {
    const {user, follow, unfollow} = props;

    const onClickHandler = () => {
        if (user.followed) {
            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                {
                    headers: {
                        ['API-KEY']: '8fe373c6-ac19-4fc4-baf6-f60952b5767c'
                    },
                    withCredentials: true
                })
                .then(res => {
                    if (res.data.resultCode === 0) {
                        unfollow(user.id);
                    }
                })
        } else {
            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                headers: {
                    ['API-KEY']: '8fe373c6-ac19-4fc4-baf6-f60952b5767c'
                },
                withCredentials: true
            })
                .then(res => {
                    if (res.data.resultCode === 0) {
                        follow(user.id);
                    }
                })
        }
        // user.followed ? unfollow(user.id) : follow(user.id);
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