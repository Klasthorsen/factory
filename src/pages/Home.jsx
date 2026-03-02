import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import CourseCard from '../components/CourseCard';
import FAQ from '../components/FAQ';
import { courses, importantDates } from '../data/courses';
import './Home.css';

export default function Home() {
  const popularCourses = courses.slice(0, 3);

  return (
    <div className="home-page">
      <Hero />
      
      <div className="section-divider"></div>
      
      {/* Intro Section */}
      <section className="intro-section">
        <div className="intro-container">
          <h2>Populära utbildningar</h2>
          <p className="intro-subtitle">Upptäck våra nya utbildningar. Vi uppdaterar ständigt vårt utbud för att möta arbetsmarknadens behov och framtidens utmaningar.</p>
          <Link to="/utbildningar" className="text-link">Se alla utbildningar →</Link>
        </div>
      </section>
      
      {/* Courses Grid */}
      <section className="courses-section">
        <div className="courses-grid">
          {popularCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
      
      <div className="section-divider"></div>
      
      {/* Important Dates */}
      <section className="dates-section">
        <div className="dates-container">
          <h2>Viktiga datum</h2>
          <div className="dates-grid">
            {importantDates.map((item, index) => (
              <div key={index} className="date-card">
                <div className="date-header">
                  <span className="date-value">{item.date}</span>
                  <span className="date-divider">•</span>
                  <span className="date-title">{item.title}</span>
                </div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <div className="section-divider"></div>
      
      {/* FAQ */}
      <FAQ />
      
      <div className="section-divider"></div>
      
      {/* Info Cards */}
      <section className="info-section">
        <div className="info-grid">
          <div className="info-card">
            <h3>Gratis utbildning</h3>
            <h4>CSN-berättigad</h4>
            <p>Alla våra YH-utbildningar är helt kostnadsfria och CSN-berättigade. Du kan ansöka om studiemedel via CSN för att täcka dina levnadskostnader under studietiden.</p>
            <Link to="/csn" className="btn btn-primary">Läs mer om CSN</Link>
          </div>
          <div className="info-card">
            <h3>Praktik på riktiga arbetsplatser</h3>
            <h4>LIA - Lärande i Arbete</h4>
            <p>En stor del av utbildningen sker ute på arbetsplatser genom LIA. Du får värdefull erfarenhet och knyter kontakter med potentiella arbetsgivare.</p>
            <Link to="/om-oss" className="btn btn-primary">Läs mer om LIA</Link>
          </div>
        </div>
      </section>
      
      <div className="section-divider"></div>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Redo att ta nästa steg?</h2>
          <p>Ansök idag och börja din resa mot en ny karriär. Vi hjälper dig hela vägen.</p>
          <Link to="/utbildningar" className="btn btn-primary">Hitta din utbildning</Link>
        </div>
      </section>
    </div>
  );
}
