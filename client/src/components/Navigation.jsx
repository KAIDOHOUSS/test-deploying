import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navibar">
      <div className="nav-container">
        <Link to="/"> 
        <div className="nav-logo">
          <img src="/ph/logo.png" alt="Logo" className="logo-img" />
          <span className="logo-text">FINOVA</span>
        </div>
        </Link>
        <div className={`navi-menu ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={handleLinkClick}>
            Home
          </Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`} onClick={handleLinkClick}>
            About
          </Link>
          <Link to="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`} onClick={handleLinkClick}>
            Services
          </Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={handleLinkClick}>
            Contact
          </Link>
          <div className="nav-dropdown">
            <span className="nav-link dropdown-toggle">
              More
              <svg className="dropdown-arrow" width="12" height="8" viewBox="0 0 12 8">
                <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </span>
            <div className="dropdown-menu">
              <Link to="/news" className="dropdown-item" onClick={handleLinkClick}>
                News
              </Link>
              <Link to="/events" className="dropdown-item" onClick={handleLinkClick}>
                Events
              </Link>
              <Link to="/resources" className="dropdown-item" onClick={handleLinkClick}>
                Resources
              </Link>
              <Link to="/support" className="dropdown-item" onClick={handleLinkClick}>
                Support
              </Link>
            </div>
          </div>
        </div>

        <div className="nav-actions">
          <button className="search-btn" title="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
          </button>
          <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;