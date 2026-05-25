import Sidebar from './Sidebar';
import techEndoscope from '../assets/perioview_endoscope.png';

export default function Technology() {
  const technologies = [
    {
      title: 'PerioView® Dental Endoscope',
      desc: 'At the heart of our diagnostic power is a precision-engineered digital camera just 1mm in diameter, designed to navigate comfortably into the periodontal pocket. This advanced fiber system combines high-intensity illumination and up to 100x magnification to provide crystal-clear, real-time imaging on an HD touchscreen monitor. An integrated water delivery system continuously flushes debris, enabling Dr. Al to visualize and treat subgingival areas with unmatched precision and minimal patient discomfort.',
      img: techEndoscope,
      specLink: 'https://perio-view.com'
    },
    {
      title: 'Cone Beam 3D CT Scans (CBCT)',
      desc: 'For dental implants and bone grafting procedures, precision is everything. Our advanced 3D CBCT imaging provides highly detailed, three-dimensional views of your jawbone, teeth, and surrounding anatomical structures. This allows Dr. Al to pre-plan implant placement digitally with sub-millimeter accuracy, ensuring optimal safety, efficiency, and predictability.',
      img: null
    },
    {
      title: 'Intraoral Cameras & Digital Impressions',
      desc: 'Say goodbye to messy, uncomfortable impressions. We use high-definition digital intraoral cameras and scanners to capture precise 3D models of your teeth and gums. These digital scans are more comfortable for patients, transmit instantly to dental laboratories for faster restoration fabrication, and show you exactly what Dr. Al sees in real-time.',
      img: null
    }
  ];

  return (
    <div>
      {/* ── PAGE HEADER ──────────────────────────────────────────── */}
      <section className="page-header">
        <div className="container page-header__inner">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,.7)' }}>Advanced Care</span>
          <h1>Our Technology</h1>
        </div>
      </section>

      {/* ── MAIN CONTENT & SIDEBAR ───────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="inner-page-layout">
            
            {/* Left Content */}
            <div className="inner-page-layout__main">
              <h2 className="section-title" style={{ fontFamily: 'var(--font-serif)', color: 'var(--gold)', marginBottom: '1.5rem' }}>
                Advanced Clinical Technology
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--ink-soft)', marginBottom: '2.5rem' }}>
                By investing in state-of-the-art diagnostic and surgical equipment, we ensure that your periodontal care is minimally invasive, highly precise, and extremely comfortable. Explore the innovative systems we use to safeguard your smile.
              </p>

              <div className="tech-list" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                {technologies.map((tech, idx) => (
                  <div key={idx} style={{ display: 'grid', gridTemplateColumns: tech.img ? '1fr' : '1fr', gap: '1.5rem', borderBottom: idx < technologies.length - 1 ? '1px solid var(--border)' : 'none', paddingBottom: '2.5rem' }}>
                    {tech.img && (
                      <div style={{ maxWidth: '400px', margin: '0 auto 1rem', border: '1px solid var(--border)', borderRadius: '12px', padding: '0.75rem', background: 'var(--off-white)' }}>
                        <img src={tech.img} alt={tech.title} style={{ borderRadius: '8px', width: '100%', height: 'auto', objectFit: 'contain' }} />
                      </div>
                    )}
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', color: 'var(--teal)', marginBottom: '0.75rem' }}>
                        {tech.title}
                      </h3>
                      <p style={{ fontSize: '0.98rem', lineHeight: '1.7', color: 'var(--ink-soft)' }}>
                        {tech.desc}
                      </p>
                      {tech.specLink && (
                        <div style={{ marginTop: '1rem' }}>
                          <a href={tech.specLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                            Learn More About PerioView <i className="fas fa-external-link-alt"></i>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="inner-page-layout__sidebar">
              <Sidebar />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
