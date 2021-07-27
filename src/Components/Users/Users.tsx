import React, {FC} from 'react'
import {UserType} from '../../redux/users-reducer';
import {User} from './User/User';
import {Paginator} from '../Paginator/Paginator';


type PropsType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    followingIsProgress: Array<number>
    onPageChangeHandler: (pageNumber: number) => void
    followUser: (userId: number, follow: boolean) => void
}

export const Users: FC<PropsType> = (props) => {
    const usersElements = props.users.map(u => <User key={u.id}
                                                     user={u}
                                                     followingIsProgress={props.followingIsProgress}
                                                     followUser={props.followUser}
    />)
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