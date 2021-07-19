import React from 'react'
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/store';
import {Dispatch} from 'redux';
import {
    ActionsType,
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from '../../redux/users-reducer';
import Users from './Users';


type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    currentPage: number
    totalUserCount: number
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUserCount: state.usersPage.totalUsersCount
    }
}
const mapDispatchToProps = (dispatch: Dispatch<ActionsType>): MapDispatchToPropsType => {
    return {
        follow: (userId) => dispatch(followAC(userId)),
        unfollow: (userId) => dispatch(unfollowAC(userId)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
        setTotalUsersCount : (totalCount) => dispatch(setTotalUsersCountAC(totalCount))
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Users);