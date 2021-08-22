import React, {FC} from 'react';
import {AddPostForm, PostFormData} from './AddPostForm/AddPostForm';
import {Post} from './Post/Post';
import {PostType} from '../../../redux/profileReducer';

type PropsType = {
    postsData: Array<PostType>,
    addPost: (newPostText: string) => void,
}

export const MyPosts: FC<PropsType> = (props) => {
    const {postsData, addPost} = props;

    const onSubmit = (formData: PostFormData) => {
        const {newPostText} = formData;
        addPost(newPostText);
    }

    const postsElements = postsData.map(post => (
        <Post key={post.id} id={post.id} message={post.message} likesCount={post.likesCount}/>))

    return (
        <div>
            <div>My Posts</div>
            <AddPostForm onSubmit={onSubmit} />
            {postsElements}
        </div>
    )
}