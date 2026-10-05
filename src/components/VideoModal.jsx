import React from 'react';
import { X, Sparkles } from 'lucide-react';

const eventVideoUrls = {
  TILAK: 'https://assets.mixkit.co/videos/preview/mixkit-indian-wedding-couple-smiling-at-each-other-42721-large.mp4',
  HALDI: 'https://assets.mixkit.co/videos/preview/mixkit-bride-putting-on-her-jewelries-42724-large.mp4',
  MEHANDI: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-an-indian-bride-with-henna-tattoos-42720-large.mp4',
  BARAT: 'https://assets.mixkit.co/videos/preview/mixkit-groom-and-guests-dancing-at-an-indian-wedding-42722-large.mp4',
  VIDAI: 'https://assets.mixkit.co/videos/preview/mixkit-bride-looking-out-the-window-in-her-wedding-dress-42723-large.mp4'
};

const VideoModal = ({ eventTitle, onClose }) => {
  if (!eventTitle) return null;

  const videoSrc = eventVideoUrls[eventTitle] || eventVideoUrls.TILAK;

  return (
    <div className="video-modal-backdrop" onClick={onClose}>
      <div className="video-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="video-modal-close" onClick={onClose} aria-label="Close Video">
          <X size={20} />
        </button>
        
        <div style={{ padding: '1.2rem 1.8rem', background: '#1c0407', borderBottom: '1px solid #d4af37', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Sparkles className="text-gold-solid" size={20} />
            <h3 style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--gold-light)', fontSize: '1.2rem', letterSpacing: '2px' }}>
              {eventTitle} CEREMONY MOMENTS
            </h3>
          </div>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'rgba(255,248,235,0.7)', letterSpacing: '1px' }}>
            RAVI PRAKASH ♡ JOTI SINGH
          </span>
        </div>

        <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', background: '#000' }}>
          <video
            autoPlay
            controls
            playsInline
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            src={videoSrc}
          >
            Your browser does not support HTML5 video.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
