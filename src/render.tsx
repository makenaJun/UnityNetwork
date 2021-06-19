import React from 'react';
import ReactDOM from 'react-dom';
import {StateType} from './redux/state';
import App from './App';

type PropsType = {
    state: StateType
    addPost: () => void
    changeNewPostText: (newPostText:string) => void
}

export const rerenderEntireTree = (props: PropsType) => {
    const {state, addPost, changeNewPostText} =props;
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} changeNewPostText={changeNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}