import React from 'react';

const Navbar = ({page, setPage}) => {

    return (
        <div className='navbar'>
            <span className='nav-btn home-btn' onClick={() => setPage('Home')}>Home</span>
            <span className='nav-btn' onClick={() => setPage('About')}>About</span>
            <span className='nav-btn' onClick={() => setPage('Skills')}>Skills</span>
            <span className='nav-btn' onClick={() => setPage('Projects')}>Projects</span>
            <span className='nav-btn' onClick={() => setPage('Contact')}>Contact</span>
        </div>
    )
}

export default Navbar