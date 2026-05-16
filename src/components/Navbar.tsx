import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/logo-main.webp';
import { NAV_LINKS, PHONE_NUMBER, PHONE_URI } from '../utils/constants';

export default function Navbar() {
  const { pathname, hash } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const isHome = pathname === '/';

  const getLinkTarget = (linkTo: string, linkHash?: string) => {
    if (!isHome) return linkTo;
    return linkHash || linkTo;
  };

  const isActive = (linkTo: string, linkHash?: string) => {
    if (!isHome) return pathname === linkTo;
    if (linkTo === '/') return hash === '' || hash === '#home-top';
    return hash === linkHash;
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar__inner">
          <Link to="/" className="navbar__logo">
            <img src={logoImg} alt="Advanced Periodontics & Dental Implants" />
          </Link>

          <div className="navbar__nav">
            {NAV_LINKS.map(({ to, label, hash: linkHash }) => (
              <Link 
                key={to} 
                to={getLinkTarget(to, linkHash)} 
                className={isActive(to, linkHash) ? 'active' : ''}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="navbar__cta">
            <a href={PHONE_URI} className="btn btn-primary btn-sm">
              <i className="fas fa-phone-alt"></i> {PHONE_NUMBER}
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
        {NAV_LINKS.map(({ to, label, hash: linkHash }) => (
          <Link 
            key={to} 
            to={getLinkTarget(to, linkHash)} 
            className={isActive(to, linkHash) ? 'active' : ''} 
            onClick={closeMenu}
          >
            {label}
          </Link>
        ))}
        <a href={PHONE_URI} className="btn btn-primary" onClick={closeMenu}>
          <i className="fas fa-phone-alt"></i> Call {PHONE_NUMBER}
        </a>
      </div>
    </>
  );
}
