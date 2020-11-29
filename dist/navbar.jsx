import React from 'react';
import {Link, useLocation} from 'react-router-dom';

export default () => {
    
    let param = useLocation().pathname.slice(1);
    debugger
    const [tab, setTab] = React.useState(param);
    React.useEffect(() => {
        document.querySelector(`#${tab}`).classList.add('selected')
        console.log(tab);
        console.log(param);

      });
      
    const updateTab = (target) => {
        let old = document.querySelector(`#${tab}`);
        old.classList.remove('selected')
        setTab(target)
        let selected = document.querySelector(`#${target}`);
        selected.classList.add('selected')
    }
    
    return (
    <div className="navbar">
        <Link to='home' id='home' onClick={() => updateTab('home')} >Home</Link>
        <Link to='projects' id='projects' onClick={() => updateTab('projects')} >Projects</Link>
        <Link to='resume' id='resume' onClick={() => updateTab('resume')} >Resume/Skills</Link>
        <Link to='contact' id='contact' onClick={() => updateTab('contact')} >Contact</Link>
    </div>
    )
    
}