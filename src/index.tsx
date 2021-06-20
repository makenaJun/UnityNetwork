import React from 'react';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import {addPost, changeNewPostText, state, StateType, subscribe} from './redux/state';
import ReactDOM from 'react-dom';
import App from './App';

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} changeNewPostText={changeNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
subscribe(rerenderEntireTree);

rerenderEntireTree(state)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
