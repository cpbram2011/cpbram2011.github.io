import React from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends React.Component {
    constructor(props){
        super(props)
        this.state = {tab: 'home'}

    }

    updateTab () {
        return e => {
            
            this.setState({tab: e.target.value})
            console.log(this.state)
        }
    }
    render () {
        return (
        <div className="navbar">
            <Link to='home' value='home' onClick={this.updateTab()} >Home</Link>
            <Link to='projects' value='projects' onClick={this.updateTab()} >Projects</Link>
            <Link to='resume' value='resume' onClick={this.updateTab()} >Resume/Skills</Link>
            <Link to='contact' value='contact' onClick={this.updateTab()} >Contact</Link>
            
        </div>
    )
    }
}