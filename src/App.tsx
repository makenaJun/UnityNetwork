import React, {FC} from 'react';
import './App.scss';
import {Header} from './Components/Header/Header';
import {Footer} from './Components/Footer/Footer';
import {Sidebar} from './Components/Sidebar/Sidebar';
import {Profile} from './Components/Profile/Profile';
import {Dialogs} from './Components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {ActionsTypes, AppStateType} from './redux/store';

type PropsType = {
    state: AppStateType
    dispatch: (action: ActionsTypes) => void
}

const App: FC<PropsType> = (props) => {
    const {dispatch} = props;
    const {profilePage, dialogsPage} = props.state;

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className="body-app-wrapper">
                    <Sidebar/>
                    <div className="content">
                        <Route path={'/profile'}
                               render={() => <Profile profilePage={profilePage} dispatch={dispatch}/>}/>
                        <Route path={'/dialogs'}
                               render={() => <Dialogs dialogsPages={dialogsPage} dispatch={dispatch}/>}/>
                    </div>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
