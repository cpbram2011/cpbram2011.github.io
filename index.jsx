import React from 'react';
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import NavBar from './dist/navbar';

document.addEventListener("DOMContentLoaded", () => { 
    const root = document.getElementById('root');

    const App = () => {
        return (
            <HashRouter >
                <div className="app">
                    <NavBar />
                </div>

            </HashRouter>
        )
    }
    ReactDOM.render(<App />, root);


})