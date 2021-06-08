import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}

const postsData: Array<PostType> = [
    {id: '1', message: 'Hi, how are you?', likesCount: 15},
    {id: '2', message: '\'It\'s my first post', likesCount: 21},
    {id: '3', message: 'Hello World!', likesCount: 27}
]
const dialogsData: Array<DialogType> = [
    {id: '1', name: 'Igor'},
    {id: '2', name: 'Marina'},
    {id: '3', name: 'Sasha'},
    {id: '4', name: 'Maxim'},
    {id: '5', name: 'Andrei'},
    {id: '6', name: 'Zenia'}
]
const messagesData: Array<MessageType> = [
    {id: '1', message: 'Hello'},
    {id: '2', message: 'How are you?'},
    {id: '3', message: 'My first message))'},
    {id: '4', message: 'Yo yo yo'},
    {id: '5', message: 'Hello man!'}
]

ReactDOM.render(
    <React.StrictMode>
        <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
