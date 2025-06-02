import { Link, useLocation } from 'react-router-dom';
import { useState ,useContext} from 'react';
import {AppContext} from './AppContextProvider'
import  Alert  from '../Styling/Alert';
import { useEffect } from 'react';

const Navigation = () => {
  const {showAlert,showAlertError,message,error,refreshAccessToken,accessToken,setAccessToken,loading,setLoading} = useContext(AppContext)
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
  const handleLogout = () =>{
    try {
    setAccessToken(null)
    } catch (error) {
      
    }

  }
useEffect(() => {
        if (accessToken) {
          const interval = setInterval(() => {
            refreshAccessToken();
          }, 14 * 60 * 1000); // 14 minutes
          return () => clearInterval(interval);
        }
      }, [accessToken]);
  return (
    <nav className="navibar">
      <div className="nav-container">
        <Link to="/"> 
        <div className="nav-logo">
          <img src="/ph/logo.png" alt="Logo" className="logo-img" />
          <span className="logo-text">FINOVA</span>
        </div>
        </Link>
        {showAlertError && <Alert message={error} color='red'/>}
             {showAlert && <Alert message={message} color='green'/>}
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
          {!accessToken &&<Link to={'/login'}>
          <button className="btn btn-primary">
           login
          </button></Link>}
          {accessToken && 
          <button className="btn btn-danger" disabled={loading ? true : false} onClick={handleLogout}>
           logout
          </button>}
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