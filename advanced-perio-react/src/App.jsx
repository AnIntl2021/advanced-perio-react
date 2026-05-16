import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import PatientInfo from './components/PatientInfo';
import Doctors from './components/Doctors';
import Contact from './components/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        const target = document.querySelector(hash);
        if (!target) {
          return;
        }
        const offset = 132;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
};

// Subtle reveal animations for major blocks on route changes
const ScrollReveal = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = document.querySelectorAll(
      '.section-header, .svc-card, .home-panel-card, .service-row, .location-card, .membership-item, .dr-bio__photo, .dr-bio__text, .contact-form-wrap, .home-ref-wrap__item, .community-card'
    );

    if (!targets.length) {
      return;
    }

    if (prefersReduced) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    targets.forEach((el, index) => {
      el.classList.add('reveal-on-scroll');
      el.setAttribute('data-reveal-delay', String(index % 4));
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    targets.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <ScrollReveal />
      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__socials">
            <a href="https://www.facebook.com/Advancedperiosa" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/advancedperiosa/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="https://www.tiktok.com/@advancedperiosa" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><i className="fab fa-tiktok"></i></a>
            <a href="https://www.youtube.com/channel/UCtfAXezKKXPcSKQ24DuFbMA" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
          </div>
          <div className="topbar__right">
            <span className="topbar__emergency">
              <i className="fas fa-heartbeat"></i> Emergency Dental Care Available
            </span>
            <span className="topbar__item">
              <i className="fas fa-phone-alt"></i>
              <a href="tel:2103325335">(210) 332-5335</a>
            </span>
          </div>
        </div>
      </div>

      <Navbar />

      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/patient-info" element={<PatientInfo />} />
          <Route path="/referring-doctors" element={<Doctors />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;