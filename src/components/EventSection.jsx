import React from 'react';
import { Calendar, Play, MapPin, Clock, ArrowLeft } from 'lucide-react';

const EventSection = ({
  id,
  title,
  subtitle,
  date,
  day,
  time,
  location = "Mangalam, Prabhakar Road, Sasaram, Bihar",
  bgImage,
  overlayClass,
  icon,
  quote,
  onBack,
  onWatchMoments
}) => {
  return (
    <div className="event-page-view">
      <button 
        className="btn-back-events" 
        onClick={onBack}
        aria-label="Back to Events"
      >
        <ArrowLeft size={18} />
        <span>BACK TO EVENTS</span>
      </button>

      <section className="event-section-fullscreen">
        {/* Groom-focused Background Media */}
        <img 
          src={bgImage} 
          alt={`Groom ${title} Ceremony Background`} 
          className={`event-bg-media ${id === 'vidai' ? 'vidai-bg-media' : ''}`} 
        />

        {/* Dark Gradient Translucent Overlay */}
        <div className={`event-gradient-overlay ${overlayClass}`}></div>

        {/* Foreground Content */}
        <div className="event-content-wrapper">
          <div className="event-info">
            <div className="event-badge">
              <div className="event-badge-icon">
                {icon}
              </div>
            </div>

            <h2 className="event-title-large">{title}</h2>
            <p className="event-tagline">{subtitle}</p>

            <div className="event-date-box">
              <Calendar className="text-gold-solid" size={24} />
              <div>
                <span className="date-day-text">{day}</span>
                <span className="date-number-text">{date}</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '1rem', color: 'rgba(255,248,235,0.9)', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Clock size={18} className="text-gold-main" />
                <span><strong>TIME:</strong> {time}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <MapPin size={18} className="text-gold-main" />
                <span><strong>VENUE:</strong> {location}</span>
              </div>
            </div>

            {quote && (
              <p className="event-quote-vidai">
                "{quote}"
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventSection;
