import React, { useState } from 'react';

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
      <nav>
        <ul className={`nav-menu${menuOpen ? ' open' : ''}`} onClick={handleNavClick}>
          <li><a href="#home" style={{ color: '#00bfff', textDecoration: 'none' }}>Home</a></li>
          <li><a href="#about" style={{ color: '#00bfff', textDecoration: 'none' }}>About</a></li>
          <li><a href="#projects" style={{ color: '#00bfff', textDecoration: 'none' }}>Projects</a></li>
          <li><a href="#resume" style={{ color: '#00bfff', textDecoration: 'none' }}>Resume</a></li>
          <li><a href="#work-experience" style={{ color: '#00bfff', textDecoration: 'none' }}>Work Experience</a></li>
          <li><a href="#education-certification" style={{ color: '#00bfff', textDecoration: 'none' }}>Education / Certifications</a></li>
          <li><a href="#contact" style={{ color: '#00bfff', textDecoration: 'none' }}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
