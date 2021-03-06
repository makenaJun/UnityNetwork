import React, {FC} from 'react';
import './App.scss';
import {Footer} from './Components/Footer/Footer';
import {Sidebar} from './Components/Sidebar/Sidebar';
import ProfileContainer from './Components/Profile/ProfileContainer';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import DocumentTitle from 'react-document-title';
import HeaderContainer from './Components/Header/HeaderContainer';
import {Login} from './Components/Login/Login';


const App: FC = () => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <div className="body-app-wrapper">
                    <Sidebar/>
                    <div className="content">
                        <Route path={'/profile/:userId?'}
                               render={() => <DocumentTitle title={`Profile`} children={<ProfileContainer/>}/>}/>
                        <Route path={'/dialogs'}
                               render={() => <DocumentTitle title={'Dialogs'} children={<DialogsContainer/>}/>}/>
                        <Route path={'/developers'}
                               render={() => <DocumentTitle title={'Developers'} children={<UsersContainer/>}/>}/>
                        <Route path={'/login'}
                               render={() => <DocumentTitle title={'Login'} children={<Login/>}/>}/>
                    </div>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
