import React from 'react';

export default () => {
    React.useEffect(() => {
        const tiles = Array.from(document.getElementsByClassName('project-tile'));
        let t = 0
        tiles.forEach(tile => {
            setTimeout(() => {  tile.classList.remove('hidden'); tile.classList.add('animate'); }, t);
            t += 250
        });
        

    })
    return (
        <ul className="projects">
            <li className="project-tile hidden">
                <h2>Contrafact</h2>
                <h3>A SoundCloud inspired app for discovering/listening to new music</h3>
                <h3>JavaScript, React/Redux, Ruby on Rails, Webpack, AWS (D3), Heroku, HTML, SCSS</h3>
            </li>
            <li className="project-tile hidden">
                <h2>Hammeron</h2>
                <h3>A polyphonic synthesizer powered by Tone.js</h3>
                <h3>  Javascript, Tone.js, Webpack, Node.js, HTML, SCSS</h3>
            </li>
            <li className="project-tile hidden">
                <h2>CGDb</h2>
                <h3>  A horror-themed experimental project inspired by film director 
                    <a target='_blank' href="https://www.imdb.com/name/nm6439394/"> Brad Larson</a> </h3>
                    <h3>Mongoose, MongoDB, Express, Node, JavaScript, React/Redux, Webpack, SCSS</h3>
            </li>
        </ul>
    )
}