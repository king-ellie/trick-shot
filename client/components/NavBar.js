import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { to: '/different-angles/', label: 'See From Different Angles' },
    { to: '/party-mode/', label: 'Party Mode' },
    { to: '/forum/', label: 'Public Forum' },
  ];

  return (
    <nav className="main-nav">
      <div className="nav-container">
        <button 
          className="hamburger-menu" 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-icon"></span>
          <span className="hamburger-icon"></span>
          <span className="hamburger-icon"></span>
        </button>

        <div className={`nav-dropdown ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.to} 
              to={link.to} 
              className="nav-link" 
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="nav-links">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="nav-link">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;