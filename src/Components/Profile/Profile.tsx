import React, {FC} from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfileActionType, ProfilePageType} from '../../redux/profileReducer';
import {MyPostsContainer} from './MyPosts/MypostsContainer';

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
            <MyPostsContainer postsData={postsData} newPostText={newPostText} dispatch={dispatch}/>
        </div>
    )
}