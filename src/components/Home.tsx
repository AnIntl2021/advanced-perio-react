import { Link } from 'react-router-dom';
import { useState } from 'react';
import heroVideo   from '../assets/hero-video.mp4';
import drPhoto     from '../assets/dr-photo.jpg';
import drFamily2   from '../assets/dr-family-2.jpeg';
import smileWoman  from '../assets/smile-woman.jpg';
import { SERVICES, MEMBERSHIPS } from '../utils/data';
import { PHONE_NUMBER, PHONE_URI, GOOGLE_MAPS_API_KEY } from '../utils/constants';

function VideoCard({ videoId, title, className }: { videoId: string, title: string, className?: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`video-card ${className}`} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&enablejsapi=1${isHovered ? '&autoplay=1&mute=1' : ''}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

const SCROLLING_MEMBERSHIPS = [...MEMBERSHIPS, ...MEMBERSHIPS];

export default function Home() {
  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="hero section-anchor" id="home-top">
        <video autoPlay loop muted playsInline preload="auto" poster={smileWoman} className="hero__video">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero__overlay" />
        <div className="container">
          <div className="hero__content">
            <div className="fade-up">
              <div className="hero__tag">
                <i className="fas fa-award"></i> Board-Certified Periodontists
              </div>
              <h1 className="hero__title">
                Periodontist in<br />
                <span>San Antonio</span> &amp;<br />
                Schertz, TX
              </h1>
              <p className="hero__subtitle">
                Delivering advanced periodontal care and smile transformations.
                Led by Dr. Houssam Alghadban — trusted by thousands of patients
                across the San Antonio region.
              </p>
              <div className="hero__actions">
                <Link to="/contact-us" className="btn btn-gold">
                  <i className="fas fa-calendar-check"></i> Schedule Consultation
                </Link>
                <Link to="/services" className="btn btn-outline-white">
                  Our Services <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
              <div className="hero__phone">
                <div className="hero__phone-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <span>Call us today</span><br />
                  <a href={PHONE_URI}>{PHONE_NUMBER}</a>
                </div>
              </div>
            </div>

            {/* Quick contact card (desktop only) */}
            <div className="hero__card fade-up-2">
              <p className="hero__card-title">
                <i className="fas fa-calendar-alt"></i>
                Request an Appointment
              </p>
              <form onSubmit={e => e.preventDefault()}>
                <input type="text"  placeholder="Full Name" required />
                <input type="tel"   placeholder="Phone Number" required />
                <input type="email" placeholder="Email Address" required />
                <select>
                  <option value="">Select a Service</option>
                  {SERVICES.map(s => <option key={s.title}>{s.title}</option>)}
                  <option>Crown Lengthening</option>
                  <option>Wisdom Tooth Removal</option>
                  <option>Other</option>
                </select>
                <textarea placeholder="Any additional notes (optional)" rows="3" />
                <button type="submit" className="btn btn-gold" style={{ justifyContent: 'center' }}>
                  Send Request <i className="fas fa-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="home-jump section-anchor" id="home-nav">
        <div className="container">
          <div className="home-jump__grid">
            <Link className="home-jump__card" to="/#home-about">
              <span className="home-jump__icon"><i className="fas fa-user-md"></i></span>
              <div>
                <h4>Meet Dr. Al</h4>
                <p>Training, experience, and mission</p>
              </div>
            </Link>
            <Link className="home-jump__card" to="/#home-services">
              <span className="home-jump__icon"><i className="fas fa-teeth-open"></i></span>
              <div>
                <h4>All Services</h4>
                <p>Implants, gum care, and laser therapy</p>
              </div>
            </Link>
            <Link className="home-jump__card" to="/#home-patient">
              <span className="home-jump__icon"><i className="fas fa-clipboard-list"></i></span>
              <div>
                <h4>Patient Info</h4>
                <p>First-visit checklist and insurance</p>
              </div>
            </Link>
            <Link className="home-jump__card" to="/#home-referring">
              <span className="home-jump__icon"><i className="fas fa-user-nurse"></i></span>
              <div>
                <h4>Referring Doctors</h4>
                <p>Secure referral workflow</p>
              </div>
            </Link>
            <Link className="home-jump__card" to="/#home-contact">
              <span className="home-jump__icon"><i className="fas fa-map-marked-alt"></i></span>
              <div>
                <h4>Contact & Locations</h4>
                <p>San Antonio and Schertz offices</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────── */}
      <section className="stats">
        <div className="container">
          <div className="stats__grid">
            <div className="stat">
              <strong className="stat__num">20<span>+</span></strong>
              <span className="stat__label">Years of Experience</span>
            </div>
            <div className="stat">
              <strong className="stat__num">5<span>K+</span></strong>
              <span className="stat__label">Successful Implants</span>
            </div>
            <div className="stat">
              <strong className="stat__num">100<span>%</span></strong>
              <span className="stat__label">Board Certified</span>
            </div>
            <div className="stat">
              <strong className="stat__num">2</strong>
              <span className="stat__label">Convenient Locations</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── MEMBERSHIPS ──────────────────────────────────────────── */}
      <div className="memberships">
        <div className="container">
          <p className="memberships__label">Recognized Memberships &amp; Affiliations</p>
          <div className="memberships__marquee" aria-label="Professional memberships and affiliations">
            <div className="memberships__track">
              {SCROLLING_MEMBERSHIPS.map(({ img, alt }, idx) => (
                <div className="memberships__item" key={`${alt}-${idx}`}>
                  <img src={img} alt={alt} title={alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── ABOUT DR. AL ─────────────────────────────────────────── */}
      <section className="section section-anchor" id="home-about">
        <div className="container">
          <div className="section-header about-section-header">
            <Link to="/about" className="about-hero-heading-link">
              <h2 className="about-hero-title">About Us</h2>
            </Link>
          </div>
          <div className="about-split">
            <div className="about-split__img">
              <img src={drPhoto} alt="Dr. Houssam Alghadban" />
              <div className="about-split__accent" />
              <div className="about-split__badge">
                <strong>20+</strong>
                <span>Years<br />Practicing</span>
              </div>
            </div>
            <div className="about-split__text">
              <span className="eyebrow">Meet the Doctor</span>
              <h2 className="section-title">Dr. Houssam Alghadban, DDS</h2>
              <div className="about-split__creds">
                <span className="cred-tag">Board-Certified Periodontist</span>
                <span className="cred-tag">Dental Implant Specialist</span>
                <span className="cred-tag">Adjunct Professor – UTHSA</span>
              </div>
              <p className="section-lead" style={{ maxWidth: '100%' }}>
                Dr. Alghadban, also known as Dr. Al, has been practicing dentistry since 2001,
                specializing in periodontology, oral plastic surgery, and dental implants.
                He completed his postdoctoral education in periodontics at Louisiana State
                University School of Dentistry.
              </p>
              <ul className="about-split__list">
                <li><i className="fas fa-check-circle"></i> Member – American Academy of Periodontology (AAP)</li>
                <li><i className="fas fa-check-circle"></i> Diplomate – American Board of Periodontology (ABP)</li>
                <li><i className="fas fa-check-circle"></i> Member – American Dental Association (ADA)</li>
                <li><i className="fas fa-check-circle"></i> Adjunct Professor at UT Health San Antonio School of Dentistry</li>
                <li><i className="fas fa-check-circle"></i> Minimally invasive laser therapy (LANAP certified)</li>
              </ul>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/about" className="btn btn-primary">
                  Learn More About Dr. Al
                </Link>
                <a href={PHONE_URI} className="btn btn-outline">
                  <i className="fas fa-phone-alt"></i> {PHONE_NUMBER}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────── */}
      <section className="section section--alt section-anchor" id="home-services">
        <div className="container">
          <div className="section-header about-section-header">
            <Link to="/services" className="about-hero-heading-link">
              <h2 className="about-hero-title">Our Services</h2>
            </Link>
            <p className="section-lead" style={{ marginTop: '1.25rem' }}>
              Our professional team specializes in different aspects of Periodontics,
              delivering the highest standard of care for your gum health and smile.
            </p>
          </div>
          <div className="services-grid">
            {SERVICES.map(({ img, icon, title, desc, to }) => (
              <Link to={to} key={title} className="svc-card">
                <img src={img} alt={title} className="svc-card__img" />
                <div className="svc-card__body">
                  <div className="svc-card__icon"><i className={icon}></i></div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <span className="svc-card__link">
                    Learn More <i className="fas fa-arrow-right"></i>
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/services" className="btn btn-primary">
              View All Services <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-anchor" id="home-patient">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">For New Patients</span>
            <h2 className="section-title">Everything Ready Before You Arrive</h2>
            <p className="section-lead">
              Download forms, check accepted insurance, and review office hours so your
              first visit is smooth and stress-free.
            </p>
          </div>
          <div className="home-panel-grid">
            <div className="home-panel-card">
              <div className="home-panel-card__icon"><i className="fas fa-file-medical-alt"></i></div>
              <h3>Pre-Visit Forms</h3>
              <p>Complete health history and registration forms ahead of time.</p>
            </div>
            <div className="home-panel-card">
              <div className="home-panel-card__icon"><i className="fas fa-shield-alt"></i></div>
              <h3>Insurance Guidance</h3>
              <p>We accept major plans and help verify your benefits in advance.</p>
            </div>
            <div className="home-panel-card">
              <div className="home-panel-card__icon"><i className="fas fa-clock"></i></div>
              <h3>Office Hours</h3>
              <p>Mon-Thu 8:30-5:00 and Fri 8:00-3:00 across both locations.</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.25rem' }}>
            <Link to="/patient-info" className="btn btn-primary">
              Go to Patient Info <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--alt section-anchor" id="home-referring">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Professional Collaboration</span>
            <h2 className="section-title">Referring Doctors Portal</h2>
            <p className="section-lead">
              Fast referrals, clear communication, and co-managed care to support your patients
              through implant and periodontal treatment.
            </p>
          </div>
          <div className="home-ref-wrap">
            <div className="home-ref-wrap__item">
              <i className="fas fa-stethoscope"></i>
              <span>Board-Certified Specialty Care</span>
            </div>
            <div className="home-ref-wrap__item">
              <i className="fas fa-file-signature"></i>
              <span>Simple Online Referral</span>
            </div>
            <div className="home-ref-wrap__item">
              <i className="fas fa-comments"></i>
              <span>Timely Clinical Updates</span>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.25rem' }}>
            <Link to="/referring-doctors" className="btn btn-primary">
              Open Referral Form <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ── PATIENT TESTIMONIALS ─────────────────────────────────── */}
      <section className="section section--alt section-anchor" id="home-testimonials">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Real Stories</span>
            <h2 className="section-title">Hear from Our Patients</h2>
            <p className="section-lead">
              Real experiences from patients who transformed their smiles with
              Advanced Periodontics &amp; Dental Implants.
            </p>
          </div>
          <div className="testimonials__grid">
            <VideoCard videoId="1Thnx8jEXYY" title="Patient Testimonial 1" className="fade-up" />
            <VideoCard videoId="1QbRIMxLSVw" title="Patient Testimonial 2" className="fade-up-2" />
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────── */}
      <section className="cta-banner section-anchor" id="home-contact">
        <div className="container cta-banner__inner">
          <span className="eyebrow" style={{ color: 'var(--gold)' }}>Get Started Today</span>
          <h2>Ready to Restore Your Smile?</h2>
          <p>
            Schedule your consultation today and take the first step toward optimal
            oral health. Two convenient locations in San Antonio &amp; Schertz, TX.
          </p>
          <div className="cta-banner__actions">
            <Link to="/contact-us" className="btn btn-gold">
              <i className="fas fa-calendar-check"></i> Request Appointment
            </Link>
            <a href={PHONE_URI} className="btn btn-outline-white">
              <i className="fas fa-phone-alt"></i> {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
