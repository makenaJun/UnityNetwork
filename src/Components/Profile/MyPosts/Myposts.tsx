import React, {FC} from 'react';
import {AddPostForm} from './AddPostForm/AddPostForm';
import {Post} from './Post/Post';


export const MyPosts: FC = () => {
    const postsData = [
        {id: '1', message: 'Hi, how are you?', likesCount: 15},
        {id: '2', message: '\'It\'s my first post', likesCount: 21}
    ]
    const postsElements = postsData.map(post => (
        <Post key={post.id} id={post.id} message={post.message} likesCount={post.likesCount}/>))

    return (
        <div>
            <div>My Posts</div>
            <AddPostForm/>
            {postsElements}
        </div>
    )
}