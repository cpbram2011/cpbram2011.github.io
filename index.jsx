import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import NavBar from './dist/navbar';

document.addEventListener("DOMContentLoaded", () => { 
    const root = document.getElementById('root');

    const App = () => {
        return (
            <HashRouter >
                <div className="app">
                    <NavBar />
                    <Switch>
                        <Route path='/home'>
                            <h1>You are Home</h1>
                        </Route>
                        <Route path='/resume'>
                            <h1>You are Resume</h1>
                        </Route>
                        <Route path='/projects'>
                            <h1>You are Projects</h1>
                        </Route>
                        <Route path='/contact'>
                            <h1>You are contact</h1>
                        </Route>
                    </Switch>
                </div>

            </HashRouter>
        )
    }
    ReactDOM.render(<App />, root);


})