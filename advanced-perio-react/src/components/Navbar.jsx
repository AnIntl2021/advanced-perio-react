import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/logo-main.webp';

const NAV_LINKS = [
  { to: '/',                  label: 'Home' },
  { to: '/about',             label: 'About Us' },
  { to: '/services',          label: 'Services' },
  { to: '/patient-info',      label: 'Patient Info' },
  { to: '/referring-doctors', label: 'Referring Doctors' },
  { to: '/contact-us',        label: 'Contact Us' },
];

export default function Navbar() {
  const { pathname, hash } = useLocation();
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => { setScrolled(window.scrollY > 10); };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change — use ref to avoid setState-in-effect lint rule
  const closeMenu = () => setMenuOpen(false);
  const isHome = pathname === '/';

  const getLinkTarget = (to) => {
    if (!isHome) {
      return to;
    }

    if (to === '/') {
      return '/#home-top';
    }

    if (to === '/about') {
      return '/#home-about';
    }

    if (to === '/services') {
      return '/#home-services';
    }

    if (to === '/patient-info') {
      return '/#home-patient';
    }

    if (to === '/referring-doctors') {
      return '/#home-referring';
    }

    return '/#home-contact';
  };

  const isActive = (to) => {
    if (!isHome) {
      return pathname === to;
    }

    if (to === '/') {
      return hash === '' || hash === '#home-top';
    }

    const map = {
      '/about': '#home-about',
      '/services': '#home-services',
      '/patient-info': '#home-patient',
      '/referring-doctors': '#home-referring',
      '/contact-us': '#home-contact',
    };

    return hash === map[to];
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container navbar__inner">
          <Link to="/" className="navbar__logo">
            <img src={logoImg} alt="Advanced Periodontics & Dental Implants" />
          </Link>

          <div className="navbar__nav">
            {NAV_LINKS.map(({ to, label }) => (
              <Link key={to} to={getLinkTarget(to)} className={isActive(to) ? 'active' : ''}>
                {label}
              </Link>
            ))}
          </div>

          <div className="navbar__cta">
            <a href="tel:2103325335" className="btn btn-primary btn-sm">
              <i className="fas fa-phone-alt"></i> (210) 332-5335
            </a>
          </div>

          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map(({ to, label }) => (
          <Link key={to} to={getLinkTarget(to)} className={isActive(to) ? 'active' : ''} onClick={closeMenu}>
            {label}
          </Link>
        ))}
        <a href="tel:2103325335" className="btn btn-primary" onClick={closeMenu}>
          <i className="fas fa-phone-alt"></i> Call (210) 332-5335
        </a>
      </div>
    </>
  );
}
