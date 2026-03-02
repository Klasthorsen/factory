import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';
import './Apply.css';

export default function Apply() {
  const { id } = useParams();
  const course = id ? courses.find(c => c.id === id) : null;
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    personalNumber: '',
    address: '',
    postalCode: '',
    city: '',
    education: '',
    experience: '',
    motivation: '',
    selectedCourse: id || '',
    consent: false
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      console.log('Application submitted:', formData);
      setStep(4);
    }
  };

  const openCourses = courses.filter(c => c.isOpen);

  if (step === 4) {
    return (
      <div className="apply-page">
        <section className="apply-success">
          <div className="success-content">
            <div className="success-icon">✓</div>
            <h1>Tack för din ansökan!</h1>
            <p>Vi har tagit emot din ansökan och återkommer inom 5 arbetsdagar.</p>
            <p>En bekräftelse har skickats till {formData.email}</p>
            <Link to="/" className="btn btn-primary">Tillbaka till startsidan</Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="apply-page">
      <section className="apply-hero">
        <div className="apply-hero-content">
          <h1>Ansök till utbildning</h1>
          <p>{course ? `Du ansöker till: ${course.title}` : 'Välj utbildning och skicka in din ansökan'}</p>
        </div>
      </section>

      <section className="apply-content">
        <div className="apply-container">
          <div className="apply-progress">
            <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>
              <span className="step-number">1</span>
              <span className="step-label">Välj utbildning</span>
            </div>
            <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>
              <span className="step-number">2</span>
              <span className="step-label">Personuppgifter</span>
            </div>
            <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>
              <span className="step-number">3</span>
              <span className="step-label">Bakgrund & Motivation</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="apply-form">
            {step === 1 && (
              <div className="form-step">
                <h2>Välj utbildning</h2>
                <p className="step-description">Välj den utbildning du vill ansöka till.</p>
                
                <div className="course-selection">
                  {openCourses.map(c => (
                    <label key={c.id} className={`course-option ${formData.selectedCourse === c.id ? 'selected' : ''}`}>
                      <input
                        type="radio"
                        name="selectedCourse"
                        value={c.id}
                        checked={formData.selectedCourse === c.id}
                        onChange={handleChange}
                        required
                      />
                      <div className="course-option-content">
                        <h4>{c.title}</h4>
                        <p>{c.location} • {c.duration} • {c.pace}</p>
                        <p className="course-start">Start: {c.startDate}</p>
                      </div>
                    </label>
                  ))}
                </div>

                {openCourses.length === 0 && (
                  <p className="no-courses">Det finns inga utbildningar med öppen ansökan just nu.</p>
                )}
              </div>
            )}

            {step === 2 && (
              <div className="form-step">
                <h2>Personuppgifter</h2>
                <p className="step-description">Fyll i dina kontaktuppgifter.</p>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Förnamn *</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Efternamn *</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                  </div>
                </div>

                <div className="form-group">
                  <label>Personnummer *</label>
                  <input type="text" name="personalNumber" value={formData.personalNumber} onChange={handleChange} placeholder="ÅÅÅÅMMDD-XXXX" required />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>E-post *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Telefon *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                  </div>
                </div>

                <div className="form-group">
                  <label>Adress *</label>
                  <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Postnummer *</label>
                    <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Ort *</label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} required />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="form-step">
                <h2>Bakgrund & Motivation</h2>
                <p className="step-description">Berätta om din bakgrund och varför du vill gå utbildningen.</p>
                
                <div className="form-group">
                  <label>Utbildningsbakgrund *</label>
                  <textarea name="education" value={formData.education} onChange={handleChange} rows="4" placeholder="Beskriv din tidigare utbildning (gymnasium, högskola, kurser etc.)" required />
                </div>

                <div className="form-group">
                  <label>Arbetslivserfarenhet</label>
                  <textarea name="experience" value={formData.experience} onChange={handleChange} rows="4" placeholder="Beskriv relevant arbetslivserfarenhet" />
                </div>

                <div className="form-group">
                  <label>Motivation *</label>
                  <textarea name="motivation" value={formData.motivation} onChange={handleChange} rows="4" placeholder="Varför vill du gå denna utbildning? Vad vill du uppnå?" required />
                </div>

                <div className="form-group checkbox-group">
                  <label>
                    <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} required />
                    <span>Jag godkänner att PEAK Academy sparar och behandlar mina personuppgifter i enlighet med GDPR. *</span>
                  </label>
                </div>
              </div>
            )}

            <div className="form-actions">
              {step > 1 && (
                <button type="button" className="btn btn-outline" onClick={() => setStep(step - 1)}>
                  Tillbaka
                </button>
              )}
              <button type="submit" className="btn btn-primary" disabled={step === 1 && !formData.selectedCourse}>
                {step < 3 ? 'Fortsätt' : 'Skicka ansökan'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
