import React, { useState, useRef, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import Body from './components/Body'
import Background from './components/Background';

function App() {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)



  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      const overlay = document.querySelector('.overlay');
      overlay.style.setProperty('--x', `${e.clientX}px`);
      overlay.style.setProperty('--y', `${e.clientY}px`);
    });
  }, [])

  return (
    <>
    <Background />
    <div className="App">
      <div className="overlay" />
        <NavBar refs={{ homeRef, aboutRef, skillsRef, projectsRef, contactRef }}/>
        <Body refs={{homeRef, aboutRef, skillsRef, projectsRef, contactRef}} />
    </div>
    </>
  );
}

export default App;
