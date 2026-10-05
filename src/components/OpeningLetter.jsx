import React from 'react';
import { ChevronDown, Heart } from 'lucide-react';

const OpeningLetter = ({ onNavigate }) => {
  const petals = Array.from({ length: 12 });

  return (
    <section id="opening" className="hero-section">
      <div className="hero-overlay"></div>

      {/* Floating Rose Petals */}
      {petals.map((_, i) => (
        <div 
          key={i} 
          className="petal"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${12 + Math.random() * 12}px`,
            height: `${14 + Math.random() * 14}px`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${10 + Math.random() * 8}s`
          }}
        />
      ))}

      <div className="hero-content">
        {/* Left Side Royal Couple Portrait Frame & Tagline */}
        <div className="hero-tagline-left">
          <div className="couple-portrait-frame">
            <img 
              src="/images/couple_portrait.png" 
              alt="Ravi Prakash & Joti Singh" 
              className="couple-portrait-img" 
            />
            <div className="portrait-gold-border"></div>
          </div>
          <h2 className="hero-tagline-text">
            - A New Chapter Begins... -
          </h2>
          <div className="hero-tagline-divider"></div>
        </div>

        {/* Parchment Wedding Invitation Card */}
        <div className="invitation-card-wrapper">
          {/* Wax Seal with Tassel */}
          <div className="wax-seal">
            <div className="wax-seal-inner">R & J</div>
          </div>
          <div className="wax-tassel"></div>

          <div className="invitation-card">
            {/* Filigree Corner Motifs */}
            <div className="card-corner corner-tl"></div>
            <div className="card-corner corner-tr"></div>
            <div className="card-corner corner-bl"></div>
            <div className="card-corner corner-br"></div>

            <p className="card-subtitle-top">YOU'RE</p>
            <h1 className="card-script-header">Invited</h1>
            <p className="card-subtitle-top" style={{ marginTop: '0.5rem' }}>
              TO THE WEDDING CELEBRATIONS OF
            </p>

            <h2 className="card-names">
              <span>Ravi Prakash</span>
              <Heart className="card-heart" fill="#9c1524" />
              <span>Joti Singh</span>
            </h2>

            <div className="card-flourish"></div>

            <p className="card-quote">
              "Two families... One beautiful journey..."
            </p>
            
            <p className="card-message">
              Join us as we celebrate love, tradition and togetherness.
            </p>

            <button 
              onClick={onNavigate} 
              className="btn-explore"
            >
              EXPLORE OUR STORY ↓
            </button>
          </div>
        </div>
      </div>

      {/* Circular Down-Arrow Scroll Indicator */}
      <button 
        onClick={onNavigate} 
        className="scroll-down-btn" 
        aria-label="Scroll to Palace Welcome"
      >
        <ChevronDown size={24} />
      </button>
    </section>
  );
};

export default OpeningLetter;
