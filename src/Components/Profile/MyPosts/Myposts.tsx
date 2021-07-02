import React, {FC} from 'react';
import {AddPostForm} from './AddPostForm/AddPostForm';
import {Post} from './Post/Post';
import {PostType, ProfileActionType} from '../../../redux/profileReducer';

type PropsType = {
    postsData: Array<PostType>
    newPostText: string
    dispatch: (action: ProfileActionType) => void
}

export const MyPosts: FC<PropsType> = (props) => {
    const {postsData, newPostText, dispatch} = props;

    const postsElements = postsData.map(post => (
        <Post key={post.id} id={post.id} message={post.message} likesCount={post.likesCount}/>))

    return (
        <div>
            <div>My Posts</div>
            <AddPostForm newPostText={newPostText} dispatch={dispatch}/>
            {postsElements}
        </div>
    )
}