import { Link } from 'react-router-dom';
import svcImplants     from '../assets/dental_implants.webp';
import svcGumDisease   from '../assets/gum_disease_treament.webp';
import svcDeepCleaning from '../assets/deep_cleaning.webp';
import svcGumGrafting  from '../assets/gum_grafting.webp';
import svcContouring   from '../assets/gum_contouring.webp';
import svcRootCoverage from '../assets/root_coverage_treatment.webp';
import svcDentures     from '../assets/dentures.webp';
import svcSedation     from '../assets/sedation_dentistry.webp';
import svcCrown        from '../assets/crown_lengthening.webp';
import svcWisdom       from '../assets/wisdom_tooth_removal.webp';
import svcPerioView    from '../assets/perioview_endoscope.png';

const SERVICES = [
  {
    img: svcImplants,
    title: 'Dental Implants',
    desc: 'The gold standard for tooth replacement. Dental implants are titanium posts surgically placed into the jawbone that provide a permanent, natural-looking foundation for replacement teeth. Dr. Al has placed thousands of implants, from single-tooth to full-arch restorations using cutting-edge systems.',
    reverse: false,
  },
  {
    img: svcGumDisease,
    title: 'Gum Disease Treatment',
    desc: 'Periodontal (gum) disease is the leading cause of tooth loss in adults. From early-stage gingivitis to advanced periodontitis, our team provides comprehensive, evidence-based treatment to stop the infection, restore your gum health, and protect your teeth for the long term.',
    reverse: true,
  },
  {
    img: svcDeepCleaning,
    title: 'Deep Cleaning (Scaling & Root Planing)',
    desc: 'When regular cleanings are no longer enough, deep cleaning removes tartar and bacterial deposits below the gumline. Scaling and root planing smooths root surfaces to help gums reattach and discourage future buildup, often combined with localized antibiotic therapy for optimal results.',
    reverse: false,
  },
  {
    img: svcGumGrafting,
    title: 'Gum Grafting',
    desc: 'Exposed tooth roots caused by gum recession can lead to sensitivity, decay, and bone loss. Soft-tissue grafting using advanced donor or your own tissue restores the gumline, covers exposed roots, and prevents further recession — improving both health and appearance.',
    reverse: true,
  },
  {
    img: svcContouring,
    title: 'Gum Contouring',
    desc: 'An uneven or "gummy" smile can be corrected with precise esthetic gum contouring. Dr. Al reshapes and repositions gum tissue to create a more symmetrical, balanced smile — often with minimal downtime thanks to laser-assisted techniques.',
    reverse: false,
  },
  {
    img: svcRootCoverage,
    title: 'Root Coverage / Gum Grafting',
    desc: 'Our connective tissue grafting and advanced root coverage procedures restore lost gum tissue, protect sensitive roots, and dramatically improve smile esthetics. Multiple teeth can often be treated in a single visit.',
    reverse: true,
  },
  {
    img: svcDentures,
    title: 'Implant Supported Dentures',
    desc: 'Tired of loose, uncomfortable dentures? Implant-supported dentures use strategically placed implants to anchor your prosthesis securely, eliminating slipping and allowing you to eat and speak with confidence. Available for upper, lower, or both arches.',
    reverse: false,
  },
  {
    img: svcSedation,
    title: 'Sedation Dentistry',
    desc: 'For patients who experience dental anxiety, we offer safe and effective sedation options to ensure your comfort throughout treatment. Our team will discuss the best sedation approach for your needs so you can receive the care you deserve without fear or discomfort.',
    reverse: true,
  },
  {
    img: svcCrown,
    title: 'Crown Lengthening',
    desc: 'Crown lengthening exposes more of the tooth structure by removing excess gum and sometimes bone tissue. This procedure is essential for placing a crown on a broken or decayed tooth at the gumline, and is also used for esthetic gum recontouring.',
    reverse: false,
  },
  {
    img: svcWisdom,
    title: 'Wisdom Tooth Removal',
    desc: 'Wisdom teeth that are impacted, misaligned, or causing crowding need to be removed to protect neighboring teeth and prevent infection. Dr. Al performs comfortable, efficient extractions using the latest surgical techniques for a smooth recovery.',
    reverse: true,
  },
  {
    img: svcPerioView,
    title: 'PerioView® Dental Endoscope',
    desc: 'At the heart of PerioView’s imaging power is a precision-engineered digital camera just 1mm in diameter, designed to navigate comfortably into the periodontal pocket. This advanced fiber system combines high-intensity illumination and up to 100x magnification to provide crystal-clear, real-time imaging on an HD touchscreen monitor. An integrated water delivery system continuously flushes debris, enabling Dr. Al to visualize and treat subgingival areas with unmatched precision and minimal patient discomfort.',
    reverse: false,
    externalLink: 'https://perio-view.com',
  },
];

export default function Services() {
  return (
    <div>
      {/* ── PAGE HEADER ──────────────────────────────────────────── */}
      <section className="page-header">
        <div className="container page-header__inner">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,.7)' }}>Periodontal Care</span>
          <h1>Our Services</h1>
          <p>
            Dental implants, gum therapy, and advanced periodontal treatment tailored to your smile.
          </p>
        </div>
      </section>

      {/* ── SERVICES LIST ─────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="services-list">
            {SERVICES.map(({ img, title, desc, reverse, externalLink }) => (
              <div key={title} className={`service-row${reverse ? ' reverse' : ''}`}>
                <img src={img} alt={title} className="service-row__img" />
                <div className="service-row__body">
                  <span className="eyebrow">Our Service</span>
                  <h2>{title}</h2>
                  <p>{desc}</p>
                  <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                    <Link to="/contact-us" className="btn btn-primary btn-sm">
                      Schedule Consultation <i className="fas fa-arrow-right"></i>
                    </Link>
                    {externalLink && (
                      <a href={externalLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                        Visit Website <i className="fas fa-external-link-alt"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <span className="eyebrow" style={{ color: 'var(--gold)' }}>Get started</span>
          <h2>Not Sure Which Treatment You Need?</h2>
          <p>
            Contact us to schedule a comprehensive periodontal evaluation. Dr. Al
            will review your case and recommend the best treatment plan for you.
          </p>
          <div className="cta-banner__actions">
            <Link to="/contact-us" className="btn btn-gold">
              <i className="fas fa-calendar-check"></i> Schedule Evaluation
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
