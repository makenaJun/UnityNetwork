import React from 'react'
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/store';
import {followUser, getUsers, UserType} from '../../redux/users-reducer';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';


type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    currentPage: number
    totalUserCount: number
    isFetching: boolean
    followingIsProgress: Array<number>
}
type MapDispatchToPropsType = {
    getUsers: (currentPage: number, pageSize: number) => void
    followUser: (userId: number, follow: boolean) => void
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType
type StateType = {}

class UsersContainer extends React.Component<PropsType, StateType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChangeHandler = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
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
                           currentPage={this.props.currentPage}
                           pageSize={this.props.pageSize}
                           totalUserCount={this.props.totalUserCount}
                           followingIsProgress={this.props.followingIsProgress}
                           onPageChangeHandler={this.onPageChangeHandler}
                           followUser={this.props.followUser}
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
    getUsers,
    followUser,
})(UsersContainer);