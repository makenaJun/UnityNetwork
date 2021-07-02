import React, {ChangeEvent, FC} from 'react';

type PropsType = {
    newPostText: string
    changeNewPostText: (newText: string) => void
    addPost: () => void
}

export const AddPostForm: FC<PropsType> = (props) => {
    const {newPostText, changeNewPostText, addPost} = props;

    const postTextChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const NewText = event.currentTarget.value;
        changeNewPostText(NewText)
    };
    const addPostHandler = () => {
        addPost()
    };

    return (
        <div>
            <textarea value={newPostText} onChange={postTextChangeHandler}/>
            <button onClick={addPostHandler}>Add post
            </button>
        </div>
    )
}