import React, {ChangeEvent, FC} from 'react';

type PropsType = {
    newPostText: string
    addPost: () => void
    changeNewPostText: (newPostText:string) => void
}

export const AddPostForm: FC<PropsType> = (props) => {
    const {newPostText, addPost, changeNewPostText} = props;

    const postTextChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        changeNewPostText(event.currentTarget.value);
    }

    return (
        <div>
            <textarea value={newPostText} onChange={postTextChangeHandler}/>
            <button onClick={addPost}>Add post
            </button>
        </div>
    )
}