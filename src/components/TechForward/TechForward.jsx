import './TechForward.css';

const imgLogo = "https://www.figma.com/api/mcp/asset/74d47290-0866-47b9-b77c-664285fb8a3e";
const imgTfLogo = "https://www.figma.com/api/mcp/asset/cd6f0c4c-df44-4448-b563-9f1953e691cd";
const imgTfCircles = "https://www.figma.com/api/mcp/asset/0badb199-4b4f-4e76-a89a-43b9f68a926b";
const imgFooterLogo = "https://www.figma.com/api/mcp/asset/4e6e701d-495b-4784-86da-7c3720634d05";
const imgTeknikforetagen = "https://www.figma.com/api/mcp/asset/56cf73d2-7124-4f79-a1ba-df643f30971a";
const imgSpeaker1 = "https://www.figma.com/api/mcp/asset/195dc8d7-9ad4-4bb5-bfb7-b175822a37c2";
const imgSpeaker2 = "https://www.figma.com/api/mcp/asset/6c59cdc3-6b6f-4d54-861b-42543da551f7";
const imgSpeaker3 = "https://www.figma.com/api/mcp/asset/6996da97-89a9-416d-9b0c-ee3a92f73e1a";
const imgSpeaker4 = "https://www.figma.com/api/mcp/asset/8061a04f-4b2b-4c3a-8a85-1fcd30685171";
const imgTestimonial1 = "https://www.figma.com/api/mcp/asset/631b9fad-dbc6-46f4-a9da-16dbe397e0cd";
const imgTestimonial2 = "https://www.figma.com/api/mcp/asset/8578b69f-225f-42d6-8cfa-f30b3066c4ec";

function Navigation() {
  return (
    <nav className="nav">
      <img src={imgLogo} alt="Tech Forward" className="nav-logo" />
      <div className="nav-initiative">
        <span>An initiative by</span>
        <img src={imgTeknikforetagen} alt="Teknikföretagen" />
      </div>
      <div className="nav-links">
        <a href="#about">This is Tech Forward</a>
        <a href="#events">Events</a>
        <a href="#initiative">About the initiative</a>
        <a href="#join" className="btn-join">JOIN</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>New connections, new perspectives</h1>
        <p>A short description of the offer that explains the content, mission and the over all feeling of the concept goes here.</p>
        <button className="btn-primary">JOIN THE COMMUNITY</button>
      </div>
      <div className="hero-visual">
        <img src={imgTfCircles} alt="Tech Forward Visual" />
      </div>
    </section>
  );
}

