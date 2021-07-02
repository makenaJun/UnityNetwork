import React, {FC} from 'react';
import './App.scss';
import {Header} from './Components/Header/Header';
import {Footer} from './Components/Footer/Footer';
import {Sidebar} from './Components/Sidebar/Sidebar';
import {Profile} from './Components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import {ActionsTypes, AppStateType} from './redux/store';
import DialogsContainer from './Components/Dialogs/DialogsContainer';


const App: FC = () => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className="body-app-wrapper">
                    <Sidebar/>
                    <div className="content">
                        <Route path={'/profile'}
                               render={() => <Profile />}/>
                        <Route path={'/dialogs'}
                               render={() => <DialogsContainer/>}/>
                    </div>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
