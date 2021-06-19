import React, {FC} from 'react';
import {AddPostForm} from './AddPostForm/AddPostForm';
import {Post} from './Post/Post';
import {PostType} from '../../../redux/state';

type PropsType = {
    postsData: Array<PostType>
    newPostText: string
    addPost: () => void
    changeNewPostText: (newPostText:string) => void
}

export const MyPosts: FC<PropsType> = (props) => {
    const {postsData, newPostText,  addPost, changeNewPostText} = props;

    const postsElements = postsData.map(post => (
        <Post key={post.id} id={post.id} message={post.message} likesCount={post.likesCount}/>))

    return (
        <div>
            <div>My Posts</div>
            <AddPostForm addPost={addPost} newPostText={newPostText} changeNewPostText={changeNewPostText}/>
            {postsElements}
        </div>
    )
}