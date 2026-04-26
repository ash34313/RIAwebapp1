import React from 'react';

const Home = ({ setView }) => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <img 
          src="/assets/hero-banner.webp" 
          alt="Securo WebStore hero banner showing hardened server hardware" 
          className="hero-image"
          style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover' }}
        />
        <h1>Defend Your Digital Life</h1>
        <p>Expert-grade physical hardware for digital forensics and network security.</p>
        
        <div className="status-box">
          <img src="/assets/check-icon.svg" alt="Green checkmark indicating system status" className="status-icon" />
          <span>System Status: Hardened</span>
        </div>

        <button className="btn-primary" onClick={() => setView('products')}>
          Browse Hardware
        </button>
      </header>

      <section className="features-grid">
        <div className="feature-card">
          <img src="/assets/encryption-icon.svg" alt="Encryption icon representing secure transactions" />
          <h3>Secure Logistics</h3>
          <p>Every shipment is tracked and verified through our chain of custody.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;