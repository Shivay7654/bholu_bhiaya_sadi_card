import React from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

const PalaceEntrance = ({ onNavigate }) => {
  return (
    <section id="palace" className="palace-section">
      <div className="palace-overlay"></div>

      <div className="palace-content">
        <h2 className="palace-script-header">Welcome</h2>
        <p className="palace-subtitle">TO OUR</p>
        <h1 className="palace-title-large">Wedding Celebration</h1>

        <div className="palace-ornament">
          <Sparkles className="text-gold-solid" size={24} style={{ display: 'inline-block' }} />
        </div>
      </div>

      <button 
        onClick={onNavigate} 
        className="scroll-down-btn" 
        aria-label="Scroll to Wedding Events"
      >
        <ChevronDown size={24} />
      </button>
    </section>
  );
};

export default PalaceEntrance;
