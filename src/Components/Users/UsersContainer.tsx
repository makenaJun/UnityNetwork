import React from 'react'
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/store';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingInProgress,
    toggleIsFetching,
    unfollow,
    UserType
} from '../../redux/users-reducer';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {usersApi} from '../../api/api';


type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    currentPage: number
    totalUserCount: number
    isFetching: boolean
    followingIsProgress: Array<number>
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingInProgress: (userId: number, isFetching: boolean) => void
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType
type StateType = {}

class UsersContainer extends React.Component<PropsType, StateType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChangeHandler = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        usersApi.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {
        if (this.props.isFetching) {
            return (
                <Preloader loaderVisible={this.props.isFetching}/>
            )
        } else {
            return (
                <div>
                    <Users users={this.props.users}
                           setUsers={this.props.setUsers}
                           follow={this.props.follow}
                           unfollow={this.props.unfollow}
                           currentPage={this.props.currentPage}
                           pageSize={this.props.pageSize}
                           totalUserCount={this.props.totalUserCount}
                           followingIsProgress={this.props.followingIsProgress}
                           setCurrentPage={this.props.setCurrentPage}
                           setTotalUsersCount={this.props.setTotalUsersCount}
                           onPageChangeHandler={this.onPageChangeHandler}
                           toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                    />
                </div>
            )
        }

    }
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUserCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching,
        followingIsProgress: state.usersPage.followingInProgress,
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingInProgress,
})(UsersContainer);