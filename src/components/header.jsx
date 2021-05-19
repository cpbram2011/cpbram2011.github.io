
import React, { Component } from 'react'
import {Link} from 'react-scroll'


export default class header extends Component {
    render() {
        return (
            <div className="header">
                <ul>
                    <li><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
                    <li><Link  to="skills" offset={-80} spy={true} smooth={true}>Skills</Link></li>
                    <li><Link  to="projects" offset={-80} spy={true} smooth={true}>Projects</Link></li>
                    <li><Link  to="contact" offset={-80} spy={true} smooth={true}>Contact</Link></li>
                </ul>
            </div>
        )
    }
}