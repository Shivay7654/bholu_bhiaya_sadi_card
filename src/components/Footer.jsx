import React from 'react';
import { Crown, MapPin, Calendar, Heart } from 'lucide-react';

const Footer = ({ onOpenRsvp }) => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <Crown className="text-gold-solid" size={36} style={{ margin: '0 auto 1rem auto' }} />
        
        <h3 className="footer-logo">R & J</h3>
        <p className="footer-names">Ravi Prakash ♡ Joti Singh</p>
        <p style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--gold-main)', fontSize: '0.9rem', letterSpacing: '2px', margin: '0.4rem 0 1.5rem 0' }}>
          GROOM'S ROYAL WEDDING CELEBRATION
        </p>

        {/* Venue Information Box */}
        <div style={{
          background: 'rgba(20, 3, 5, 0.8)',
          border: '1px solid rgba(212, 175, 55, 0.4)',
          borderRadius: '8px',
          padding: '1.5rem',
          maxWidth: '500px',
          margin: '0 auto 2rem auto',
          textAlign: 'center',
          backdropFilter: 'blur(8px)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--gold-light)' }}>
            <MapPin size={20} className="text-gold-solid" />
            <h4 style={{ fontFamily: 'var(--font-cinzel)', fontSize: '1.1rem', letterSpacing: '1px' }}>WEDDING VENUE</h4>
          </div>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--cream)', fontWeight: '600', marginBottom: '0.4rem' }}>
            Mangalam, Prabhakar Road
          </p>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--gold-light)', letterSpacing: '1px', marginBottom: '1rem' }}>
            Sasaram, Bihar
          </p>
          
          <a 
            href="https://maps.google.com/?q=Mangalam+Prabhakar+Road+Sasaram+Bihar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="event-card-btn"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', border: '1px solid var(--gold-main)', padding: '0.4rem 1.2rem', borderRadius: '50px' }}
          >
            <MapPin size={14} /> GET DIRECTIONS
          </a>
        </div>
        
        <div style={{ margin: '1.5rem 0' }}>
          <button onClick={onOpenRsvp} className="btn-explore">
            CONFIRM RSVP / SEND BLESSINGS ✨
          </button>
        </div>

        <p className="footer-hashtags">
          #RaviWedsJoti &nbsp;•&nbsp; #RaviJoti2026 &nbsp;•&nbsp; #SasaramWedding
        </p>

        <p className="footer-copy">
          Designed with Royal Indian Elegance for Ravi Prakash & Joti Singh Wedding.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
