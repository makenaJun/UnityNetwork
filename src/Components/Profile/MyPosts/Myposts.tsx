import React, {FC} from 'react';
import {AddPostForm} from './AddPostForm/AddPostForm';
import {Post} from './Post/Post';
import {PostType} from '../../../redux/state';

type PropsType = {
    postsData: Array<PostType>
    addPost: (newPostText: string) => void
}

export const MyPosts: FC<PropsType> = (props) => {
    const {postsData, addPost} = props;

    const postsElements = postsData.map(post => (
        <Post key={post.id} id={post.id} message={post.message} likesCount={post.likesCount}/>))

    return (
        <div>
            <div>My Posts</div>
            <AddPostForm addPost={addPost}/>
            {postsElements}
        </div>
    )
}