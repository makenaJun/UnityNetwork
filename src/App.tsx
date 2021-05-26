import React from 'react';
import './App.scss';

function App() {
    return (
        <div className="app-wrapper">
            <header className="header">Header</header>
            <div className="content-wrapper">
                <nav className="navigation">Navigation</nav>
                <div className="content">Content</div>
            </div>
            <div className="footer">Footer</div>
        </div>
    );
}

export default App;
