import React from 'react'
import {UserType} from '../../redux/users-reducer';
import {User} from './User/User';
import axios from 'axios';
import {Paginator} from '../Paginator/Paginator';


type PropsType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}
type StateType = {}

class Users extends React.Component<PropsType, StateType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    onPageChangeHandler = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        const usersElements = this.props.users.map(u => <User key={u.id}
                                                              user={u}
                                                              follow={this.props.follow}
                                                              unfollow={this.props.unfollow}/>)
        return (
            <div>
                <h2>Developers</h2>
                <Paginator pageSize={this.props.pageSize}
                           totalCount={this.props.totalUserCount}
                           currentPage={this.props.currentPage}
                           setCurrentPage={this.onPageChangeHandler}
                />
                {usersElements}

            </div>
        )
    }
}


export default Users;