function Spotlight() {
  return (
    <section className="spotlight">
      <h2 className="section-title">Spotlight</h2>
      <div className="spotlight-card">
        <div>
          <div style={{ display: 'flex', alignItems: 'baseline' }}>
            <span className="spotlight-date">20-21</span>
            <span className="spotlight-month">FEB</span>
          </div>
          <div style={{ marginTop: '24px' }}>
            <div className="info-row">
              <span className="info-badge">Video</span>
              <span className="info-text">• Open roundtable • Techarenan 2025</span>
            </div>
            <h2 className="spotlight-content">Apply for our open roundtables at Techarenan 2025</h2>
            <p className="spotlight-content">Watch our roundtables at Tech Arena 2025, or apply for one of the open seats to join the experts around the table.</p>
          </div>
        </div>
        <div className="speakers">
          <div className="speaker">
            <img src={imgSpeaker1} alt="Sanna Marin" />
            <p className="speaker-name">Sanna Marin</p>
            <p className="speaker-company">Volvo</p>
          </div>
          <div className="speaker">
            <img src={imgSpeaker2} alt="Sanna Marin" />
            <p className="speaker-name">Sanna Marin</p>
            <p className="speaker-company">Volvo</p>
          </div>
          <div className="speaker">
            <img src={imgSpeaker3} alt="Sanna Marin" />
            <p className="speaker-name">Sanna Marin</p>
            <p className="speaker-company">Volvo</p>
          </div>
          <div className="speaker">
            <img src={imgSpeaker4} alt="Sanna Marin" />
            <p className="speaker-name">Sanna Marin</p>
            <p className="speaker-company">Volvo</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Events() {
  const events = [
    {
      date: '15',
      month: 'APR',
      title: 'Battery Tech Challenges',
      description: 'Researchers are exploring new ways that quantum computers.',
      type: 'Video',
      meta: '• Open roundtable • Techarenan 2025'
    },
    {
      date: '03',
      month: 'MAY',
      title: 'The Incredible Power of Quantum Memory',
      description: 'Researchers are exploring new ways that quantum computers will be able to reveal the secrets of complex quantum systems.',
      type: 'Video',
      meta: '• Open roundtable • Techarenan 2025'
    },
    {
      date: 'TBD',
      month: '',
      title: 'Data and Device Security',
      description: 'Researchers are exploring new ways that quantum computers will be able to reveal the secrets of complex quantum systems.',
      type: 'Video',
      meta: '• Open roundtable • Techarenan 2025',
      muted: true
    }
  ];

  return (
    <section className="events" id="events">
      <h2 className="section-title">Upcoming events</h2>
      <div className="events-list">
        {events.map((event, index) => (
          <div key={index} className="event-item">
            <div>
              <span className="event-date" style={event.muted ? { color: '#3f2c60' } : {}}>{event.date}</span>
              {event.month && <span className="event-date-month">{event.month}</span>}
            </div>
            <div className="event-content">
              <div className="event-info-row">
                <span className="event-badge">{event.type}</span>
                <span className="event-meta">{event.meta}</span>
              </div>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
      <a href="#all-events" className="all-events">All events →</a>
    </section>
  );
}

function About() {
  return (
    <section className="about" id="about">
      <img src={imgTfLogo} alt="Tech Forward" className="about-logo" />
      <p className="about-text">
        Tech Forward is an initiative by Teknikföretagen to increase knowledge sharing and new connections in the tech industry.
      </p>
      <p className="about-focus">We focus on the most challenging topics in</p>
      <div className="focus-tags">
        <span className="focus-tag">Innovation</span>
        <span className="focus-tag">Sustainability</span>
        <span className="focus-and">and</span>
        <span className="focus-tag">Digitalization</span>
      </div>
    </section>
  );
}

function Program() {
  const items = [
    {
      title: 'Industry Panels',
      description: 'Listen in and interact with the expert panel on the daunting discussions we need to take on the most challenging and topics right now.'
    },
    {
      title: 'Open roundtables',
      description: 'Take a seat at the table with your industry peers to discuss perspectives on your shared most critical challenges. Share your perspectives with the community through the live stream.'
    },
    {
      title: 'Expert keynotes',
      description: 'Listen in and interact with leading industry experts sharing the latest knowledge, research and perspectives on the most critical topics.'
    }
  ];

  return (
    <section className="program">
      <p className="program-intro">
        We arrange a dynamic program of interactive digital events, at techforward.se and at key industry summits
      </p>
      <div className="program-items">
        {items.map((item, index) => (
          <div key={index} className="program-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Focus() {
  const items = [
    { title: 'Knowledge at the center', description: 'Lorem ipsum odor amet, cons adipiscing elit. Nul lam susp endisse facilisis odio.' },
    { title: 'Connecting industry peers', description: 'Lorem ipsum odor amet, cons adipiscing elit. Nul lam susp endisse facilisis odio.' },
    { title: 'Swedish tech and beyond', description: 'Lorem ipsum odor amet, cons adipiscing elit. Nul lam susp endisse facilisis odio.' }
  ];

  return (
    <section className="focus">
      <h2 className="section-title">Our focus</h2>
      <div className="focus-grid">
        {items.map((item, index) => (
          <div key={index} className="focus-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="mission">
      <div className="mission-content">
        <div className="mission-dot top-left"></div>
        <div className="mission-dot top-right"></div>
        <div className="mission-dot bottom-left"></div>
        <div className="mission-dot bottom-right"></div>
        <p className="mission-quote">
          Our mission is to increase the knowledge sharing in the tech industry to create meaningful change and a strong industry.
        </p>
        <a href="#learn-more" className="mission-link">Learn more →</a>
      </div>
    </section>
  );
}

function Join() {
  return (
    <section className="join" id="join">
      <h2>Join us</h2>
      <div className="join-text">
        <p>Membership is open to anyone interested in shaping a positive, world-class future for the tech industry. Welcome!</p>
        <p><strong>The membership is free</strong></p>
      </div>
      <button className="btn-join">
        JOIN THE COMMUNITY
        <span>→</span>
      </button>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote: '"In my opinion the single most important factor in the Swedish innovation system is that large companies talk to each other and learn best practices on how to best collaborate with startups and SMEs"',
      author: 'Karoly Szipka, CEO and Founder - IPercept',
      image: imgTestimonial1
    },
    {
      quote: '"We have a unique chance to work better together. Let\'s lean in and connect on the most challenging questions"',
      author: 'Pia Sandvik, CEO Teknikföretagen',
      image: imgTestimonial2,
      reverse: true
    },
    {
      quote: '"In my opinion the single most important factor in the Swedish innovation system is that large companies talk to each"',
      author: 'Karoly Szipka, CEO and Founder - IPercept',
      image: imgTestimonial1
    }
  ];

  return (
    <section className="testimonials">
      {testimonials.map((item, index) => (
        <div key={index} className={`testimonial ${item.reverse ? 'reverse' : ''}`}>
          <img src={item.image} alt={item.author} className="testimonial-image" />
          <div className="testimonial-content">
            <p className="testimonial-quote">{item.quote}</p>
            <p className="testimonial-author">{item.author}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <img src={imgFooterLogo} alt="Tech Forward" className="footer-logo" />
        <p className="footer-text">
          Tech Forward is an initiative by Teknikföretagen to increase knowledge sharing and innovation in the Swedish tech industry.
        </p>
        <p className="footer-contact">Got ideas? You are more than welcome to contact us!</p>
        <a href="mailto:hello@techforward.se" className="footer-email">hello@techforward.se</a>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#cookies">Cookies</a>
        </div>
      </div>
      <div></div>
      <nav className="footer-nav">
        <a href="#home">Home</a>
        <a href="#about">This is Tech Forward</a>
        <a href="#events">Events</a>
        <a href="#initiative">About the initiative</a>
        <a href="#join">Join</a>
      </nav>
    </footer>
  );
}

export default function TechForward() {
  return (
    <div className="tech-forward">
      <Navigation />
      <Hero />
      <Spotlight />
      <Events />
      <About />
      <Program />
      <Focus />
      <Mission />
      <Join />
      <Testimonials />
      <Footer />
    </div>
  );
}
