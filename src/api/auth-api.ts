import {instance, ResponseType} from './api';

type AuthMeDataType = {
    id: number,
    login: string,
    email: string,
};

export const authApi = {
    me() {
        return instance.get<ResponseType<AuthMeDataType>>(`/auth/me`).then(res => res.data);
    },
};