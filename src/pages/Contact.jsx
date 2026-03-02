import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Kontakta oss</h1>
          <p>Har du frågor om våra utbildningar? Vi hjälper dig gärna!</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Hör av dig</h2>
            <p>Vi finns här för att svara på dina frågor om utbildningar, ansökan och allt annat du undrar över.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <h3>E-post</h3>
                <a href="mailto:info@peakacademy.se">info@peakacademy.se</a>
              </div>
              <div className="contact-item">
                <h3>Telefon</h3>
                <a href="tel:+46317001000">031-700 10 00</a>
              </div>
              <div className="contact-item">
                <h3>Adress</h3>
                <p>PEAK Academy<br />Industrivägen 10<br />411 04 Göteborg</p>
              </div>
              <div className="contact-item">
                <h3>Öppettider</h3>
                <p>Måndag - Fredag: 08:00 - 17:00<br />Lördag - Söndag: Stängt</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            {submitted ? (
              <div className="form-success">
                <h3>Tack för ditt meddelande!</h3>
                <p>Vi återkommer till dig så snart som möjligt.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h2>Skicka meddelande</h2>
                
                <div className="form-group">
                  <label htmlFor="name">Namn *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">E-post *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Telefon</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Ämne</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="">Välj ämne</option>
                    <option value="utbildning">Fråga om utbildning</option>
                    <option value="ansökan">Hjälp med ansökan</option>
                    <option value="csn">CSN och studiestöd</option>
                    <option value="övrigt">Övrigt</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Meddelande *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Skicka meddelande
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
