import React, { useState } from 'react';
import { FaHouse, FaUser, FaCode, FaFile, FaBriefcase, FaGraduationCap, FaEnvelope } from 'react-icons/fa6';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHamburgerClick = () => setMenuOpen((open) => !open);
  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="hamburger" onClick={handleHamburgerClick} aria-label="Toggle navigation" tabIndex={0} role="button">
        <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }}></span>
        <span style={{ opacity: menuOpen ? 0 : 1 }}></span>
        <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none' }}></span>
      </div>
      <nav className="navbar" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <ul style={{ display: 'flex', gap: '40px', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }} className={`nav-menu${menuOpen ? ' open' : ''}`} onClick={handleNavClick}>
          <li style={{ display: 'flex', alignItems: 'center' }}>
            <span className="nav-icon" style={{ marginRight: '6px' }}><i className="fas fa-home" /></span>
            <a href="#home" style={{ color: '#00cfff', textDecoration: 'none' }}>Home</a>
          </li>
          <li style={{ display: 'flex', alignItems: 'center' }}>
            <span className="nav-icon" style={{ marginRight: '6px' }}><i className="fas fa-user" /></span>
            <a href="#about" style={{ color: '#00cfff', textDecoration: 'none' }}>About</a>
          </li>
          <li style={{ display: 'flex', alignItems: 'center' }}>
            <span className="nav-icon" style={{ marginRight: '6px' }}><i className="fas fa-code" /></span>
            <a href="#projects" style={{ color: '#00cfff', textDecoration: 'none' }}>Projects</a>
          </li>
          <li style={{ display: 'flex', alignItems: 'center' }}>
            <span className="nav-icon" style={{ marginRight: '6px' }}><i className="fas fa-file-alt" /></span>
            <a href="#resume" style={{ color: '#00cfff', textDecoration: 'none' }}>Resume</a>
          </li>
          <li style={{ display: 'flex', alignItems: 'center' }}>
            <span className="nav-icon" style={{ marginRight: '6px' }}><i className="fas fa-briefcase" /></span>
            <a href="#work" style={{ color: '#00cfff', textDecoration: 'none' }}>Work Experience</a>
          </li>
          <li style={{ display: 'flex', alignItems: 'center' }}>
            <span className="nav-icon" style={{ marginRight: '6px' }}><i className="fas fa-graduation-cap" /></span>
            <a href="#education" style={{ color: '#00cfff', textDecoration: 'none' }}>Education</a>
          </li>
          <li style={{ display: 'flex', alignItems: 'center' }}>
            <span className="nav-icon" style={{ marginRight: '6px' }}><i className="fas fa-envelope" /></span>
            <a href="#contact" style={{ color: '#00cfff', textDecoration: 'none' }}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
