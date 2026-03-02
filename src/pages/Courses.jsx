import { useState } from 'react';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';
import './Courses.css';

export default function Courses() {
  const [filter, setFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');

  const locations = [...new Set(courses.map(c => c.location))];

  const filteredCourses = courses.filter(course => {
    const statusMatch = filter === 'all' || 
      (filter === 'open' && course.isOpen) || 
      (filter === 'closed' && !course.isOpen);
    const locationMatch = locationFilter === 'all' || course.location === locationFilter;
    return statusMatch && locationMatch;
  });

  return (
    <div className="courses-page">
      <section className="courses-hero">
        <div className="courses-hero-content">
          <h1>Våra utbildningar</h1>
          <p>Upptäck yrkesutbildningar som ger dig de kunskaper arbetsmarknaden efterfrågar. Alla våra utbildningar är CSN-berättigade och innehåller praktik.</p>
        </div>
      </section>

      <section className="courses-filters">
        <div className="filters-container">
          <div className="filter-group">
            <label>Status:</label>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="all">Alla utbildningar</option>
              <option value="open">Ansökan öppen</option>
              <option value="closed">Ansökan stängd</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Plats:</label>
            <select value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)}>
              <option value="all">Alla platser</option>
              {locations.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="courses-list">
        <div className="courses-container">
          <p className="courses-count">{filteredCourses.length} utbildningar</p>
          <div className="courses-grid">
            {filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          {filteredCourses.length === 0 && (
            <p className="no-results">Inga utbildningar matchar dina filter.</p>
          )}
        </div>
      </section>
    </div>
  );
}
