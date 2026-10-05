import React, { useState } from 'react';
import { X, Heart, CheckCircle2, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';

const RSVPModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '1',
    events: ['Tilak', 'Haldi', 'Mehandi', 'Barat', 'Vidai'],
    wishes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#d4af37', '#fbeabb', '#96741b', '#800a18']
    });
  };

  return (
    <div className="video-modal-backdrop" onClick={onClose}>
      <div 
        className="video-modal-container" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '600px', background: '#250508', border: '2px solid #d4af37' }}
      >
        <button className="video-modal-close" onClick={onClose} aria-label="Close RSVP">
          <X size={20} />
        </button>

        <div style={{ padding: '2.5rem 2rem', textAlign: 'center' }}>
          {!submitted ? (
            <>
              <Heart className="text-gold-solid" size={36} style={{ margin: '0 auto 0.8rem auto' }} />
              <h2 style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--gold-light)', fontSize: '1.8rem', letterSpacing: '2px', marginBottom: '0.2rem' }}>
                RSVP FOR GROOM'S WEDDING
              </h2>
              <p style={{ fontFamily: 'var(--font-serif)', color: 'rgba(255,248,235,0.85)', fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '0.6rem' }}>
                Ravi Prakash ♡ Joti Singh
              </p>

              {/* Venue Tag */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', color: 'var(--gold-main)', fontSize: '0.82rem', marginBottom: '1.5rem', fontFamily: 'var(--font-sans)' }}>
                <MapPin size={14} />
                <span>Mangalam, Prabhakar Road, Sasaram, Bihar</span>
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', textAlign: 'left' }}>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.75rem', letterSpacing: '1.5px', color: 'var(--gold-main)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    Your Full Name *
                  </label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Bholu Bhaiya & Family"
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      background: 'rgba(20, 3, 5, 0.7)',
                      border: '1px solid rgba(212, 175, 55, 0.4)',
                      borderRadius: '4px',
                      color: '#fff',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.75rem', letterSpacing: '1.5px', color: 'var(--gold-main)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                      Phone / Whatsapp *
                    </label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 9876543210"
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        background: 'rgba(20, 3, 5, 0.7)',
                        border: '1px solid rgba(212, 175, 55, 0.4)',
                        borderRadius: '4px',
                        color: '#fff',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.75rem', letterSpacing: '1.5px', color: 'var(--gold-main)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                      Number of Guests
                    </label>
                    <select 
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        background: 'rgba(20, 3, 5, 0.7)',
                        border: '1px solid rgba(212, 175, 55, 0.4)',
                        borderRadius: '4px',
                        color: '#fff',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9rem'
                      }}
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Persons</option>
                      <option value="3">3 Persons</option>
                      <option value="4+">4+ Family Members</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.75rem', letterSpacing: '1.5px', color: 'var(--gold-main)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    Warm Blessings & Wishes
                  </label>
                  <textarea 
                    rows="3"
                    value={formData.wishes}
                    onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
                    placeholder="Send your heartfelt wishes to Ravi Prakash..."
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      background: 'rgba(20, 3, 5, 0.7)',
                      border: '1px solid rgba(212, 175, 55, 0.4)',
                      borderRadius: '4px',
                      color: '#fff',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>

                <button 
                  type="submit"
                  className="btn-explore"
                  style={{ marginTop: '0.8rem', width: '100%', justifyContent: 'center' }}
                >
                  CONFIRM ATTENDANCE ✨
                </button>
              </form>
            </>
          ) : (
            <div style={{ padding: '2rem 1rem' }}>
              <CheckCircle2 className="text-gold-solid" size={60} style={{ margin: '0 auto 1.2rem auto' }} />
              <h2 style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--gold-light)', fontSize: '1.8rem', marginBottom: '0.5rem' }}>
                RSVP RECEIVED WITH GRATITUDE!
              </h2>
              <p style={{ fontFamily: 'var(--font-serif)', color: 'var(--cream)', fontSize: '1.2rem', marginBottom: '0.4rem' }}>
                Thank you {formData.name}!
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--gold-light)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                We look forward to welcoming you at Mangalam, Prabhakar Road, Sasaram, Bihar.
              </p>
              <button 
                onClick={onClose}
                className="btn-explore"
                style={{ padding: '0.75rem 2rem' }}
              >
                CLOSE
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RSVPModal;
