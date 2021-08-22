import {instance, ResponseType} from './api';
import {UserType} from '../redux/users-reducer';


type ResponseGetUsersType = {
    items: Array<UserType> | null,
    totalCount: number,
    error: null | string,
};


export const usersApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<ResponseGetUsersType>(`/users?page=${currentPage}&count=${pageSize}`).then(res => res.data);
    },
    follow(userId: number) {
        return instance.post<ResponseType>(`/follow/${userId}`).then(res => res.data);
    },
    unfollow(userId: number) {
        return instance.delete<ResponseType>(`/follow/${userId}`).then(res => res.data);
    },
};