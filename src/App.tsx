import React, {FC} from 'react';
import './App.scss';
import {Header} from './Components/Header/Header';
import {Footer} from './Components/Footer/Footer';
import {Sidebar} from './Components/Sidebar/Sidebar';
import {Profile} from './Components/Profile/Profile';
import {Dialogs} from './Components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {ActionType, StateType} from './redux/state';

type PropsType = {
    state: StateType
    dispatch: (action: ActionType) => void
}

const App: FC<PropsType> = (props) => {
    const {dispatch} = props;
    const {profilePage, dialogsPages} = props.state;

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className="body-app-wrapper">
                    <Sidebar/>
                    <div className="content">
                        <Route path={'/profile'}
                               render={() => <Profile profilePage={profilePage} dispatch={dispatch}/>}/>
                        <Route path={'/dialogs'} render={() => <Dialogs dialogsPages={dialogsPages}/>}/>
                    </div>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
