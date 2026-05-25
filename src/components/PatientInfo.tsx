import Sidebar from './Sidebar';

export default function PatientInfo() {
  const hours = [
    { day: 'Monday', time: '8:30 AM – 5:00 PM' },
    { day: 'Tuesday', time: '8:30 AM – 5:00 PM' },
    { day: 'Wednesday', time: '8:30 AM – 5:00 PM' },
    { day: 'Thursday', time: '8:30 AM – 5:00 PM' },
    { day: 'Friday', time: '8:00 AM – 3:00 PM' },
    { day: 'Saturday', time: 'Closed' },
    { day: 'Sunday', time: 'Closed' }
  ];

  return (
    <div>
      {/* ── PAGE HEADER ──────────────────────────────────────────── */}
      <section className="page-header">
        <div className="container page-header__inner">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,.7)' }}>Your Visit</span>
          <h1>Patient Information</h1>
          <p>
            Download your registration forms and view our office hours and locations.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT & SIDEBAR ───────────────────────────────── */}
      <section className="section" style={{ background: '#fcfbf9' }}>
        <div className="container">
          <div className="inner-page-layout" style={{ gap: '3.5rem' }}>
            
            {/* Left Column: Content */}
            <div className="inner-page-layout__main" style={{ paddingRight: '1rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              
              {/* Patient Form Card */}
              <div style={{
                background: 'var(--white)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                padding: '3rem 2.5rem',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                alignItems: 'flex-start',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Accent Gradient Border */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '4px',
                  height: '100%',
                  background: 'var(--teal)'
                }} />

                <div>
                  <span className="eyebrow" style={{ color: 'var(--teal)' }}>Forms & Downloads</span>
                  <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '0', color: 'var(--navy)', fontSize: '1.85rem' }}>
                    New Patient Registration
                  </h2>
                </div>

                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '12px',
                    background: 'var(--teal-light)',
                    color: 'var(--teal)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.8rem',
                    flexShrink: 0
                  }}>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                  <p style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.8',
                    color: 'var(--ink-soft)',
                    margin: 0
                  }}>
                    To expedite your first visit, please download our Patient Information PDF, complete it, and return it to our office before your appointment. This allows Dr. Alghadban to better understand your dental and medical history and develop a tailored treatment plan.
                  </p>
                </div>

                <div style={{ width: '100%', borderTop: '1px solid var(--border)', paddingTop: '2rem', display: 'flex', justifyContent: 'flex-start' }}>
                  <a
                    href="/New-Patient-Forms.pdf"
                    download="New-Patient-Forms.pdf"
                    className="btn btn-primary"
                    style={{
                      padding: '0.95rem 2.2rem',
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.65rem'
                    }}
                  >
                    <i className="fas fa-download"></i>
                    Download Patient Form
                  </a>
                </div>
              </div>

              {/* Office Hours Table below Download Card */}
              <div style={{
                background: 'var(--white)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                padding: '2.5rem 2.5rem',
                boxShadow: 'var(--shadow-md)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '4px',
                  height: '100%',
                  background: 'var(--teal)'
                }} />

                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <i className="far fa-clock" style={{ color: 'var(--teal)' }}></i> Office Hours
                </h3>
                
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                  <tbody>
                    {hours.map(({ day, time }) => (
                      <tr key={day} style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '0.65rem 0', fontWeight: 600, color: 'var(--ink)' }}>{day}</td>
                        <td style={{ padding: '0.65rem 0', textAlign: 'right', color: time === 'Closed' ? 'var(--muted)' : 'var(--teal)', fontWeight: time !== 'Closed' ? 600 : 400 }}>{time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>

            {/* Right Column: Sidebar */}
            <div className="inner-page-layout__sidebar">
              <Sidebar showHours={false} />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

