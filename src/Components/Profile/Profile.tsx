import React, {FC} from 'react';
import {MyPosts} from './MyPosts/Myposts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionType, ProfilePageType} from '../../redux/state';

type PropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void
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