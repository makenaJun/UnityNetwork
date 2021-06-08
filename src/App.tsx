import React, {FC} from 'react';
import './App.scss';
import {Header} from './Components/Header/Header';
import {Footer} from './Components/Footer/Footer';
import {Sidebar} from './Components/Sidebar/Sidebar';
import {Profile} from './Components/Profile/Profile';
import {Dialogs} from './Components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {DialogType, MessageType, PostType} from './index';

type PropsType = {
    postsData: Array<PostType>
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
}

const App: FC<PropsType> = (props) => {
    const {postsData, dialogsData, messagesData} = props;
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className="body-app-wrapper">
                    <Sidebar/>
                    <div className="content">
                        <Route path={'/profile'} render={() => <Profile postsData={postsData}/>}/>
                        <Route path={'/dialogs'} render={() => <Dialogs dialogsData={dialogsData}
                                                                        messagesData={messagesData}/>}/>
                    </div>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
