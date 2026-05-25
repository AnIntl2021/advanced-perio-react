import { Link } from 'react-router-dom';
import { useState } from 'react';
import heroVideo   from '../assets/hero-video.mp4';
import drPhoto     from '../assets/dr-photo.jpg';
import smileWoman  from '../assets/smile-woman.jpg';
import { SERVICES, MEMBERSHIPS } from '../utils/data';
import { PHONE_NUMBER, PHONE_URI } from '../utils/constants';
import { sendCallbackEmail } from '../services/emailService';

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
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);
    try {
      await sendCallbackEmail(formData);
      setSubmitResult({
        success: true,
        message: 'Request submitted successfully!'
      });
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        service: '',
        notes: ''
      });
    } catch (error: any) {
      setSubmitResult({
        success: false,
        message: error.message || 'Failed to submit request. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              {submitResult && (
                <div style={{
                  padding: '0.8rem',
                  borderRadius: '6px',
                  marginBottom: '1rem',
                  backgroundColor: submitResult.success ? 'rgba(0, 97, 90, 0.15)' : 'rgba(219, 68, 85, 0.15)',
                  color: submitResult.success ? 'var(--teal-dark)' : '#db4455',
                  border: `1px solid ${submitResult.success ? 'var(--teal)' : '#db4455'}`,
                  fontSize: '0.88rem',
                  lineHeight: '1.4'
                }}>
                  {submitResult.message}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  name="fullName"
                  placeholder="Full Name" 
                  required 
                  value={formData.fullName} 
                  onChange={handleChange} 
                  disabled={isSubmitting}
                />
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone Number" 
                  required 
                  value={formData.phone} 
                  onChange={handleChange} 
                  disabled={isSubmitting}
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email Address" 
                  required 
                  value={formData.email} 
                  onChange={handleChange} 
                  disabled={isSubmitting}
                />
                <select 
                  name="service"
                  value={formData.service} 
                  onChange={handleChange} 
                  disabled={isSubmitting}
                >
                  <option value="">Select a Service</option>
                  {SERVICES.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                  <option value="Crown Lengthening">Crown Lengthening</option>
                  <option value="Wisdom Tooth Removal">Wisdom Tooth Removal</option>
                  <option value="Other">Other</option>
                </select>
                <textarea 
                  name="notes"
                  placeholder="Any additional notes (optional)" 
                  rows={3} 
                  value={formData.notes} 
                  onChange={handleChange} 
                  disabled={isSubmitting}
                />
                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="btn btn-gold" 
                  style={{ justifyContent: 'center', width: '100%' }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Request'} <i className="fas fa-arrow-right"></i>
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
                <p>Implants, gum care, and dental endoscopy</p>
              </div>
            </Link>
            <Link className="home-jump__card" to="/patient-info">
              <span className="home-jump__icon"><i className="fas fa-clipboard-list"></i></span>
              <div>
                <h4>Patient Info</h4>
                <p>First-visit checklist and forms</p>
              </div>
            </Link>
            <Link className="home-jump__card" to="/referring-doctors">
              <span className="home-jump__icon"><i className="fas fa-user-nurse"></i></span>
              <div>
                <h4>Referring Doctors</h4>
                <p>Secure referral workflow</p>
              </div>
            </Link>
            <Link className="home-jump__card" to="/contact-us">
              <span className="home-jump__icon"><i className="fas fa-map-marked-alt"></i></span>
              <div>
                <h4>Contact &amp; Locations</h4>
                <p>San Antonio and Schertz offices</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── WELCOME SECTION ───────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--off-white)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <span className="eyebrow">Welcome</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.25rem', color: 'var(--navy)', marginBottom: '0.5rem', lineHeight: '1.25' }}>
            Welcome to Advanced Periodontics &amp; Dental Implants, where your smile is our top priority
          </h2>
          <p style={{ color: 'var(--teal)', fontWeight: 700, fontSize: '1.2rem', marginBottom: '2rem' }}>
            Healthy Gums Beautiful Smiles
          </p>
          <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.25rem', color: 'var(--ink-soft)', lineHeight: '1.8', fontSize: '1.02rem' }}>
            <p>
              Conveniently located in both San Antonio and Schertz, TX, our practice is proudly led by Dr. Houssam Alghadban, an accomplished periodontist with years of experience in transforming the dental health of patients from Schertz, San Antonio, New Braunfels, Cibolo, and the surrounding areas.
            </p>
            <p>
              At Advanced Periodontics &amp; Dental Implants, we are committed to providing exceptional, personalized care for all our patients. Our state-of-the-art facility is designed to create a comfortable and welcoming environment, allowing you to relax and feel at ease as we address your periodontal needs.
            </p>
            <p>
              Dr. Alghadban and our dedicated team of professionals are passionate about helping you achieve optimal oral health. We offer a comprehensive range of services, including periodontal treatment, dental implants, gum grafting, and more. Our practice utilizes the latest technology and techniques to ensure your experience is as effective and painless as possible.
            </p>
            <p>
              We understand the importance of a healthy smile, and our goal is to restore your confidence and improve your overall wellbeing. Whether you are visiting us for a routine check-up or a more complex procedure, rest assured that you are in capable and caring hands at Advanced Periodontics &amp; Dental Implants.
            </p>
            <p>
              Thank you for choosing us as your partner in dental health. We look forward to meeting you and working together to create the radiant smile you deserve.
            </p>
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
                <li><i className="fas fa-check-circle"></i> Minimally invasive procedure by using <a href="https://perio-view.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--teal)', fontWeight: 'bold', textDecoration: 'underline' }}>PerioView® Dental Endoscope</a></li>
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
