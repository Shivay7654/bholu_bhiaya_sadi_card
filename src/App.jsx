import React, { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import OpeningLetter from './components/OpeningLetter';
import PalaceEntrance from './components/PalaceEntrance';
import EventNavigation, { TilakIcon, HaldiIcon, MehandiIcon, BaratIcon, VidaiIcon } from './components/EventNavigation';
import EventSection from './components/EventSection';
import RoyalCurtain from './components/RoyalCurtain';
import VideoModal from './components/VideoModal';
import RSVPModal from './components/RSVPModal';
import Footer from './components/Footer';
import './styles.css';

// Dedicated Traditional Wedding Music Tracks for Each Event
const eventMusicTracks = {
  main: '/audio/overall.mp3',
  tilak: '/audio/tilak (2).mp3',
  haldi: '/audio/haldi (2).mp3',
  mehandi: '/audio/mehandi (2).mp3',
  barat: '/audio/barat (2).mp3',
  vidai: '/audio/vidai.mp3'
};

const VENUE_ADDRESS = "Mangalam, Prabhakar Road, Sasaram, Bihar";

const eventData = {
  tilak: {
    id: 'tilak',
    title: 'TILAK CEREMONY',
    subtitle: 'GROOM BLESSINGS & AUSPICIOUS RITUALS',
    date: '21 NOVEMBER 2026',
    day: 'SATURDAY',
    time: '10:00 AM – 11:00 AM',
    location: VENUE_ADDRESS,
    bgImage: '/images/tilak_ceremony_bg.png',
    overlayClass: 'overlay-tilak',
    icon: <TilakIcon />
  },
  haldi: {
    id: 'haldi',
    title: 'HALDI CEREMONY',
    subtitle: 'COLORS OF TURMERIC & JOY FOR THE GROOM',
    date: '21 NOVEMBER 2026',
    day: 'SATURDAY',
    time: '01:00 PM – 02:00 PM',
    location: VENUE_ADDRESS,
    bgImage: '/images/haldi_ceremony_bg.png',
    overlayClass: 'overlay-haldi',
    icon: <HaldiIcon />
  },
  mehandi: {
    id: 'mehandi',
    title: 'MEHANDI CEREMONY',
    subtitle: 'CELEBRATION OF ART & TRADITION',
    date: '21 NOVEMBER 2026',
    day: 'SATURDAY',
    time: '03:00 PM – 04:00 PM',
    location: VENUE_ADDRESS,
    bgImage: '/images/mehandi_ceremony_bg.png',
    overlayClass: 'overlay-mehandi',
    icon: <MehandiIcon />
  },
  barat: {
    id: 'barat',
    title: 'BARAT PROCESSION',
    subtitle: 'GRAND HORSE ENTRY & DANCING CELEBRATION',
    date: '21 NOVEMBER 2026',
    day: 'SATURDAY',
    time: '06:00 PM – 12:00 AM (MIDNIGHT)',
    location: VENUE_ADDRESS,
    bgImage: '/images/barat_ceremony_bg.png',
    overlayClass: 'overlay-barat',
    icon: <BaratIcon />
  },
  vidai: {
    id: 'vidai',
    title: 'VIDAI CEREMONY',
    subtitle: 'A HEARTFELT FAREWELL & NEW BEGINNINGS',
    date: '22 NOVEMBER 2026',
    day: 'SUNDAY',
    time: '10:00 AM ONWARDS',
    location: VENUE_ADDRESS,
    bgImage: '/images/vidai_ceremony_bg.png',
    overlayClass: 'overlay-vidai',
    icon: <VidaiIcon />,
    quote: 'Some goodbyes are simply new beginnings.'
  }
};

function App() {
  const [isMuted, setIsMuted] = useState(true);
  const [activePage, setActivePage] = useState('page1'); // 'page1' | 'main'
  const [isPage1Active, setIsPage1Active] = useState(true); // Lock scrolling on Page 1
  const [activeEventView, setActiveEventView] = useState(null);
  const [activeVideoModal, setActiveVideoModal] = useState(null);
  const [rsvpOpen, setRsvpOpen] = useState(false);

  // Royal Curtain Transition state
  const [curtainOpen, setCurtainOpen] = useState(true);
  const [isCurtainAnimating, setIsCurtainAnimating] = useState(false);
  const [curtainSealText, setCurtainSealText] = useState("RAVI PRAKASH ♡ JOTI SINGH");

  const audioRef = useRef(null);
  const currentAudioKeyRef = useRef('main');
  const isTransitioningRef = useRef(false); // Synchronous guard against double clicks

  // STRICT EVENT BLOCKING FOR PAGE 1 (wheel, touchmove, keydown, scroll)
  useEffect(() => {
    if (isPage1Active && !activeEventView) {
      document.body.classList.add('page1-locked');
      document.documentElement.classList.add('page1-locked');

      const blockScrollEvents = (e) => {
        // Suppress mouse wheel, touch swipes, trackpad, drag, and scroll keys on Page 1
        if (e.type === 'wheel' || e.type === 'touchmove' || e.type === 'pointermove') {
          if (e.cancelable) e.preventDefault();
        } else if (e.type === 'keydown' && [
          'ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Space', 'Home', 'End', 'Tab'
        ].includes(e.code)) {
          if (e.cancelable) e.preventDefault();
        }
      };

      const enforceTopScroll = () => {
        if (window.scrollY !== 0 || window.scrollX !== 0) {
          window.scrollTo(0, 0);
        }
      };

      window.addEventListener('wheel', blockScrollEvents, { passive: false });
      window.addEventListener('touchmove', blockScrollEvents, { passive: false });
      window.addEventListener('keydown', blockScrollEvents, { passive: false });
      window.addEventListener('scroll', enforceTopScroll, { passive: false });

      // Pin scroll position strictly at top (0, 0)
      window.scrollTo(0, 0);

      return () => {
        document.body.classList.remove('page1-locked');
        document.documentElement.classList.remove('page1-locked');
        window.removeEventListener('wheel', blockScrollEvents);
        window.removeEventListener('touchmove', blockScrollEvents);
        window.removeEventListener('keydown', blockScrollEvents);
        window.removeEventListener('scroll', enforceTopScroll);
      };
    } else {
      document.body.classList.remove('page1-locked');
      document.documentElement.classList.remove('page1-locked');
    }
  }, [isPage1Active, activeEventView]);

  // Audio track switcher
  const switchAudioTrack = (trackKey) => {
    currentAudioKeyRef.current = trackKey;
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = eventMusicTracks[trackKey] || eventMusicTracks.main;
      if (!isMuted) {
        audioRef.current.play().catch(e => console.log("Audio playback error:", e));
      }
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().then(() => {
          setIsMuted(false);
        }).catch(err => console.log("Audio play error:", err));
      } else {
        audioRef.current.pause();
        setIsMuted(true);
      }
    }
  };

  // Trigger Royal Curtain Animation with Callback (Guarded against repeated clicks)
  const triggerCurtainTransition = (callback, sealText = "RAVI PRAKASH ♡ JOTI SINGH") => {
    if (isTransitioningRef.current) return; // Ignore duplicate rapid clicks
    isTransitioningRef.current = true;
    setIsCurtainAnimating(true);
    setCurtainSealText(sealText);
    setCurtainOpen(false); // Curtains start closing smoothly over 1.2s (1200ms)

    // At 1200ms: Curtains are 100% closed. Swap view / scroll strictly behind closed curtains!
    setTimeout(() => {
      if (callback) callback();

      // 300ms hold state for clean DOM render behind closed curtains
      setTimeout(() => {
        setCurtainOpen(true); // Curtains start opening smoothly over 1.2s (1200ms)

        // At 1200ms after opening: unlock transition guard
        setTimeout(() => {
          setIsCurtainAnimating(false);
          isTransitioningRef.current = false;
        }, 1200);
      }, 300);
    }, 1200);
  };

  // Unified Curtain View Navigation (Page 1, Page 2, Page 3, Events)
  const handleNavigateView = (viewKey, sealText = "ROYAL WEDDING") => {
    if (['tilak', 'haldi', 'mehandi', 'barat', 'vidai'].includes(viewKey)) {
      handleSelectEvent(viewKey);
      return;
    }

    triggerCurtainTransition(() => {
      if (viewKey === 'page1') {
        setActiveEventView(null);
        setActivePage('page1');
        setIsPage1Active(true);
        switchAudioTrack('main');
        window.scrollTo(0, 0);
      } else if (viewKey === 'page2') {
        setActiveEventView(null);
        setActivePage('main');
        setIsPage1Active(false);
        switchAudioTrack('main');
        window.scrollTo(0, 0);
        setTimeout(() => {
          const el = document.querySelector('#palace');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      } else if (viewKey === 'page3') {
        setActiveEventView(null);
        setActivePage('main');
        setIsPage1Active(false);
        switchAudioTrack('main');
        setTimeout(() => {
          const el = document.querySelector('#events');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }
    }, sealText);
  };

  // Open Full-Screen Event Page View via Curtain Transition
  const handleSelectEvent = (eventId) => {
    const eventName = eventData[eventId]?.title || "WEDDING EVENT";
    triggerCurtainTransition(() => {
      setIsPage1Active(false);
      setActiveEventView(eventId);
      switchAudioTrack(eventId);
      window.scrollTo(0, 0);
    }, eventName);
  };

  // Return Back to Page 3 Main Events via Curtain Transition
  const handleBackToMain = () => {
    triggerCurtainTransition(() => {
      setIsPage1Active(false);
      setActivePage('main');
      setActiveEventView(null);
      switchAudioTrack('main');
      setTimeout(() => {
        const el = document.getElementById('events');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }, "CELEBRATE EVERY MOMENT");
  };

  return (
    <div className="app-container">
      {/* Background Audio Element */}
      <audio 
        ref={audioRef}
        loop
        src={eventMusicTracks.main}
      />

      {/* Royal Curtain Transition Overlay */}
      <RoyalCurtain 
        isOpen={curtainOpen} 
        isAnimating={isCurtainAnimating}
        statusText={curtainSealText}
      />

      {/* Sticky Navigation Bar */}
      <Navbar 
        isMuted={isMuted} 
        toggleMusic={toggleMusic} 
        onOpenRsvp={() => setRsvpOpen(true)}
        onNavigateView={handleNavigateView}
        activeView={activeEventView ? activeEventView : (activePage === 'page1' ? 'page1' : 'page2')}
      />

      {/* Main View Flow */}
      {!activeEventView && (
        <main>
          {/* Page 1: Opening Invitation Letter (Strict 100vh non-scrollable landing page) */}
          {activePage === 'page1' && (
            <OpeningLetter onNavigate={() => handleNavigateView('page2', 'PALACE WELCOME')} />
          )}

          {/* Pages 2 & 3: Scrollable Palace Welcome & Main Wedding Events Banner */}
          {activePage === 'main' && (
            <>
              <PalaceEntrance onNavigate={() => handleNavigateView('page3', 'CELEBRATE EVERY MOMENT')} />
              <EventNavigation onSelectEvent={handleSelectEvent} />
            </>
          )}
        </main>
      )}

      {/* Full-Screen Individual Event View */}
      {activeEventView && eventData[activeEventView] && (
        <EventSection
          {...eventData[activeEventView]}
          onBack={handleBackToMain}
          onWatchMoments={(title) => setActiveVideoModal(title)}
        />
      )}

      {/* Video Modal Lightbox */}
      <VideoModal 
        eventTitle={activeVideoModal} 
        onClose={() => setActiveVideoModal(null)} 
      />

      {/* Interactive RSVP Modal */}
      <RSVPModal 
        isOpen={rsvpOpen} 
        onClose={() => setRsvpOpen(false)} 
      />

      {/* Footer (Rendered when in main view or active event) */}
      <Footer onOpenRsvp={() => setRsvpOpen(true)} />
    </div>
  );
}

export default App;
