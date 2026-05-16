import { Link } from 'react-router-dom';

const FORMS = [
  {
    icon: 'fas fa-file-medical-alt',
    title: 'New Patient Health History',
    desc: 'Complete before your first visit to help us understand your medical background.',
    href: '#',
  },
  {
    icon: 'fas fa-tooth',
    title: 'New Patient Dental History',
    desc: 'Tell us about your past dental experiences and current concerns.',
    href: '#',
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'HIPAA Privacy Acknowledgment',
    desc: 'Our patient privacy policy acknowledgment form required for all new patients.',
    href: '#',
  },
  {
    icon: 'fas fa-id-card',
    title: 'Patient Registration Form',
    desc: 'Personal information and contact details for your patient profile.',
    href: '#',
  },
  {
    icon: 'fas fa-file-invoice-dollar',
    title: 'Financial Policy Agreement',
    desc: 'Review our payment and financial policy before your appointment.',
    href: '#',
  },
  {
    icon: 'fas fa-hand-holding-heart',
    title: 'Consent for Treatment',
    desc: 'Informed consent for periodontal examination and treatment.',
    href: '#',
  },
];

const INSURANCE = [
  'Aetna',
  'Cigna',
  'Delta Dental',
  'Humana',
  'MetLife',
  'Principal Financial',
  'United Healthcare',
  'Guardian',
  'Assurant / Sun Life',
  'And more — call to verify',
];

