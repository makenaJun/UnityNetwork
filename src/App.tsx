import React from 'react';
import './App.scss';
import {Footer} from "./Components/Footer/Footer";
import {Header} from "./Components/Header/Header";
import {Sidebar} from "./Components/Sidebar/Sidebar";
import {Profile} from "./Components/Profile/Profile";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className="body-app-wrapper">
                <Sidebar/>
                <div className="content">
                    <Profile/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
