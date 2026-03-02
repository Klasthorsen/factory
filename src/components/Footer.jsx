import { Link } from 'react-router-dom';
import './Footer.css';

const logoWhite = "https://www.figma.com/api/mcp/asset/e74e083d-bbd6-43ef-9184-8deac51636aa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src={logoWhite} alt="PEAK Academy" className="footer-logo" />
          <p className="footer-copyright">© PEAK Academy 2025</p>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M16 8.05C16 3.6 12.4 0 8 0S0 3.6 0 8.05c0 4 2.9 7.35 6.75 7.95v-5.6h-2v-2.35h2V6.3c0-2 1.2-3.1 3-3.1.9 0 1.8.15 1.8.15v2h-1c-1 0-1.3.6-1.3 1.25v1.5h2.2l-.35 2.35h-1.85v5.6C13.1 15.4 16 12.05 16 8.05z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 1.44c2.14 0 2.39.01 3.23.05.78.04 1.2.16 1.48.27.37.14.64.32.92.6.28.28.46.55.6.92.11.28.24.7.27 1.48.04.84.05 1.1.05 3.24s-.01 2.39-.05 3.23c-.04.78-.16 1.2-.27 1.48-.14.37-.32.64-.6.92-.28.28-.55.46-.92.6-.28.11-.7.24-1.48.27-.84.04-1.1.05-3.23.05s-2.39-.01-3.23-.05c-.78-.04-1.2-.16-1.48-.27-.37-.14-.64-.32-.92-.6-.28-.28-.46-.55-.6-.92-.11-.28-.24-.7-.27-1.48-.04-.84-.05-1.1-.05-3.23s.01-2.39.05-3.24c.04-.78.16-1.2.27-1.48.14-.37.32-.64.6-.92.28-.28.55-.46.92-.6.28-.11.7-.23 1.48-.27.84-.04 1.1-.05 3.23-.05M8 0C5.83 0 5.55.01 4.7.05c-.85.04-1.43.17-1.94.37-.53.2-.97.48-1.42.93-.45.45-.72.9-.93 1.42-.2.51-.33 1.09-.37 1.94C.01 5.55 0 5.83 0 8s.01 2.45.05 3.29c.04.85.17 1.43.37 1.94.2.53.48.97.93 1.42.45.45.9.72 1.42.93.51.2 1.09.33 1.94.37.84.04 1.12.05 3.29.05s2.45-.01 3.29-.05c.85-.04 1.43-.17 1.94-.37.53-.2.97-.48 1.42-.93.45-.45.72-.9.93-1.42.2-.51.33-1.09.37-1.94.04-.84.05-1.12.05-3.29s-.01-2.45-.05-3.29c-.04-.85-.17-1.43-.37-1.94-.2-.53-.48-.97-.93-1.42-.45-.45-.9-.72-1.42-.93-.51-.2-1.09-.33-1.94-.37C10.45.01 10.17 0 8 0z"/>
                <path d="M8 3.89a4.11 4.11 0 100 8.22 4.11 4.11 0 000-8.22zm0 6.78a2.67 2.67 0 110-5.34 2.67 2.67 0 010 5.34z"/>
                <circle cx="12.27" cy="3.73" r=".96"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M14.82 0H1.18A1.17 1.17 0 000 1.16v13.68A1.17 1.17 0 001.18 16h13.64A1.17 1.17 0 0016 14.84V1.16A1.17 1.17 0 0014.82 0zM4.76 13.63H2.38V6h2.38v7.63zM3.57 4.99a1.38 1.38 0 110-2.76 1.38 1.38 0 010 2.76zm10.06 8.64h-2.38V9.92c0-.89-.02-2.03-1.24-2.03-1.24 0-1.43.97-1.43 1.96v3.78H6.21V6h2.28v1.04h.03c.32-.6 1.1-1.24 2.26-1.24 2.41 0 2.86 1.59 2.86 3.66v4.17z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="footer-links-grid">
          <div className="footer-column">
            <h4>Kontakt</h4>
            <ul>
              <li><Link to="/kontakt">Kontakta oss</Link></li>
              <li><Link to="/lediga-tjanster">Lediga tjänster</Link></li>
              <li><Link to="/om-oss">Möt våra medarbetare</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>PEAK Academy</h4>
            <ul>
              <li><Link to="/om-oss">Om oss</Link></li>
              <li><Link to="/utbildningar">Våra utbildningar</Link></li>
              <li><Link to="/ansok">Ansök nu</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Lärande</h4>
            <ul>
              <li><Link to="/csn">CSN & studiestöd</Link></li>
              <li><Link to="/faq">Vanliga frågor</Link></li>
              <li><Link to="/nyheter">Nyheter</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
