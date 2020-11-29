import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import NavBar from './dist/navbar';
import Skills from './dist/skills';
import Home from './dist/home';
import Projects from './dist/projects';


document.addEventListener("DOMContentLoaded", () => { 
    const root = document.getElementById('root');

    const App = () => {
        return (
            <HashRouter >
                <div className="app">
                    <NavBar />
                    <Switch>
                        <Route path='/home'>
                            <Home />
                        </Route>
                        <Route path='/resume'>
                            <Skills />
                        </Route>
                        <Route path='/projects'>
                            <Projects />
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