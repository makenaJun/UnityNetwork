import React, {FC} from 'react';
import {AddPostForm} from "./AddPostForm/AddPostForm";
import {Post} from "./Post/Post";

export const MyPosts: FC = () => {
    return (
        <div>
            <div>My Posts</div>
            <AddPostForm/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}