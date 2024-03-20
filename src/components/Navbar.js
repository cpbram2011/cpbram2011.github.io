import React from 'react';

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
  };

const Navbar = ({page, setPage, refs}) => {
  const {
    homeRef,
    aboutRef,
    skillsRef,
    projectsRef,
    contactRef
  } = refs
  const handleNavigation = (ref) => {
    scrollToRef(ref);
  };

  return (
    <div className='navbar'>
      <span className='nav-btn home-btn' onClick={() => handleNavigation(homeRef)}>Home</span>
      <span className='nav-btn' onClick={() => handleNavigation(aboutRef)}>About</span>
      <span className='nav-btn' onClick={() => handleNavigation(skillsRef)}>Skills</span>
      <span className='nav-btn' onClick={() => handleNavigation(projectsRef)}>Projects</span>
      <span className='nav-btn' onClick={() => handleNavigation(contactRef)}>Contact</span>
    </div>
  )
}

export default Navbar