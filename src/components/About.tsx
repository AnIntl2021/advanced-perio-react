import { Link } from 'react-router-dom';
import drPhoto       from '../assets/dr-photo.jpg';
import drFamily2     from '../assets/dr-family-2.jpeg';
import drDds         from '../assets/dr-dds.png';
import drCommunity   from '../assets/dr-community.jpg';
import drPresentation from '../assets/dr-presentation.png';
import logoAbpCert   from '../assets/logo-abp-certified.png';
import logoAbp       from '../assets/logo-abp.png';
import logoAda       from '../assets/logo-ada.png';
import logoTda       from '../assets/logo-tda.png';
import logoUthsa     from '../assets/logo-uthsa.png';
import logoSadds     from '../assets/logo-sadds.png';
import logoSsp       from '../assets/logo-ssp.png';
import logoAap       from '../assets/logo-aap.png';
import logoTsp       from '../assets/logo-tsp.png';

const MEMBERSHIPS = [
  { img: logoAbpCert, alt: 'ABP Board Certified',         name: 'ABP – Board Certified' },
  { img: logoAbp,     alt: 'American Board of Periodontology', name: 'American Board of Periodontology' },
  { img: logoAda,     alt: 'American Dental Association', name: 'American Dental Association' },
  { img: logoTda,     alt: 'Texas Dental Association',    name: 'Texas Dental Association' },
  { img: logoUthsa,   alt: 'UT Health San Antonio',       name: 'UT Health San Antonio' },
  { img: logoSadds,   alt: 'San Antonio District Dental Society', name: 'SA District Dental Society' },
  { img: logoSsp,     alt: 'Southwest Society of Periodontists', name: 'SW Society of Periodontists' },
  { img: logoAap,     alt: 'American Academy of Periodontology', name: 'American Academy of Periodontology' },
  { img: logoTsp,     alt: 'Texas Society of Periodontists', name: 'Texas Society of Periodontists' },
];

