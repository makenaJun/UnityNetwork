import React, {FC} from 'react';
import {MyPosts} from './MyPosts/Myposts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostType} from '../../index';

type PropsType = {
    postsData: Array<PostType>
}

export const Profile: FC<PropsType> = (props) => {
    const {postsData} = props;
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={postsData}/>
        </div>
    )
}