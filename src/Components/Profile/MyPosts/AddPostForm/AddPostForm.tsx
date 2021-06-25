import React, {ChangeEvent, FC} from 'react';
import {ActionType, addPostAC, changeNewPostText} from '../../../../redux/state';

type PropsType = {
    newPostText: string
    dispatch: (action: ActionType) => void
}

export const AddPostForm: FC<PropsType> = (props) => {
    const {newPostText, dispatch} = props;

    const postTextChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const NewText = event.currentTarget.value;
        const action = changeNewPostText(NewText);
        dispatch(action);
    };
    const addPost = () => {
        const action = addPostAC();
        dispatch(action);
    };

    return (
        <div>
            <textarea value={newPostText} onChange={postTextChangeHandler}/>
            <button onClick={addPost}>Add post
            </button>
        </div>
    )
}