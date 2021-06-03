import React from 'react';
import './App.scss';
import {Header} from './Components/Header/Header';
import {Footer} from './Components/Footer/Footer';
import {Sidebar} from './Components/Sidebar/Sidebar';
import {Profile} from './Components/Profile/Profile';
import {Dialogs} from './Components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';


function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className="body-app-wrapper">
                    <Sidebar/>
                    <div className="content">
                        <Route path={'/profile'} render={() => <Profile/>}/>
                        <Route path={'/dialogs'} render={() => <Dialogs/>}/>
                    </div>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
