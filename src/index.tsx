import React from 'react';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import {changeNewPostText, addPost, state} from './redux/state';
import {rerenderEntireTree} from './render';

rerenderEntireTree({state, addPost, changeNewPostText})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
