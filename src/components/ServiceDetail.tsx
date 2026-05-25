import { useParams, Link, useLocation } from 'react-router-dom';
import { SERVICE_DETAILS } from '../utils/serviceDetails';
import Sidebar from './Sidebar';

export default function ServiceDetail() {
  const { slug } = useParams();
  const { pathname } = useLocation();

  // Handle special root route "/jaw-bone-augmentation-sinus-lift"
  let currentSlug = slug || '';
  if (pathname.includes('/jaw-bone-augmentation-sinus-lift')) {
    currentSlug = 'jaw-bone-augmentation-sinus-lift';
  }

  const detail = SERVICE_DETAILS[currentSlug];

  if (!detail) {
    return (
      <div style={{ padding: '8rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2>Service Not Found</h2>
          <p style={{ margin: '1rem 0 2rem', color: 'var(--muted)' }}>
            The requested treatment information page could not be found.
          </p>
          <Link to="/services" className="btn btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* ── PAGE HEADER ──────────────────────────────────────────── */}
      <section className="page-header">
        <div className="container page-header__inner">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,.7)' }}>Periodontal Treatment</span>
          <h1>{detail.title}</h1>
        </div>
      </section>

      {/* ── MAIN CONTENT & SIDEBAR ───────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="inner-page-layout">
            
            {/* Left Content */}
            <div className="inner-page-layout__main">

              {/* Header image inside the content column, above the title */}
              {detail.headerImage && (
                <div style={{ marginBottom: '1.75rem', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.10)', border: '1px solid var(--border)' }}>
                  <img
                    src={detail.headerImage}
                    alt={detail.title}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
              )}

              <h2 className="section-title" style={{ fontFamily: 'var(--font-serif)', color: 'var(--gold)', marginBottom: '1.5rem' }}>
                {detail.title}
              </h2>
              
              {detail.intro && (
                <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--teal-dark)', fontWeight: 500, marginBottom: '2.5rem', borderLeft: '3px solid var(--teal)', paddingLeft: '1.25rem' }}>
                  {detail.intro}
                </p>
              )}


              <div className="service-sections">
                {detail.sections.map((sect, idx) => (
                  <div key={idx} style={{ marginBottom: '2.5rem' }}>
                    {sect.heading && (
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', color: 'var(--teal)', marginBottom: '1rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>
                        {sect.heading}
                      </h3>
                    )}
                    
                    {sect.image && (
                      <div className="service-section__image-wrapper" style={{ margin: '1.5rem 0 2rem', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid var(--border)', maxWidth: '500px' }}>
                        <img src={sect.image} alt={sect.imageAlt || sect.heading} style={{ width: '100%', height: 'auto', display: 'block' }} />
                      </div>
                    )}

                    {sect.content.map((para, pIdx) => (
                      <p key={pIdx} style={{ fontSize: '0.98rem', lineHeight: '1.75', color: 'var(--ink-soft)', marginBottom: '1rem' }}>
                        {para}
                      </p>
                    ))}

                    {sect.list && (
                      <div style={{ margin: '1.5rem 0 2rem 1.5rem' }}>
                        {sect.list.type === 'ordered' ? (
                          <ol style={{ listStyleType: 'decimal', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {sect.list.items.map((item, iIdx) => (
                              <li key={iIdx} style={{ fontSize: '1rem', lineHeight: '1.75', color: 'var(--ink-soft)' }}>
                                {item}
                              </li>
                            ))}
                          </ol>
                        ) : (
                          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {sect.list.items.map((item, iIdx) => (
                              <li key={iIdx} style={{ fontSize: '1rem', lineHeight: '1.75', color: 'var(--ink-soft)' }}>
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Action Buttons at the bottom */}
              <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem', flexWrap: 'wrap', borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
                <Link to="/contact-us" className="btn btn-primary">
                  <i className="fas fa-calendar-check"></i> Book Consultation
                </Link>
                <Link to="/services" className="btn btn-outline">
                  <i className="fas fa-arrow-left"></i> All Services
                </Link>
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
