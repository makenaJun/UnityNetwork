import React, {FC} from 'react';
import {MyPosts} from './MyPosts/Myposts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfileActionType, ProfilePageType} from '../../redux/profileReducer';

type PropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ProfileActionType) => void
}

export const Profile: FC<PropsType> = (props) => {
    const {dispatch} = props;
    const {postsData, newPostText} = props.profilePage;
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={postsData} newPostText={newPostText} dispatch={dispatch}/>
        </div>
    )
}