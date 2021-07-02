import React, {FC} from 'react';
import {addPostAC, changeNewPostTextAC, PostType, ProfileActionType} from '../../../redux/profileReducer';
import {MyPosts} from './Myposts';

type PropsType = {
    postsData: Array<PostType>
    newPostText: string
    dispatch: (action: ProfileActionType) => void
}

export const MyPostsContainer: FC<PropsType> = (props) => {
    const {postsData, newPostText, dispatch} = props;

    const addPost = () => {
        dispatch(addPostAC())
    }
    const changeNewPostText = (newText: string) => {
        dispatch(changeNewPostTextAC(newText))
    }

    return (
        <MyPosts postsData={postsData} addPost={addPost} changeNewPostText={changeNewPostText}
                 newPostText={newPostText}/>
    )
}