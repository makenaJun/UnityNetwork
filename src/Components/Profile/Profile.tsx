import React, {FC} from 'react';
import {MyPosts} from './MyPosts/Myposts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

export const Profile: FC = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}