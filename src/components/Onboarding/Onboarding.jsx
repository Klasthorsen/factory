import { useState } from 'react';
import './Onboarding.css';

const VENUE_TAGS = [
  { id: 'specific-theme', label: 'Specific theme' },
  { id: 'irish', label: 'Irish' },
  { id: 'english', label: 'English' },
  { id: 'soccer-focused', label: 'Soccer-focused' },
  { id: 'all-day-service', label: 'All day service' },
  { id: 'family-friendly', label: 'Family friendly' },
  { id: 'serve-brunch', label: 'Serve brunch' },
  { id: 'live-sports', label: 'Live sports' },
  { id: 'nightclub', label: 'Nightclub' },
  { id: 'dinner-guests', label: 'Dinner guests' },
];

const SAMPLE_TEAMS = [
  { id: 'ny-rangers', name: 'NY Rangers', logo: 'https://www.figma.com/api/mcp/asset/fef8dbd0-9749-4275-9a6c-d60105836d0d' },
];

const GENERATED_PROFILE = {
  logo: 'https://www.figma.com/api/mcp/asset/5c1f9f4d-ee9c-4f48-a425-6f2370187814',
  colors: ['#fda944', '#07486a', '#c50101', '#fffef6', '#0e0d11'],
  fonts: { primary: 'Alfa Slab One', secondary: 'Arial Medium' },
  style: 'A energetic and exciting sports-themed bar with a classic american feel, with sturdy typography and classic palette.',
};

function WelcomeScreen({ onNext }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="onboarding-screen welcome-screen">
      <div className="screen-content">
        <h1>Login</h1>
        <div className="input-group">
          <input
            type="email"
            className="input-field"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="input-field"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="button-group">
        <button className="btn btn-secondary" style={{ background: 'white' }}>
          Don't have an account?
        </button>
        <button className="btn btn-secondary" style={{ background: 'white' }} onClick={onNext}>
          Help
        </button>
      </div>
    </div>
  );
}

function DefineVenueScreen({ onNext }) {
  const [selectedTags, setSelectedTags] = useState(['irish', 'soccer-focused', 'all-day-service', 'family-friendly', 'live-sports']);

  const toggleTag = (tagId) => {
    setSelectedTags((prev) =>
      prev.includes(tagId) ? prev.filter((id) => id !== tagId) : [...prev, tagId]
    );
  };

  return (
    <div className="onboarding-screen default-screen">
      <div className="screen-header">
        <h1>Choose the tags that matches your venue</h1>
        <p>This will help us create content that matches your venue</p>
      </div>

      <div className="tags-container">
        {VENUE_TAGS.map((tag) => (
          <button
            key={tag.id}
            className={`tag-button ${selectedTags.includes(tag.id) ? 'selected' : ''}`}
            onClick={() => toggleTag(tag.id)}
          >
            {tag.label}
          </button>
        ))}
        <button className="tag-button add-button">
          <PlusIcon />
          Add something else
        </button>
      </div>

      <div className="button-container">
        <button className="btn btn-primary" onClick={onNext}>
          Continue
        </button>
      </div>
    </div>
  );
}

function TeamsScreen({ onNext, onBack }) {
  const [teams] = useState(SAMPLE_TEAMS);

  return (
    <div className="onboarding-screen default-screen">
      <div className="screen-header">
        <h1>Do you follow specific teams?</h1>
        <p>This will help us show more relevant stats from the teams you follow</p>
      </div>

      <div className="teams-container">
        {teams.map((team) => (
          <div key={team.id} className="team-card">
            <img src={team.logo} alt={team.name} />
            <span>{team.name}</span>
          </div>
        ))}
        <div className="team-card">
          <div className="add-icon">
            <PlusSquareIcon />
          </div>
          <span className="secondary">Add more</span>
        </div>
      </div>

      <div className="button-container">
        <button className="btn btn-primary" onClick={onNext}>
          Continue
        </button>
        <button className="btn btn-text" onClick={onBack}>
          Skip
        </button>
      </div>
    </div>
  );
}

