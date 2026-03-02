import { Link } from 'react-router-dom';
import './Hero.css';

const heroImage = "https://www.figma.com/api/mcp/asset/70d6bc2f-3d63-4896-a7aa-3fdc1cc0a653";

export default function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="hero-subtitle">Upptäck yrkesutbildningar som är skräddarsydda för dagens och morgondagens arbetsmarknad.</p>
        <h1>Din framtid börjar här</h1>
        <Link to="/utbildningar" className="btn btn-primary">
          Hitta din utbildning
        </Link>
      </div>
    </section>
  );
}
