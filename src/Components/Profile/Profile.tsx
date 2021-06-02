import React, {FC} from 'react';
import {MyPosts} from './MyPosts/Myposts';

export const Profile: FC = () => {
    return (
        <div>
            <div>Profile</div>
            <div>
                <div>Avatar</div>
                <div>Description</div>
            </div>
            <MyPosts/>
        </div>
    )
}