import React, {ChangeEvent, FC} from 'react';
import {addPostAC, changeNewPostTextAC, ProfileActionType} from '../../../../redux/profileReducer';

type PropsType = {
    newPostText: string
    dispatch: (action: ProfileActionType) => void
}

export const AddPostForm: FC<PropsType> = (props) => {
    const {newPostText, dispatch} = props;

    const postTextChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const NewText = event.currentTarget.value;
        const action = changeNewPostTextAC(NewText);
        dispatch(action);
    };
    const addPostHandler = () => {
        const action = addPostAC();
        dispatch(action);
    };

    return (
        <div>
            <textarea value={newPostText} onChange={postTextChangeHandler}/>
            <button onClick={addPostHandler}>Add post
            </button>
        </div>
    )
}