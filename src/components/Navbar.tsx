import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/logo-main.webp';
import { NAV_LINKS, PHONE_NUMBER, PHONE_URI } from '../utils/constants';

const SUB_SERVICES = [
  { to: '/services/dental-implants', label: 'Dental Implants' },
  { to: '/services/gum-disease-treatment', label: 'Gum Disease Treatment' },
  { to: '/services/deep-cleaning', label: 'Deep Cleaning' },
  { to: '/services/gum-grafting', label: 'Gum Recession Grafting Treatment' },
  { to: '/services/gum-contouring', label: 'Gum Contouring' },
  { to: '/services/implant-supported-dentures', label: 'Implant-Supported Dentures' },
  { to: '/jaw-bone-augmentation-sinus-lift', label: 'Jaw Bone Augmentation & Sinus Lift' },
  { to: '/services/sedation-dentistry', label: 'Sedation Dentistry' },
  { to: '/services/expose-bond-procedure', label: 'Expose & Bond Procedure' },
  { to: '/services/crown-lengthening', label: 'Crown Lengthening' },
  { to: '/services/wisdom-tooth-removal', label: 'Wisdom Tooth Removal' }
];

export default function Navbar() {
  const { pathname, hash } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  }, []);

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
          <Link to="/" className="navbar__logo" onClick={closeMenu}>
            <img src={logoImg} alt="Advanced Periodontics & Dental Implants" />
          </Link>

          <div className="navbar__nav">
            {NAV_LINKS.map(({ to, label, hash: linkHash, isExternal }) => {
              if (label === 'Services') {
                return (
                  <div key={to} className="nav-dropdown-wrapper">
                    <Link 
                      to={getLinkTarget(to, linkHash)} 
                      className={`navbar__nav-link ${isActive(to, linkHash) || pathname.startsWith('/services') ? 'active' : ''}`}
                    >
                      {label} <i className="fas fa-chevron-down dropdown-arrow" style={{ fontSize: '0.75rem', marginLeft: '0.35rem', transition: 'transform 0.2s' }}></i>
                    </Link>
                    <div className="navbar__dropdown">
                      {SUB_SERVICES.map(sub => (
                        <Link 
                          key={sub.to} 
                          to={sub.to} 
                          className={`navbar__dropdown-item ${pathname === sub.to ? 'active' : ''}`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return isExternal ? (
                <a 
                  key={to} 
                  href={to} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="navbar__nav-link"
                >
                  {label}
                </a>
              ) : (
                <Link 
                  key={to} 
                  to={getLinkTarget(to, linkHash)} 
                  className={`navbar__nav-link ${isActive(to, linkHash) ? 'active' : ''}`}
                >
                  {label}
                </Link>
              );
            })}
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
        {NAV_LINKS.map(({ to, label, hash: linkHash, isExternal }) => {
          if (label === 'Services') {
            return (
              <div key={to} style={{ display: 'flex', flexDirection: 'column' }}>
                <div 
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    borderBottom: '1px solid var(--border)',
                    padding: '0.9rem 1rem',
                  }}
                >
                  <Link 
                    to="/services" 
                    className={pathname.startsWith('/services') ? 'active' : ''}
                    style={{ borderBottom: 'none', padding: 0, flex: 1 }}
                    onClick={closeMenu}
                  >
                    {label}
                  </Link>
                  <button 
                    onClick={() => setMobileServicesOpen(o => !o)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--ink)',
                      padding: '0.5rem 1rem',
                      cursor: 'pointer'
                    }}
                  >
                    <i className={`fas fa-chevron-${mobileServicesOpen ? 'up' : 'down'}`} style={{ color: 'var(--teal)' }}></i>
                  </button>
                </div>
                
                {mobileServicesOpen && (
                  <div style={{ background: '#f9fafb', paddingLeft: '1rem', display: 'flex', flexDirection: 'column' }}>
                    {SUB_SERVICES.map(sub => (
                      <Link 
                        key={sub.to} 
                        to={sub.to} 
                        className={pathname === sub.to ? 'active' : ''}
                        style={{ 
                          fontSize: '0.85rem', 
                          padding: '0.75rem 1rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.03em',
                          color: pathname === sub.to ? 'var(--teal)' : 'var(--ink-soft)'
                        }}
                        onClick={closeMenu}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return isExternal ? (
            <a 
              key={to} 
              href={to} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              {label}
            </a>
          ) : (
            <Link 
              key={to} 
              to={getLinkTarget(to, linkHash)} 
              className={isActive(to, linkHash) ? 'active' : ''} 
              onClick={closeMenu}
            >
              {label}
            </Link>
          );
        })}
        <a href={PHONE_URI} className="btn btn-primary" onClick={closeMenu}>
          <i className="fas fa-phone-alt"></i> Call {PHONE_NUMBER}
        </a>
      </div>
    </>
  );
}
