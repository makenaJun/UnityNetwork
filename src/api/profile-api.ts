import {instance, ResponseType} from './api';
import {UserProfileType} from '../redux/profileReducer';

type ResponseStatusType = string | null | { message: string };

export const profileApi = {
    getProfile(userId: number) {
        return instance.get<UserProfileType>(`/profile/${userId}`).then(res => res.data);
    },
    getStatus(userId: number) {
        return instance.get<ResponseStatusType>(`/profile/status/${userId}`).then(res => res.data);
    },
    updateStatus(status: string) {
        const payload = {
            status,
        }
        return instance.put<ResponseType>(`/profile/status`, payload).then(res => res.data);
    },
};