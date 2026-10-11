import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Crown } from 'lucide-react';

const Navbar = ({ isMuted, toggleMusic, onOpenRsvp, onNavigateView, activeView }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (targetView, sealText) => {
    setMobileMenuOpen(false);
    onNavigateView(targetView, sealText);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <button onClick={() => handleNavClick('page1', 'RAVI PRAKASH ♡ JYOTI SINGH')} className="nav-brand" style={{ background: 'none', border: 'none' }}>
        <Crown className="nav-logo-icon text-gold-solid" />
        <span className="nav-logo-text">R & J</span>
      </button>

      <ul className="nav-links">
        <li><button onClick={() => handleNavClick('page1', 'RAVI PRAKASH ♡ JYOTI SINGH')} className={`nav-link ${activeView === 'page1' ? 'active' : ''}`}>Home</button></li>
        <li><button onClick={() => handleNavClick('page2', 'PALACE WELCOME')} className={`nav-link ${activeView === 'page2' ? 'active' : ''}`}>Welcome</button></li>
        <li><button onClick={() => handleNavClick('page3', 'CELEBRATE EVERY MOMENT')} className={`nav-link ${activeView === 'page3' ? 'active' : ''}`}>All Events</button></li>
        <li><button onClick={() => handleNavClick('tilak', 'TILAK CEREMONY')} className={`nav-link ${activeView === 'tilak' ? 'active' : ''}`}>Tilak</button></li>
        <li><button onClick={() => handleNavClick('haldi', 'HALDI CEREMONY')} className={`nav-link ${activeView === 'haldi' ? 'active' : ''}`}>Haldi</button></li>
        <li><button onClick={() => handleNavClick('mehandi', 'MEHANDI CEREMONY')} className={`nav-link ${activeView === 'mehandi' ? 'active' : ''}`}>Mehandi</button></li>
        <li><button onClick={() => handleNavClick('barat', 'BARAT PROCESSION')} className={`nav-link ${activeView === 'barat' ? 'active' : ''}`}>Barat</button></li>
        <li><button onClick={() => handleNavClick('vidai', 'VIDAI CEREMONY')} className={`nav-link ${activeView === 'vidai' ? 'active' : ''}`}>Vidai</button></li>
        <li><button onClick={onOpenRsvp} className="nav-link">RSVP</button></li>
      </ul>

      <div className="nav-actions">
        <button 
          className="music-btn" 
          onClick={toggleMusic}
          title={isMuted ? "Unmute Background Music" : "Mute Background Music"}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} className="text-gold-light" />}
        </button>

        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '64px',
          left: 0,
          width: '100%',
          maxHeight: 'calc(100vh - 64px)',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          background: 'rgba(22, 3, 5, 0.98)',
          backdropFilter: 'blur(16px)',
          borderBottom: '2px solid rgba(212, 175, 55, 0.4)',
          padding: '1.5rem 1.2rem 2.5rem 1.2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          alignItems: 'center',
          zIndex: 999,
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.8)'
        }}>
          <button onClick={() => handleNavClick('page1', 'RAVI PRAKASH ♡ JYOTI SINGH')} className="nav-link" style={{ fontSize: '0.95rem', padding: '0.6rem 1rem' }}>Home</button>
          <button onClick={() => handleNavClick('page2', 'PALACE WELCOME')} className="nav-link" style={{ fontSize: '0.95rem', padding: '0.6rem 1rem' }}>Welcome</button>
          <button onClick={() => handleNavClick('page3', 'CELEBRATE EVERY MOMENT')} className="nav-link" style={{ fontSize: '0.95rem', padding: '0.6rem 1rem' }}>All Events</button>
          <button onClick={() => handleNavClick('tilak', 'TILAK CEREMONY')} className="nav-link" style={{ fontSize: '0.95rem', padding: '0.6rem 1rem' }}>Tilak</button>
          <button onClick={() => handleNavClick('haldi', 'HALDI CEREMONY')} className="nav-link" style={{ fontSize: '0.95rem', padding: '0.6rem 1rem' }}>Haldi</button>
          <button onClick={() => handleNavClick('mehandi', 'MEHANDI CEREMONY')} className="nav-link" style={{ fontSize: '0.95rem', padding: '0.6rem 1rem' }}>Mehandi</button>
          <button onClick={() => handleNavClick('barat', 'BARAT PROCESSION')} className="nav-link" style={{ fontSize: '0.95rem', padding: '0.6rem 1rem' }}>Barat</button>
          <button onClick={() => handleNavClick('vidai', 'VIDAI CEREMONY')} className="nav-link" style={{ fontSize: '0.95rem', padding: '0.6rem 1rem' }}>Vidai</button>
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenRsvp(); }}
            className="btn-explore"
            style={{ marginTop: '0.5rem', width: '100%', maxWidth: '300px', justifyContent: 'center', padding: '0.75rem' }}
          >
            CONFIRM RSVP ✨
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
