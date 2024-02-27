import React, { useState, useRef, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import Body from './components/Body'

function App() {
  const [page, setPage] = useState("")
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    if (page === "Home") homeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (page === "About") aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (page === 'Skills') skillsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (page === 'Projects') projectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (page === "Contact") contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setPage("")
  }, [page])

  return (
    <div className="App">
        <NavBar page={page} setPage={setPage} />
        <Body refs={{homeRef, aboutRef, skillsRef, projectsRef, contactRef}} />
    </div>
  );
}

export default App;
