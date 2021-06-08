import React, {FC} from 'react';
import {AddPostForm} from './AddPostForm/AddPostForm';
import {Post} from './Post/Post';
import {PostType} from '../../../index';

type PropsType = {
    postsData: Array<PostType>
}

export const MyPosts: FC<PropsType> = (props) => {
    const {postsData} = props;

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