function BrandProfileScreen({ onNext, onBack }) {
  return (
    <div className="onboarding-screen default-screen">
      <div className="screen-header">
        <h1>Create a brand profile</h1>
        <p>
          Upload your logo or connect your account and we'll create visual brand
          profile that will affect what the content on your screen looks like.
        </p>
      </div>

      <div className="brand-options">
        <div className="brand-option" onClick={onNext}>
          <div className="icon-circle">
            <UploadCloudIcon />
          </div>
          <p>Upload a logo or visual representing your brand</p>
        </div>

        <div className="brand-option" onClick={onNext}>
          <div className="icon-circle small">
            <LinkIcon />
          </div>
          <p>Fetch from venue website</p>
        </div>

        <div className="brand-option" onClick={onNext}>
          <div className="icon-circle small">
            <InstagramIcon />
          </div>
          <p>Connect your instagram account</p>
        </div>
      </div>

      <div className="manual-link">
        <a href="#manual">Manually add colors and fonts</a>
      </div>

      <div className="button-container">
        <button className="btn btn-primary" onClick={onNext}>
          Continue
        </button>
        <button className="btn btn-text" onClick={onBack}>
          Skip
        </button>
      </div>
    </div>
  );
}

function GeneratedProfileScreen({ onNext, onBack }) {
  return (
    <div className="onboarding-screen default-screen">
      <div className="screen-header">
        <h1>Your visual profile</h1>
        <p>
          Upload your logo or connect your account and we'll create visual brand
          profile that will affect what the content on your screen looks like.
        </p>
      </div>

      <div className="profile-card">
        <div className="logo">
          <img src={GENERATED_PROFILE.logo} alt="Brand Logo" />
        </div>

        <div className="profile-section">
          <div className="section-header">
            <span>Color palette</span>
            <a href="#edit">Edit</a>
          </div>
          <div className="color-palette">
            {GENERATED_PROFILE.colors.map((color, index) => (
              <div key={index} className="color" style={{ backgroundColor: color }} />
            ))}
          </div>
        </div>

        <div className="profile-section">
          <div className="section-header">
            <span>Fonts</span>
            <a href="#edit">Edit</a>
          </div>
          <div className="fonts-display">
            <span className="font-primary">{GENERATED_PROFILE.fonts.primary}</span>
            <span className="font-secondary">{GENERATED_PROFILE.fonts.secondary}</span>
          </div>
        </div>

        <div className="profile-section">
          <div className="section-header">
            <span>Style</span>
          </div>
          <p className="style-description">{GENERATED_PROFILE.style}</p>
        </div>
      </div>

      <div className="button-container">
        <button className="btn btn-primary" onClick={onNext}>
          Continue
        </button>
        <button className="btn btn-text" onClick={onBack}>
          Skip
        </button>
      </div>
    </div>
  );
}

function CompleteScreen() {
  return (
    <div className="onboarding-screen default-screen" style={{ justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ color: 'var(--brand-primary)', marginBottom: '16px' }}>All done!</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '16px' }}>
          Your venue profile is ready. Let's create some amazing content!
        </p>
        <button className="btn btn-primary" style={{ marginTop: '32px' }}>
          Get Started
        </button>
      </div>
    </div>
  );
}

// Icons
function PlusIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function PlusSquareIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );
}

function UploadCloudIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2">
      <polyline points="16 16 12 12 8 16" />
      <line x1="12" y1="12" x2="12" y2="21" />
      <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(0);

  const screens = [
    { component: WelcomeScreen, name: 'welcome' },
    { component: DefineVenueScreen, name: 'venue' },
    { component: TeamsScreen, name: 'teams' },
    { component: BrandProfileScreen, name: 'brand' },
    { component: GeneratedProfileScreen, name: 'profile' },
    { component: CompleteScreen, name: 'complete' },
  ];

  const handleNext = () => {
    if (currentStep < screens.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const CurrentScreen = screens[currentStep].component;

  return (
    <div className="onboarding-container">
      {currentStep > 0 && currentStep < screens.length - 1 && (
        <div className="progress-indicator">
          {screens.slice(1, -1).map((_, index) => (
            <div
              key={index}
              className={`progress-dot ${index <= currentStep - 1 ? 'active' : ''}`}
            />
          ))}
        </div>
      )}
      <CurrentScreen onNext={handleNext} onBack={handleBack} />
    </div>
  );
}
