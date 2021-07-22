import React from 'react'
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/store';
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unfollowAC,
    UserType
} from '../../redux/users-reducer';
import {Users} from './Users';
import axios from 'axios';
import {Preloader} from '../common/Preloader/Preloader';


type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    currentPage: number
    totalUserCount: number
    isFetching: boolean
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType
type StateType = {}

class UsersContainer extends React.Component<PropsType, StateType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    onPageChangeHandler = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(res.data.items)
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
                           setCurrentPage={this.props.setCurrentPage}
                           setTotalUsersCount={this.props.setTotalUsersCount}
                           onPageChangeHandler={this.onPageChangeHandler}
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
        isFetching: state.usersPage.isFetching
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
    follow: followAC,
    unfollow: unfollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    toggleIsFetching: toggleIsFetchingAC
})(UsersContainer);


// const mapDispatchToProps = (dispatch: Dispatch<ActionsType>): MapDispatchToPropsType => {
//     return {
//         follow: (userId) => dispatch(followAC(userId)),
//         unfollow: (userId) => dispatch(unfollowAC(userId)),
//         setUsers: (users) => dispatch(setUsersAC(users)),
//         setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
//         setTotalUsersCount: (totalCount) => dispatch(setTotalUsersCountAC(totalCount)),
//         toggleIsFetching: (isFetching) => dispatch(toggleIsFetchingAC(isFetching))
//     }
// }