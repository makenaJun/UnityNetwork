import React, {FC} from 'react';
import {AddPostForm} from './AddPostForm/AddPostForm';
import {Post} from './Post/Post';


export const MyPosts: FC = () => {
    return (
        <div>
            <div>My Posts</div>
            <AddPostForm/>
            <Post message={'Hi, how are you?'} likesCount={15}/>
            <Post message={'It\'s my first post'} likesCount={20}/>
        </div>
    )
}