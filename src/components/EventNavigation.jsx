import React from 'react';
import { ArrowRight } from 'lucide-react';

export const TilakIcon = () => (
  <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 8L36 18H28L32 8Z" fill="currentColor"/>
    <ellipse cx="32" cy="22" rx="6" ry="4" fill="currentColor"/>
    <path d="M22 28C22 24 42 24 42 28L44 48C44 54 20 54 20 48L22 28Z" stroke="currentColor" strokeWidth="3" fill="none"/>
    <path d="M16 48C16 56 48 56 48 48" stroke="currentColor" strokeWidth="3"/>
    <circle cx="32" cy="36" r="3" fill="currentColor"/>
  </svg>
);

export const HaldiIcon = () => (
  <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 28C12 28 20 20 32 20C44 20 52 28 52 28L48 48C48 52 16 52 16 48L12 28Z" stroke="currentColor" strokeWidth="3" fill="none"/>
    <ellipse cx="32" cy="24" rx="18" ry="6" fill="currentColor" opacity="0.3"/>
    <circle cx="28" cy="24" r="2" fill="currentColor"/>
    <circle cx="36" cy="23" r="2" fill="currentColor"/>
    <path d="M8 28H56" stroke="currentColor" strokeWidth="3"/>
    <path d="M24 52V58M40 52V58" stroke="currentColor" strokeWidth="3"/>
  </svg>
);

export const MehandiIcon = () => (
  <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 48V28C22 26 24 24 26 24C28 24 30 26 30 28V16C30 14 32 12 34 12C36 12 38 14 38 16V20C38 18 40 16 42 16C44 16 46 18 46 20V24C46 22 48 20 50 20C52 20 54 22 54 24V40C54 50 44 58 32 58C22 58 14 50 14 40V34" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="34" cy="36" r="4" stroke="currentColor" strokeWidth="2"/>
    <path d="M30 46L38 46" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const BaratIcon = () => (
  <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="32" cy="32" rx="14" ry="20" stroke="currentColor" strokeWidth="3" transform="rotate(-60 32 32)"/>
    <line x1="16" y1="16" x2="48" y2="48" stroke="currentColor" strokeWidth="2"/>
    <line x1="18" y1="46" x2="46" y2="18" stroke="currentColor" strokeWidth="2"/>
    <path d="M10 20L6 14M54 44L58 50" stroke="currentColor" strokeWidth="3"/>
  </svg>
);

export const VidaiIcon = () => (
  <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 24H52V44H12V24Z" stroke="currentColor" strokeWidth="3" fill="none"/>
    <path d="M20 24L32 12L44 24" stroke="currentColor" strokeWidth="3" fill="none"/>
    <path d="M8 34H12M52 34H56" stroke="currentColor" strokeWidth="3"/>
    <path d="M24 44V52M40 44V52" stroke="currentColor" strokeWidth="3"/>
    <circle cx="32" cy="34" r="3" fill="currentColor"/>
  </svg>
);

const eventsList = [
  {
    id: 'tilak',
    title: 'TILAK',
    subtitle: 'A BLESSING BEGINS',
    icon: <TilakIcon />,
  },
  {
    id: 'haldi',
    title: 'HALDI',
    subtitle: 'COLORS OF LOVE',
    icon: <HaldiIcon />,
  },
  {
    id: 'mehandi',
    title: 'MEHANDI',
    subtitle: 'ART OF TOGETHERNESS',
    icon: <MehandiIcon />,
  },
  {
    id: 'barat',
    title: 'BARAT',
    subtitle: 'A GRAND ARRIVAL',
    icon: <BaratIcon />,
  },
  {
    id: 'vidai',
    title: 'VIDAI',
    subtitle: 'A HEARTFELT FAREWELL',
    icon: <VidaiIcon />,
  },
];

const EventNavigation = ({ onSelectEvent }) => {
  return (
    <section id="events" className="banner-section">
      <div className="banner-overlay"></div>

      <div className="banner-content">
        <div className="banner-header">
          <div className="banner-header-line"></div>
          <h2 className="banner-header-title">✦ CELEBRATE EVERY MOMENT ✦</h2>
          <div className="banner-header-line"></div>
        </div>

        <div className="events-grid">
          {eventsList.map((evt) => (
            <div 
              key={evt.id} 
              onClick={() => onSelectEvent(evt.id)} 
              className="event-card"
            >
              <div className="event-card-icon-wrapper">
                {evt.icon}
              </div>
              <div>
                <h3 className="event-card-title">{evt.title}</h3>
                <p className="event-card-subtitle">{evt.subtitle}</p>
              </div>
              <span className="event-card-btn">
                OPEN EVENT <ArrowRight size={14} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventNavigation;
