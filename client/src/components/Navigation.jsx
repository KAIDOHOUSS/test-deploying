import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useLanguage } from '../LanguageContext';

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const translations = {
    en: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
      more: 'More',
      news: 'News',
      events: 'Events',
      resources: 'Resources',
      support: 'Support',
      logo: 'YourApp',
    },
    ar: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'الخدمات',
      contact: 'اتصل بنا',
      more: 'المزيد',
      news: 'الأخبار',
      events: 'الفعاليات',
      resources: 'الموارد',
      support: 'الدعم',
      logo: 'تطبيقك',
    },
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src="/api/placeholder/120/40" alt="Logo" className="logo-img" />
          <span className="logo-text">{translations[language].logo}</span>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={handleLinkClick}>
            {translations[language].home}
          </Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`} onClick={handleLinkClick}>
            {translations[language].about}
          </Link>
          <Link to="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`} onClick={handleLinkClick}>
            {translations[language].services}
          </Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={handleLinkClick}>
            {translations[language].contact}
          </Link>
          <div className="nav-dropdown">
            <span className="nav-link dropdown-toggle">
              {translations[language].more}
              <svg className="dropdown-arrow" width="12" height="8" viewBox="0 0 12 8">
                <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </span>
            <div className="dropdown-menu">
              <Link to="/news" className="dropdown-item" onClick={handleLinkClick}>
                {translations[language].news}
              </Link>
              <Link to="/events" className="dropdown-item" onClick={handleLinkClick}>
                {translations[language].events}
              </Link>
              <Link to="/resources" className="dropdown-item" onClick={handleLinkClick}>
                {translations[language].resources}
              </Link>
              <Link to="/support" className="dropdown-item" onClick={handleLinkClick}>
                {translations[language].support}
              </Link>
            </div>
          </div>
        </div>

        <div className="nav-actions">
          <div className="language-switcher">
            <button
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => handleLanguageChange('en')}
            >
              EN
            </button>
            <button
              className={`lang-btn ${language === 'ar' ? 'active' : ''}`}
              onClick={() => handleLanguageChange('ar')}
            >
              AR
            </button>
          </div>
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