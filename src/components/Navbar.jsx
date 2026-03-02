import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const logoBlack = "https://www.figma.com/api/mcp/asset/9f8f2c23-7cb5-4b14-8c71-5273a28b08ea";

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logoBlack} alt="PEAK Academy" />
        </Link>
        
        <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <Link 
            to="/utbildningar" 
            className={location.pathname.startsWith('/utbildningar') ? 'active' : ''}
          >
            Våra utbildningar
          </Link>
          <Link 
            to="/om-oss" 
            className={location.pathname === '/om-oss' ? 'active' : ''}
          >
            Om oss
          </Link>
          <Link 
            to="/kontakt" 
            className={location.pathname === '/kontakt' ? 'active' : ''}
          >
            Kontakta oss
          </Link>
          <Link to="/ansok" className="btn btn-teal mobile-cta">
            Ansök nu
          </Link>
        </div>
        
        <Link to="/utbildningar" className="btn btn-teal desktop-cta">
          Våra utbildningar
        </Link>

        <button 
          className={`hamburger ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Stäng meny' : 'Öppna meny'}
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {isMenuOpen && <div className="navbar-overlay" onClick={() => setIsMenuOpen(false)} />}
    </nav>
  );
}
