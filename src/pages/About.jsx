import { Link } from 'react-router-dom';
import './About.css';

const teamImage = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80";

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>Om PEAK Academy</h1>
          <p>Vi utbildar framtidens yrkesfolk för Sveriges industri och näringsliv.</p>
        </div>
      </section>

      <section className="about-intro">
        <div className="about-container">
          <div className="about-text">
            <h2>Vår vision</h2>
            <p>PEAK Academy grundades med visionen att överbrygga klyftan mellan utbildning och arbetsmarknad. Vi tror på praktiskt lärande och nära samarbete med branschen för att säkerställa att våra studenter får de kunskaper som verkligen efterfrågas.</p>
            <p>Genom att kombinera teoretisk kunskap med praktisk erfarenhet förbereder vi våra studenter för framgångsrika karriärer inom teknisk industri, handel och tjänstesektor.</p>
          </div>
          <div className="about-image">
            <img src={teamImage} alt="PEAK Academy team" />
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="values-container">
          <h2>Våra värderingar</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Kvalitet</h3>
              <p>Vi strävar alltid efter högsta kvalitet i vår undervisning och våra utbildningar är certifierade av Myndigheten för yrkeshögskolan.</p>
            </div>
            <div className="value-card">
              <h3>Branschnära</h3>
              <p>Våra utbildningar utvecklas i nära samarbete med branschens ledande företag för att säkerställa relevans och anställningsbarhet.</p>
            </div>
            <div className="value-card">
              <h3>Individuellt fokus</h3>
              <p>Vi ser varje student som unik och anpassar vårt stöd efter individuella behov och förutsättningar.</p>
            </div>
            <div className="value-card">
              <h3>Innovation</h3>
              <p>Vi utvecklar ständigt nya utbildningar och metoder för att möta framtidens behov och utmaningar.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-stats">
        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-number">95%</span>
            <span className="stat-label">Får jobb inom 6 månader</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Utexaminerade studenter</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Samarbetsföretag</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">12</span>
            <span className="stat-label">Aktiva utbildningar</span>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-cta-content">
          <h2>Vill du veta mer?</h2>
          <p>Kontakta oss för mer information om våra utbildningar och hur du kan ansöka.</p>
          <div className="cta-buttons">
            <Link to="/kontakt" className="btn btn-primary">Kontakta oss</Link>
            <Link to="/utbildningar" className="btn btn-outline">Se utbildningar</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
