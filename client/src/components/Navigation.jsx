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
        </div>
        <div className="nav-actions">
          <button className="btn btn-primary" title="Search">
           login
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