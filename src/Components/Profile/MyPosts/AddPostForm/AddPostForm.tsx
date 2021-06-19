import React, {createRef, FC, LegacyRef} from 'react';

type PropsType = {
    addPost: (newPostText: string) => void
}

export const AddPostForm: FC<PropsType> = (props) => {
    const {addPost} = props;

    const newPostElement: LegacyRef<HTMLTextAreaElement> = createRef();

    const addPostText = () => {
        if (newPostElement.current?.value) {
            addPost(newPostElement.current?.value);
            newPostElement.current.value = '';
        }
    }


    return (
        <div>
            <textarea ref={newPostElement}/>
            <button onClick={addPostText}>Add post
            </button>
        </div>
    )
}