import React, {FC} from 'react'
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/store';
import {Dispatch} from 'redux';
import {followAC, setUsersAC, unfollowAC, UserType} from '../../redux/users-reducer';
import styles from './Users.module.scss'

type MapStateToPropsType = {
    users: Array<UserType>
}
type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType;

const Users: FC<PropsType> = (props) => {
    const {users, follow, unfollow} = props;

    const usersElements = users.map(u => {
        const onClickHandler = () => {
            u.followed ? unfollow(u.id) : follow(u.id);
        }
        return <div key={u.id} className={styles.wrapper}>
            <div className={styles.leftPart}>
                <div className={styles.avatar}>
                    <img
                        src={'https://i.pinimg.com/474x/be/2d/30/be2d307e7f0004d3b014ee1120756a93--avatar-buttons.jpg'}/>
                </div>
                <button onClick={onClickHandler}>{u.followed ? 'Unfollow' : 'Follow'}</button>
            </div>
            <div className={styles.rightPart}>
                <div className={styles.name}>{u.fullName}</div>
                <div className={styles.status}>{u.status}</div>
            </div>
        </div>
    })

    return (
        <div>
            <h2>Developers</h2>
            {usersElements}
        </div>
    )
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId) => dispatch(followAC(userId)),
        unfollow: (userId) => dispatch(unfollowAC(userId)),
        setUsers: (users) => dispatch(setUsersAC(users))
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Users);