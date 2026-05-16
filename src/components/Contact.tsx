const LOCATIONS = [
  {
    name:    'San Antonio Office',
    address: '9480 Huebner Rd Ste 300\nSan Antonio, TX 78240',
    phone:   '(210) 332-5335',
    mapSrc:  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3470.876!2d-98.5583!3d29.5527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c5ec5a8e9b51b%3A0x4b7d81d43e15adf7!2s9480%20Huebner%20Rd%20%23300%2C%20San%20Antonio%2C%20TX%2078240!5e0!3m2!1sen!2sus!4v1680000000000',
    directions: 'https://maps.google.com/?q=9480+Huebner+Rd+STE+300+San+Antonio+TX+78240',
  },
  {
    name:    'Schertz Office',
    address: '1996 Schertz Pkwy #103\nSchertz, TX 78154',
    phone:   '(210) 332-5335',
    mapSrc:  'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13880.830386264186!2d-98.2760170820313!3d29.568562517223334!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c93b2ba4e5033%3A0x39f016b9efaa1a92!2sAdvanced%20Periodontics%20%26%20Dental%20Implants!5e0!3m2!1sen!2sus!4v1680000000001',
    directions: 'https://maps.google.com/?q=1996+Schertz+Pkwy+%23103+Schertz+TX+78154',
  },
];

const HOURS = [
  ['Monday',    '8:30 AM – 5:00 PM'],
  ['Tuesday',   '8:30 AM – 5:00 PM'],
  ['Wednesday', '8:30 AM – 5:00 PM'],
  ['Thursday',  '8:30 AM – 5:00 PM'],
  ['Friday',    '8:00 AM – 3:00 PM'],
  ['Saturday',  'Closed'],
  ['Sunday',    'Closed'],
];

export default function Contact() {
  const handleChange = () => {};

  return (
    <div>
      {/* ── PAGE HEADER ──────────────────────────────────────────── */}
      <section className="page-header">
        <div className="container page-header__inner">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,.7)' }}>Get In Touch</span>
          <h1>Contact Us</h1>
          <p>
            We have two convenient locations in San Antonio and Schertz to serve you.
            Call, email, or submit the form and we&rsquo;ll get back to you promptly.
          </p>
        </div>
      </section>

      {/* ── CONTACT INFO STRIP ───────────────────────────────────── */}
      <section className="stats" style={{ background: 'var(--teal)' }}>
        <div className="container">
          <div className="stats__grid">
            <div className="stat">
              <span className="stat__num" style={{ fontSize: '1.6rem' }}>
                <i className="fas fa-phone-alt"></i>
              </span>
              <a href="tel:2103325335" style={{ color: 'var(--gold)', fontWeight: 700, display: 'block', marginTop: '.35rem', fontSize: '1.05rem' }}>
                (210) 332-5335
              </a>
              <span className="stat__label">Call or Text</span>
            </div>
            <div className="stat">
              <span className="stat__num" style={{ fontSize: '1.6rem' }}>
                <i className="fas fa-envelope"></i>
              </span>
              <a href="mailto:info@advancedperiosa.com" style={{ color: 'var(--gold)', fontWeight: 700, display: 'block', marginTop: '.35rem', fontSize: '.95rem' }}>
                info@advancedperiosa.com
              </a>
              <span className="stat__label">Email Us</span>
            </div>
            <div className="stat">
              <span className="stat__num" style={{ fontSize: '1.6rem' }}>
                <i className="fas fa-clock"></i>
              </span>
              <span style={{ color: 'rgba(255,255,255,.9)', display: 'block', marginTop: '.35rem', fontSize: '.92rem' }}>
                Mon–Thu 8:30–5:00
              </span>
              <span className="stat__label">Office Hours</span>
            </div>
            <div className="stat">
              <span className="stat__num" style={{ fontSize: '1.6rem' }}>
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <span style={{ color: 'rgba(255,255,255,.9)', display: 'block', marginTop: '.35rem', fontSize: '.92rem' }}>
                San Antonio &amp; Schertz
              </span>
              <span className="stat__label">Two Locations</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCATIONS ────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Find Us</span>
            <h2 className="section-title">Our Locations</h2>
          </div>
          <div className="locations-grid">
            {LOCATIONS.map(({ name, address, phone, mapSrc, directions }) => (
              <div key={name} className="location-card">
                <div className="location-card__map">
                  <iframe
                    src={mapSrc}
                    title={`Map — ${name}`}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="location-card__body">
                  <h3>{name}</h3>
                  <address>
                    {address.split('\n').map((line, i) => (
                      <span key={i}>{line}<br /></span>
                    ))}
                  </address>
                  <p className="location-card__hours">
                    <strong>Hours:</strong><br />
                    Mon–Thu: 8:30 AM – 5:00 PM<br />
                    Fri: 8:00 AM – 3:00 PM<br />
                    Sat–Sun: Closed
                  </p>
                  <div className="location-card__actions">
                    <a href={`tel:${phone.replace(/\D/g, '')}`} className="btn btn-primary btn-sm">
                      <i className="fas fa-phone-alt"></i> {phone}
                    </a>
                    <a href={directions} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                      <i className="fas fa-directions"></i> Directions
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFFICE HOURS TABLE ───────────────────────────────────── */}
      <section className="section section--alt">
        <div className="container">
          <div className="contact-schedule-grid">
            {/* Hours */}
            <div className="hours-wrap">
              <span className="eyebrow">Schedule</span>
              <h2 className="section-title">Office Hours</h2>
              <div className="hours-card">
                {HOURS.map(([day, time], i) => (
                  <div
                    key={day}
                    className={`hours-row${i % 2 === 0 ? '' : ' is-alt'}`}
                  >
                    <span className="hours-day">{day}</span>
                    <span className={`hours-time${time === 'Closed' ? ' is-closed' : ''}`}>
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div className="contact-form-wrap">
              <span className="eyebrow">Message Us</span>
              <h2>Send a Message</h2>
              <p>We&rsquo;ll respond within one business day.</p>
              <form onSubmit={e => e.preventDefault()}>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input id="firstName" name="firstName" type="text" required onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input id="lastName" name="lastName" type="text" required onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone *</label>
                    <input id="phone" name="phone" type="tel" required onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" onChange={handleChange} />
                  </div>
                  <div className="form-group full">
                    <label htmlFor="subject">Subject</label>
                    <select id="subject" name="subject" onChange={handleChange}>
                      <option value="">Select a topic</option>
                      <option>Appointment Request</option>
                      <option>New Patient Inquiry</option>
                      <option>Insurance Question</option>
                      <option>Treatment Question</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group full">
                    <label htmlFor="message">Message *</label>
                    <textarea id="message" name="message" rows="4" required onChange={handleChange} placeholder="How can we help you?" />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}>
                  <i className="fas fa-paper-plane"></i> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
