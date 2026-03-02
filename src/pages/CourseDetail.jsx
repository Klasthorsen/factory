import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';
import './CourseDetail.css';

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="course-not-found">
        <h2>Utbildningen hittades inte</h2>
        <Link to="/utbildningar" className="btn btn-primary">Tillbaka till utbildningar</Link>
      </div>
    );
  }

  return (
    <div className="course-detail-page">
      <section className="course-detail-hero" style={{ backgroundImage: `url(${course.image})` }}>
        <div className="course-detail-overlay"></div>
        <div className="course-detail-hero-content">
          <span className={`tag ${course.isOpen ? 'tag-white' : 'tag-orange'}`}>
            {course.isOpen ? 'ANSÖKAN ÖPPEN' : 'ANSÖKAN STÄNGD'}
          </span>
          <h1>{course.title}</h1>
          <p>{course.description}</p>
        </div>
      </section>

      <section className="course-detail-info">
        <div className="course-detail-container">
          <div className="course-detail-sidebar">
            <div className="course-info-card">
              <h3>Utbildningsfakta</h3>
              <ul>
                <li>
                  <span className="label">Startdatum</span>
                  <span className="value">{course.startDate}</span>
                </li>
                <li>
                  <span className="label">Plats</span>
                  <span className="value">{course.location}</span>
                </li>
                <li>
                  <span className="label">Längd</span>
                  <span className="value">{course.duration}</span>
                </li>
                <li>
                  <span className="label">Studietakt</span>
                  <span className="value">{course.pace}</span>
                </li>
                <li>
                  <span className="label">CSN</span>
                  <span className="value">Ja, berättigad</span>
                </li>
              </ul>
              {course.isOpen ? (
                <Link to={`/ansok/${course.id}`} className="btn btn-primary btn-full">
                  Ansök nu
                </Link>
              ) : (
                <button className="btn btn-outline btn-full" disabled>
                  Ansökan stängd
                </button>
              )}
            </div>
          </div>

          <div className="course-detail-content">
            <div dangerouslySetInnerHTML={{ __html: course.content }} />
            
            <div className="course-requirements">
              <h3>Behörighetskrav</h3>
              <ul>
                {course.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="course-cta">
        <div className="course-cta-content">
          <h2>Har du frågor?</h2>
          <p>Kontakta oss så hjälper vi dig att hitta rätt utbildning.</p>
          <Link to="/kontakt" className="btn btn-teal">Kontakta oss</Link>
        </div>
      </section>
    </div>
  );
}
