import {instance, ResponseType} from './api';

type AuthMeDataType = {
    id: number,
    login: string,
    email: string,
};

type LoginDataType = {
    userId: number,
};

export const authApi = {
    me() {
        return instance.get<ResponseType<AuthMeDataType>>(`/auth/me`).then(res => res.data);
    },
    login(email: string, password: string, rememberMe: boolean) {
        const payload = {
            email,
            password,
            rememberMe,
        }
        return instance.post<ResponseType<LoginDataType>>(`/auth/login`, payload).then(res => res.data);
    },
    logout() {
        return instance.delete<ResponseType>(`/auth/login`).then(res => res.data);
    },
};