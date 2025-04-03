import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
          <Link to="/different-angles/" className="nav-link" onClick={() => setMenuOpen(false)}>
            See From Different Angles
          </Link>
          <Link to="/party-mode/" className="nav-link" onClick={() => setMenuOpen(false)}>
            Party Mode
          </Link>
          <Link to="/immersive-mode/" className="nav-link" onClick={() => setMenuOpen(false)}>
            Immersive Mode
          </Link>
          <Link to="/forum/" className="nav-link" onClick={() => setMenuOpen(false)}>
            Girls Only Forum
          </Link>
        </div>

        <div className="nav-links">
          <Link to="/different-angles/" className="nav-link">
            See From Different Angles
          </Link>
          <Link to="/party-mode/" className="nav-link">
            Party Mode
          </Link>
          <Link to="/immersive-mode/" className="nav-link">
            Immersive Mode
          </Link>
          <Link to="/forum/" className="nav-link">
            Public Forum
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;