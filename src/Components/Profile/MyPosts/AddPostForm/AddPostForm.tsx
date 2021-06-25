import React, {ChangeEvent, FC} from 'react';
import {ActionType} from '../../../../redux/state';

type PropsType = {
    newPostText: string
    dispatch: (action: ActionType) => void
}

export const AddPostForm: FC<PropsType> = (props) => {
    const {newPostText, dispatch} = props;

    const postTextChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const action: ActionType = {
            type: 'CHANGE_NEW_POST_TEXT',
            payload: {
                newPostText: event.currentTarget.value
            }
        }
        dispatch(action);
    };
    const addPost = () => {
        const action: ActionType = {
            type: 'ADD_POST',
            payload: {}
        }
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