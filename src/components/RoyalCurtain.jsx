import React from 'react';

const RoyalCurtain = ({ isOpen, isAnimating, statusText = "RAVI PRAKASH ♡ JOTI SINGH" }) => {
  if (!isAnimating && isOpen) return null;

  return (
    <div className={`royal-curtain-container ${isAnimating ? 'active' : ''} ${!isOpen ? 'closed' : 'open'}`}>
      {/* Left Velvet Curtain Panel */}
      <div className="curtain-panel curtain-left">
        <div className="curtain-fold fold-1"></div>
        <div className="curtain-fold fold-2"></div>
        <div className="curtain-fold fold-3"></div>
        <div className="curtain-gold-trim"></div>
        <div className="curtain-tassel tassel-left">
          <div className="tassel-rope"></div>
          <div className="tassel-knot"></div>
          <div className="tassel-fringe"></div>
        </div>
      </div>

      {/* Right Velvet Curtain Panel */}
      <div className="curtain-panel curtain-right">
        <div className="curtain-fold fold-1"></div>
        <div className="curtain-fold fold-2"></div>
        <div className="curtain-fold fold-3"></div>
        <div className="curtain-gold-trim"></div>
        <div className="curtain-tassel tassel-right">
          <div className="tassel-rope"></div>
          <div className="tassel-knot"></div>
          <div className="tassel-fringe"></div>
        </div>
      </div>

      {/* Center Royal Seal Emblem */}
      <div className="curtain-center-seal">
        <div className="seal-monogram">R & J</div>
        <div className="seal-text">{statusText}</div>
      </div>
    </div>
  );
};

export default RoyalCurtain;
