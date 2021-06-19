import React from "react";
import ReactDOM from "react-dom";
import {StateType} from './redux/state';
import App from './App';


export const rerenderEntireTree = (state: StateType, addPost: (postMessage: string) => void) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}