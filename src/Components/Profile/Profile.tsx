import React, {FC} from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MypostsContainer';
import {UserProfileType} from '../../redux/profileReducer';

type PropsType = {
    profile: UserProfileType | null
}

export const Profile: FC<PropsType> = (props) => {
    const {profile} =props;
    return (
        <div>
            <ProfileInfo profile={profile}/>
            <MyPostsContainer/>
        </div>
    )
}