export default function PatientInfo() {
  return (
    <div>
      {/* ── PAGE HEADER ──────────────────────────────────────────── */}
      <section className="page-header">
        <div className="container page-header__inner">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,.7)' }}>Your Visit</span>
          <h1>Patient Information</h1>
          <p>
            Everything you need to know before your first appointment at Advanced
            Periodontics &amp; Dental Implants.
          </p>
        </div>
      </section>

      {/* ── WHAT TO EXPECT ───────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="info-grid">
            <div>
              <span className="eyebrow">Your First Visit</span>
              <h2 className="section-title">What to Expect</h2>
              <p style={{ color: 'var(--ink-soft)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                During your initial consultation Dr. Al and his team will perform a
                comprehensive periodontal evaluation including a full mouth x-ray review,
                gum measurements, and a thorough discussion of your concerns. You will
                leave with a clear, personalized treatment plan.
              </p>
              <ul className="checklist">
                <li><i className="fas fa-check-circle"></i> Full periodontal examination and probe measurements</li>
                <li><i className="fas fa-check-circle"></i> Digital X-ray review (or bring your own from your dentist)</li>
                <li><i className="fas fa-check-circle"></i> Medical and dental history review</li>
                <li><i className="fas fa-check-circle"></i> Personalized treatment plan with cost estimate</li>
                <li><i className="fas fa-check-circle"></i> Opportunity to ask all of your questions</li>
                <li><i className="fas fa-check-circle"></i> Financing options discussion if needed</li>
              </ul>
              <h3 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.15rem' }}>What to Bring</h3>
              <ul className="checklist">
                <li><i className="fas fa-id-card"></i> Valid photo ID and insurance card(s)</li>
                <li><i className="fas fa-file-medical"></i> List of current medications and medical conditions</li>
                <li><i className="fas fa-x-ray"></i> Any recent dental X-rays (within the last 12 months)</li>
                <li><i className="fas fa-clock"></i> Arrive 15 minutes early to complete paperwork</li>
              </ul>
            </div>

            <div>
              <span className="eyebrow">Insurance &amp; Payment</span>
              <h2 className="section-title">Insurance We Accept</h2>
              <p style={{ color: 'var(--ink-soft)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                We accept most major dental insurance plans. Our team will verify your
                benefits and assist with claims. We also offer flexible financing options
                through CareCredit and in-house payment plans.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem', marginBottom: '2rem' }}>
                {INSURANCE.map(ins => (
                  <span key={ins} className="cred-tag" style={{ background: 'var(--off-white)', color: 'var(--ink-soft)', border: '1px solid var(--border)' }}>
                    {ins}
                  </span>
                ))}
              </div>
              <div style={{ background: 'var(--teal-light)', borderRadius: '12px', padding: '1.5rem' }}>
                <h4 style={{ color: 'var(--teal-dark)', marginBottom: '.5rem' }}>
                  <i className="fas fa-phone-alt" style={{ marginRight: '.5rem' }}></i>
                  Verify Your Insurance
                </h4>
                <p style={{ fontSize: '.92rem', color: 'var(--ink-soft)', marginBottom: '1rem' }}>
                  Call us at <strong>(210) 332-5335</strong> before your visit and
                  our team will verify your benefits and give you a complete breakdown
                  of what to expect.
                </p>
                <a href="tel:2103325335" className="btn btn-primary btn-sm">
                  <i className="fas fa-phone-alt"></i> Call to Verify
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PATIENT FORMS ────────────────────────────────────────── */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Paperwork</span>
            <h2 className="section-title">New Patient Forms</h2>
            <p className="section-lead">
              Save time at your visit by completing your forms online before you arrive.
              All forms are secure and HIPAA-compliant.
            </p>
          </div>
          <div className="services-grid">
            {FORMS.map(({ icon, title, desc, href }) => (
              <a key={title} href={href} className="doc-card" style={{ textDecoration: 'none' }}>
                <div className="doc-card__icon"><i className={icon}></i></div>
                <div>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                  <span className="doc-card__link">Download / Fill Online <i className="fas fa-arrow-right"></i></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFFICE HOURS ─────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <span className="eyebrow">We&rsquo;re Open</span>
            <h2 className="section-title">Office Hours</h2>
            <div style={{ background: 'var(--off-white)', borderRadius: '16px', padding: '2rem', marginTop: '1.5rem', border: '1px solid var(--border)' }}>
              {[
                ['Monday',    '8:30 AM – 5:00 PM'],
                ['Tuesday',   '8:30 AM – 5:00 PM'],
                ['Wednesday', '8:30 AM – 5:00 PM'],
                ['Thursday',  '8:30 AM – 5:00 PM'],
                ['Friday',    '8:00 AM – 3:00 PM'],
                ['Saturday',  'Closed'],
                ['Sunday',    'Closed'],
              ].map(([day, hours]) => (
                <div key={day} style={{ display: 'flex', justifyContent: 'space-between', padding: '.65rem 0', borderBottom: '1px solid var(--border)', fontSize: '.95rem' }}>
                  <span style={{ fontWeight: 600, color: 'var(--ink)' }}>{day}</span>
                  <span style={{ color: hours === 'Closed' ? 'var(--muted)' : 'var(--teal)', fontWeight: hours !== 'Closed' ? 600 : 400 }}>{hours}</span>
                </div>
              ))}
            </div>
            <p style={{ marginTop: '1.5rem', color: 'var(--muted)', fontSize: '.9rem' }}>
              Appointments are required. Walk-ins are welcome based on availability.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              <Link to="/contact-us" className="btn btn-primary">Book Appointment</Link>
              <a href="tel:2103325335" className="btn btn-outline"><i className="fas fa-phone-alt"></i> (210) 332-5335</a>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <span className="eyebrow" style={{ color: 'var(--gold)' }}>New Patients Welcome</span>
          <h2>Ready to Schedule Your First Visit?</h2>
          <p>We look forward to meeting you and helping you achieve a healthier smile.</p>
          <div className="cta-banner__actions">
            <Link to="/contact-us" className="btn btn-gold"><i className="fas fa-calendar-check"></i> Request Appointment</Link>
            <a href="tel:2103325335" className="btn btn-outline-white"><i className="fas fa-phone-alt"></i> (210) 332-5335</a>
          </div>
        </div>
      </section>
    </div>
  );
}
