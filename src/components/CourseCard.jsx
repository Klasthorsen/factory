import { Link } from 'react-router-dom';
import './CourseCard.css';

export default function CourseCard({ course }) {
  const { 
    id, 
    title, 
    startDate, 
    location, 
    duration, 
    pace, 
    image, 
    isOpen 
  } = course;

  return (
    <div className="course-card">
      <div className="course-card-image">
        <img src={image} alt={title} />
        <span className={`tag ${isOpen ? 'tag-white' : 'tag-orange'}`}>
          {isOpen ? 'ANSÖKAN ÖPPEN' : 'ANSÖKAN STÄNGD'}
        </span>
      </div>
      <div className="course-card-content">
        <h4>{title}</h4>
        <p className="course-date">{startDate}</p>
        <div className="course-tags">
          <span className="tag tag-teal">{location}</span>
          <span className="tag tag-teal">{duration}</span>
          <span className="tag tag-teal">{pace}</span>
        </div>
        <Link to={`/utbildningar/${id}`} className="course-link">
          Läs mer →
        </Link>
      </div>
    </div>
  );
}
