import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const logoBlack = "https://www.figma.com/api/mcp/asset/9f8f2c23-7cb5-4b14-8c71-5273a28b08ea";

export default function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logoBlack} alt="PEAK Academy" />
        </Link>
        
        <div className="navbar-links">
          <Link to="/utbildningar" className={location.pathname === '/utbildningar' ? 'active' : ''}>
            Våra utbildningar
          </Link>
          <Link to="/om-oss" className={location.pathname === '/om-oss' ? 'active' : ''}>
            Om oss
          </Link>
          <Link to="/kontakt" className={location.pathname === '/kontakt' ? 'active' : ''}>
            Kontakta oss
          </Link>
        </div>
        
        <Link to="/utbildningar" className="btn btn-teal">
          Våra utbildningar
        </Link>
      </div>
    </nav>
  );
}
