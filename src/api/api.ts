import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        'API-KEY': '8fe373c6-ac19-4fc4-baf6-f60952b5767c',
    },
});

export const usersApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`).then(res => res.data);
    },
    follow(userId: number) {
        return instance.post(`/follow/${userId}`).then(res => res.data);
    },
    unfollow(userId: number) {
        return instance.delete(`/follow/${userId}`).then(res => res.data);
    },
    getProfile(userId: number) {
        return instance.get(`/profile/${userId}`).then(res => res.data);
    },
};

export const authApi = {
    me() {
        return instance.get(`/auth/me`).then(res => res.data);
    },
};

export enum ResultsCode {
    SUCCESS = 0,
};