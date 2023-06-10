import React from 'react';

const App = () => {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero" style={{
        backgroundImage: "url('path/to/hero-image.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
      }}>
        <div className="hero-content">
          <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
            Welcome to ChoiseMind
          </h1>
          <p className="hero-subtitle" style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
            Empowering Minds, Inspiring Innovations
          </p>
          <button className="cta-button" style={{
            padding: '1rem 2rem',
            fontSize: '1.2rem',
            borderRadius: '4px',
            backgroundColor: '#FF3366',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}>
            Get Started
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="about" style={{ backgroundColor: '#f5f5f5', padding: '4rem 0' }}>
        <div className="about-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>About Us</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p style={{ fontSize: '1.2rem' }}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>

      {/* Rest of the sections */}
      {/* ... */}
    </div>
  );
};

export default App;
