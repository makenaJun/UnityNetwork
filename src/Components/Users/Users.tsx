import React, {FC} from 'react'
import {UserType} from '../../redux/users-reducer';
import {User} from './User/User';
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
    onPageChangeHandler: (pageNumber: number) => void
}

export const Users: FC<PropsType> = (props) => {
    const usersElements = props.users.map(u => <User key={u.id}
                                                     user={u}
                                                     follow={props.follow}
                                                     unfollow={props.unfollow}/>)
    return (
        <div>
            <h2>Developers</h2>
            <Paginator pageSize={props.pageSize}
                       totalCount={props.totalUserCount}
                       currentPage={props.currentPage}
                       setCurrentPage={props.onPageChangeHandler}
            />
            {usersElements}

        </div>
    )
}