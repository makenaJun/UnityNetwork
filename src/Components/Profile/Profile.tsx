import React, {FC} from 'react';
import {MyPosts} from './MyPosts/Myposts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state';

type PropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    changeNewPostText: (newPostText:string) => void
}

export const Profile: FC<PropsType> = (props) => {
    const {addPost, changeNewPostText} = props;
    const {postsData, newPostText} = props.profilePage;
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={postsData} addPost={addPost} newPostText={newPostText} changeNewPostText={changeNewPostText}/>
        </div>
    )
}