import React, {FC, useEffect} from 'react'
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/store';
import {Dispatch} from 'redux';
import {ActionsType, followAC, setUsersAC, unfollowAC, UserType} from '../../redux/users-reducer';
import axios from 'axios';
import {User} from './User/User';


type MapStateToPropsType = {
    users: Array<UserType>
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType;

const Users: FC<PropsType> = (props) => {
    const {users, follow, unfollow, setUsers} = props;

    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users?page=110').then(res => {
            setUsers(res.data.items)
        })
    }, [])

    const usersElements = users.map(u => <User key={u.id} user={u} follow={follow} unfollow={unfollow}/>)

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
const mapDispatchToProps = (dispatch: Dispatch<ActionsType>): MapDispatchToPropsType => {
    return {
        follow: (userId) => dispatch(followAC(userId)),
        unfollow: (userId) => dispatch(unfollowAC(userId)),
        setUsers: (users) => dispatch(setUsersAC(users))
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Users);