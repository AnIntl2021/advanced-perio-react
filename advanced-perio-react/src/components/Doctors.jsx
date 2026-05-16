const SPECIALTIES = [
  'General Dentistry',
  'Orthodontics',
  'Endodontics',
  'Oral Surgery',
  'Prosthodontics',
  'Pedodontics',
  'Other Specialty',
];

const REFERRAL_REASONS = [
  'Dental Implants',
  'Gum Disease / Periodontitis',
  'Gum Grafting',
  'Crown Lengthening',
  'Bone Grafting',
  'Gum Contouring',
  'Implant Supported Dentures',
  'LANAP Laser Treatment',
  'Consultation Only',
  'Other',
];

export default function Doctors() {
  const handleChange = () => {};

  return (
    <div>
      {/* ── PAGE HEADER ──────────────────────────────────────────── */}
      <section className="page-header">
        <div className="container page-header__inner">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,.7)' }}>Professionals</span>
          <h1>Referring Doctors</h1>
          <p>
            We appreciate your trust in referring your patients to our practice.
            Submit a referral online and our team will contact the patient within
            one business day.
          </p>
        </div>
      </section>

      {/* ── WHY REFER ────────────────────────────────────────────── */}
      <section className="section section--alt">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
            {[
              { icon: 'fas fa-award',         title: 'Board Certified',        desc: 'Dr. Al is a Diplomate of the American Board of Periodontology — the highest credential in the specialty.' },
              { icon: 'fas fa-sync-alt',       title: 'Timely Communication',   desc: 'We provide prompt consult reports and treatment updates so you stay informed about your patient\'s care.' },
              { icon: 'fas fa-map-marker-alt', title: 'Two Locations',          desc: 'We serve the greater San Antonio region with offices in San Antonio and Schertz for your patients\' convenience.' },
              { icon: 'fas fa-hand-holding-heart', title: 'Co-Managed Care',   desc: 'We believe in a collaborative model — your patient returns to you for continued comprehensive dental care.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.75rem', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ width: '52px', height: '52px', background: 'var(--teal-light)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: 'var(--teal)', fontSize: '1.3rem' }}>
                  <i className={icon}></i>
                </div>
                <h4 style={{ marginBottom: '.5rem' }}>{title}</h4>
                <p style={{ fontSize: '.87rem', color: 'var(--muted)', lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* ── REFERRAL FORM ─────────────────────────────────────── */}
          <div className="referral-wrap">
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span className="eyebrow">Submit a Referral</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.65rem' }}>Online Referral Form</h2>
              <p style={{ color: 'var(--muted)', fontSize: '.9rem', marginTop: '.5rem' }}>
                Complete all fields. Our scheduling team will contact your patient within one business day.
              </p>
            </div>

            <form onSubmit={e => e.preventDefault()}>
              {/* Referring doctor info */}
              <p className="form-section-title">Referring Doctor Information</p>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="drFirstName">First Name *</label>
                  <input id="drFirstName" name="drFirstName" type="text" required onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="drLastName">Last Name *</label>
                  <input id="drLastName" name="drLastName" type="text" required onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="drPhone">Office Phone *</label>
                  <input id="drPhone" name="drPhone" type="tel" required onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="drFax">Fax Number</label>
                  <input id="drFax" name="drFax" type="tel" onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="drEmail">Email *</label>
                  <input id="drEmail" name="drEmail" type="email" required onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="drSpecialty">Specialty *</label>
                  <select id="drSpecialty" name="drSpecialty" required onChange={handleChange}>
                    <option value="">Select specialty</option>
                    {SPECIALTIES.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div className="form-group full">
                  <label htmlFor="drPractice">Practice / Office Name *</label>
                  <input id="drPractice" name="drPractice" type="text" required onChange={handleChange} />
                </div>
              </div>

              {/* Patient info */}
              <p className="form-section-title">Patient Information</p>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="ptFirstName">Patient First Name *</label>
                  <input id="ptFirstName" name="ptFirstName" type="text" required onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="ptLastName">Patient Last Name *</label>
                  <input id="ptLastName" name="ptLastName" type="text" required onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="ptPhone">Patient Phone *</label>
                  <input id="ptPhone" name="ptPhone" type="tel" required onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="ptDob">Date of Birth</label>
                  <input id="ptDob" name="ptDob" type="date" onChange={handleChange} />
                </div>
                <div className="form-group full">
                  <label htmlFor="ptEmail">Patient Email</label>
                  <input id="ptEmail" name="ptEmail" type="email" onChange={handleChange} />
                </div>
              </div>

              {/* Referral details */}
              <p className="form-section-title">Referral Details</p>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="reason">Reason for Referral *</label>
                  <select id="reason" name="reason" required onChange={handleChange}>
                    <option value="">Select reason</option>
                    {REFERRAL_REASONS.map(r => <option key={r}>{r}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="urgency">Urgency</label>
                  <select id="urgency" name="urgency" onChange={handleChange}>
                    <option value="">Routine</option>
                    <option>Urgent (within 1 week)</option>
                    <option>Emergency</option>
                  </select>
                </div>
                <div className="form-group full">
                  <label htmlFor="notes">Clinical Notes / Additional Information</label>
                  <textarea id="notes" name="notes" rows="4" placeholder="Please describe the patient's condition, relevant history, or any special instructions..." onChange={handleChange} />
                </div>
              </div>

              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button type="submit" className="btn btn-primary">
                  <i className="fas fa-paper-plane"></i> Submit Referral
                </button>
                <span style={{ fontSize: '.83rem', color: 'var(--muted)', alignSelf: 'center' }}>
                  * Required fields. Our team will reach out to your patient within 1 business day.
                </span>
              </div>
            </form>
          </div>

          <div style={{ marginTop: '2.5rem', textAlign: 'center', padding: '1.5rem', background: 'var(--teal-light)', borderRadius: '12px' }}>
            <p style={{ color: 'var(--teal-dark)', fontWeight: 600, marginBottom: '.4rem' }}>
              Prefer to call or fax?
            </p>
            <p style={{ color: 'var(--ink-soft)', fontSize: '.92rem' }}>
              Phone: <a href="tel:2103325335" style={{ color: 'var(--teal)', fontWeight: 700 }}>(210) 332-5335</a>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              Fax: (210) 555-0199
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
