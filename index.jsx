import React from 'react';
import ReactDOM from 'react-dom';

debugger
document.addEventListener("DOMContentLoaded", () => { 
    const root = document.getElementById('root');

    const App = () => {
        return (
            <div className="app">
                <h1>heyo</h1>
                <h3>wassup</h3>
            </div>
        )
    }

    ReactDOM.render(<App />, root);

})