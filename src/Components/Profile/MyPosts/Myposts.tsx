import React, {FC} from 'react';
import {AddPostForm} from './AddPostForm/AddPostForm';
import {Post} from './Post/Post';
import {PostType} from '../../../redux/profileReducer';

type PropsType = {
    postsData: Array<PostType>
    newPostText: string
    changeNewPostText: (newText: string) => void
    addPost: () => void
}

export const MyPosts: FC<PropsType> = (props) => {
    const {postsData, newPostText, changeNewPostText, addPost} = props;

    const postsElements = postsData.map(post => (
        <Post key={post.id} id={post.id} message={post.message} likesCount={post.likesCount}/>))

    return (
        <div>
            <div>My Posts</div>
            <AddPostForm newPostText={newPostText} addPost={addPost} changeNewPostText={changeNewPostText} />
            {postsElements}
        </div>
    )
}