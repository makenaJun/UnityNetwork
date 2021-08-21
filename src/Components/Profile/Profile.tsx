import React, {FC} from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MypostsContainer';
import {UserProfileType} from '../../redux/profileReducer';

type PropsType = {
    profile: UserProfileType | null,
    status: null | string,
    updateUserStatus: (status: string) => void,
};

export const Profile: FC<PropsType> = (props) => {
    const {profile, status, updateUserStatus} = props;
    return (
        <div>
            <ProfileInfo profile={profile}
                         status={status}
                         updateUserStatus={updateUserStatus}
            />
            <MyPostsContainer/>
        </div>
    )
}