export default function About() {
  return (
    <div>
      {/* ── PAGE HEADER ──────────────────────────────────────────── */}
      <section className="page-header alt">
        <div className="container page-header__inner">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,.7)' }}>Our Practice</span>
          <h1>About Advanced Periodontics</h1>
          <p>
            Board-certified periodontal and implant care led by Dr. Houssam Alghadban.
          </p>
        </div>
      </section>

      {/* ── DR. BIO ──────────────────────────────────────────────── */}
      <section className="section section--alt">
        <div className="container">
          <div className="dr-bio">
            {/* Sticky photo column */}
            <div className="dr-bio__photo">
              <img src={drFamily2} alt="Dr. Houssam Alghadban and Family" style={{ boxShadow: 'var(--shadow-lg)' }} />
              <div className="dr-bio__photo-caption">
                <strong>Dr. Houssam Alghadban &amp; Family</strong>
                <span>DDS — Board-Certified Periodontist</span>
              </div>
              <div style={{ marginTop: '1rem' }}>
                <img src={drDds} alt="Dr. Al in clinical setting"
                  style={{ borderRadius: '12px', width: '100%', objectFit: 'cover', marginTop: '.75rem' }} />
              </div>
            </div>

            {/* Bio text column */}
            <div className="dr-bio__text">
              <span className="eyebrow">Meet The Periodontist</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', marginBottom: '1rem' }}>
                Dr. Houssam Alghadban, DDS
              </h1>
              <div className="about-split__creds" style={{ marginTop: 0, marginBottom: '1.5rem' }}>
                <span className="cred-tag">Board-Certified Periodontist</span>
                <span className="cred-tag">Oral Plastic Surgery</span>
              </div>

              <p>
                At our practice, we specialize in providing advanced gum treatment services utilizing the latest
                technologies. Our founder, Dr. Houssam Alghadban, is a highly skilled and board-certified 
                periodontist with over 15 years of experience in San Antonio.
              </p>

              <h2>Expertise in Contemporary Modalities</h2>
              <p>
                Dr. Alghadban is proficient in all the contemporary nonsurgical and surgical gum treatment 
                modalities. These include:
              </p>
              <ul className="about-split__list">
                <li><i className="fas fa-check-circle" style={{ color: 'var(--gold)' }}></i> Regeneration</li>
                <li><i className="fas fa-check-circle" style={{ color: 'var(--gold)' }}></i> Dental Implants</li>
                <li><i className="fas fa-check-circle" style={{ color: 'var(--gold)' }}></i> Laser Surgery</li>
                <li><i className="fas fa-check-circle" style={{ color: 'var(--gold)' }}></i> Esthetic Plastic Periodontal Surgery</li>
                <li><i className="fas fa-check-circle" style={{ color: 'var(--gold)' }}></i> Gum Disease</li>
                <li><i className="fas fa-check-circle" style={{ color: 'var(--gold)' }}></i> Wisdom Teeth</li>
              </ul>

              <h2 style={{ color: 'var(--teal)', marginTop: '2.5rem' }}>Profile</h2>
              <p>
                Dr. Houssam Alghadban, also known as <strong>Dr. Al</strong>, has been practicing dentistry since 2001. 
                He specializes in periodontology, oral plastic surgery, and dental implants. After his exposure to 
                different specialties, he decided to do a three years intensive postdoctoral program in Periodontology. 
                Dr. Al was accepted at Louisiana State University, School of Dentistry in the periodontics 
                postdoctoral program. This course focused on the clinical treatment of patients and research activities.
              </p>
              <p>
                Dr. Al has been providing specialty dental care services in San Antonio, Texas for more than 15 years. 
                When he is not at the office, Dr. Al enjoys spending quality time with his wife, Nour, and daughters, 
                Talia, Alma and Luna.
              </p>

              <h2 style={{ marginTop: '2.5rem' }}>Memberships &amp; Affiliations</h2>
              <div className="membership-grid">
                {MEMBERSHIPS.map(({ img, alt, name }) => (
                  <div key={alt} className="membership-item">
                    <img src={img} alt={alt} />
                    <span>{name}</span>
                  </div>
                ))}
              </div>

              <h2 style={{ marginTop: '2.5rem' }}>Community Involvement</h2>
              <p>
                Dr. Al is deeply committed to giving back. He has volunteered internationally
                with the <strong>Smile for Everyone Foundation</strong> and the <strong>iServe Foundation</strong>,
                providing free dental care to over 1,000 underserved patients in Thailand and Laos.
              </p>
              <div className="community-card">
                <img src={drCommunity} alt="Dr. Al community outreach" />
                <div>
                  <h4>International Outreach — Thailand &amp; Laos</h4>
                  <p>
                    Through the Smile for Everyone Foundation, Dr. Al has served more than
                    1,000 patients in need across Southeast Asia, bringing quality dental
                    care to communities that would otherwise go without.
                  </p>
                </div>
              </div>
              <div className="community-card" style={{ marginTop: '1rem' }}>
                <img src={drPresentation} alt="Dr. Al presenting at conference" />
                <div>
                  <h4>Academic &amp; Professional Presentations</h4>
                  <p>
                    Dr. Al regularly presents at dental conferences and continuing education
                    events, sharing expertise in dental implants and periodontal surgery
                    with the broader dental community.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
                <Link to="/contact-us" className="btn btn-primary">
                  <i className="fas fa-calendar-check"></i> Book a Consultation
                </Link>
                <Link to="/services" className="btn btn-outline">
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO VIDEO ──────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Watch</span>
            <h2 className="section-title">Meet Dr. Al in His Own Words</h2>
          </div>
          <div style={{ maxWidth: '720px', margin: '0 auto', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', aspectRatio: '16/9' }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/NkgQ9aGNqso?rel=0&modestbranding=1"
              title="Meet Dr. Houssam Alghadban"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ border: 'none', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <span className="eyebrow" style={{ color: 'var(--gold)' }}>Ready to begin?</span>
          <h2>Experience the Difference</h2>
          <p>
            Schedule your consultation with Dr. Al and discover a compassionate,
            expert approach to periodontal care.
          </p>
          <div className="cta-banner__actions">
            <Link to="/contact-us" className="btn btn-gold">
              <i className="fas fa-calendar-check"></i> Request Appointment
            </Link>
            <a href="tel:2103325335" className="btn btn-outline-white">
              <i className="fas fa-phone-alt"></i> (210) 332-5335
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
