import React, {FC} from 'react';
import './App.scss';
import {Header} from './Components/Header/Header';
import {Footer} from './Components/Footer/Footer';
import {Sidebar} from './Components/Sidebar/Sidebar';
import {Profile} from './Components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/Users';


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
                        <Route path={'/developers'}
                               render={() => <UsersContainer/>}/>
                    </div>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
