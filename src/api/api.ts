import axios from 'axios';
import {UserType} from '../redux/users-reducer';

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        'API-KEY': '8fe373c6-ac19-4fc4-baf6-f60952b5767c',
    },
});

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

export type ResponseType<T = {}> = {
    data: T,
    messages: Array<string>,
    fieldsErrors:  Array<string>,
    resultCode: ResultsCode
}

export enum ResultsCode {
    SUCCESS = 0,
};