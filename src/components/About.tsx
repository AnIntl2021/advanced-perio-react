import drFamily2     from '../assets/dr-family-2.jpeg';
import drDds         from '../assets/dr-dds.png';
import drCommunity   from '../assets/dr-community.jpg';
import drPresentation from '../assets/dr-presentation.png';
import Sidebar       from './Sidebar';

export default function About() {
  const modalities = [
    'Regeneration',
    'Dental Implants',
    'Esthetic Plastic Periodontal Surgery',
    'Gum Disease',
    'Wisdom Teeth',
    'Dental Endoscopy (PerioView®)'
  ];

  const affiliations = [
    'American Academy of Periodontology (AAP)',
    'American Board of Periodontology (ABP)',
    'American Dental Association (ADA)',
    'South West Society of Periodontology (SWSP)',
    'Texas Society of Periodontology (TSP)',
    'Adjunct Professor UT Health San Antonio, School of Dentistry'
  ];

  return (
    <div>
      {/* ── PREMIUM HERO BANNER ───────────────────────────────────── */}
      <section style={{
        background: 'linear-gradient(135deg, #0a1628 0%, var(--teal-dark) 50%, #0d9488 100%)',
        padding: '5rem 0 4rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative blobs */}
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(13,148,136,0.18)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '10%', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />

        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '3rem', alignItems: 'center' }}>

            {/* Left: text */}
            <div>
              <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '1rem' }}>
                Our Practice
              </span>
              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: 'var(--white)', lineHeight: '1.08', fontWeight: 600, marginBottom: '1.25rem' }}>
                Meet Dr.<br />Houssam Alghadban
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.75)', lineHeight: '1.7', maxWidth: '480px', marginBottom: '2rem' }}>
                Board-certified periodontist with 15+ years of specialty care in San Antonio, TX — dedicated to advanced gum health and beautiful smiles.
              </p>

              {/* Credential chips */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {['AAP Member', 'ABP Diplomate', 'ADA Member', 'UT Health Adjunct Prof.'].map(badge => (
                  <span key={badge} style={{
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '50px',
                    padding: '0.35rem 0.95rem',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.9)',
                    backdropFilter: 'blur(8px)'
                  }}>{badge}</span>
                ))}
              </div>

              {/* Stats row */}
              <div style={{ display: 'flex', gap: '2.5rem', marginTop: '2.5rem' }}>
                {[['15+', 'Years Experience'], ['1000+', 'Implants Placed'], ['2', 'Locations']].map(([num, label]) => (
                  <div key={label}>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 700, color: 'var(--white)', lineHeight: 1 }}>{num}</div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.25rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: doctor photo */}
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <div style={{
                width: '260px',
                height: '320px',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 24px 60px rgba(0,0,0,0.45)',
                border: '3px solid rgba(255,255,255,0.15)'
              }}>
                <img
                  src={drDds}
                  alt="Dr. Houssam Alghadban"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
              {/* Floating badge */}
              <div style={{
                position: 'absolute',
                bottom: '-16px',
                left: '-20px',
                background: 'var(--white)',
                borderRadius: '12px',
                padding: '0.65rem 1rem',
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <i className="fas fa-award" style={{ color: 'var(--teal)', fontSize: '1.1rem' }}></i>
                <div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--navy)', letterSpacing: '0.04em' }}>BOARD CERTIFIED</div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--muted)' }}>Periodontist</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Wave bottom */}
        <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0, height: '56px', background: 'var(--white)', clipPath: 'ellipse(55% 100% at 50% 100%)' }} />
      </section>

      {/* ── MAIN CONTENT & SIDEBAR ───────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="inner-page-layout">
            
            {/* Left Content */}
            <div className="inner-page-layout__main">
              {/* Heading + family photo side-by-side */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'center', marginBottom: '2.5rem' }}>
                <div>
                  <h2 className="section-title" style={{ fontFamily: 'var(--font-serif)', color: 'var(--teal)', marginBottom: '1.25rem' }}>
                    Meet The Periodontist
                  </h2>
                  <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--ink-soft)', margin: 0 }}>
                    At our practice, we specialize in providing advanced gum treatment services utilizing the latest technologies. Our founder, Dr. Houssam Alghadban, is a highly skilled and board-certified periodontist with over 15 years of experience in San Antonio.
                  </p>
                </div>
                <div>
                  <img
                    src={drFamily2}
                    alt="Dr. Al with his family"
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '16px',
                      boxShadow: 'var(--shadow-md)',
                      display: 'block'
                    }}
                  />

                </div>
              </div>

              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--teal)', marginBottom: '1rem', marginTop: '2rem' }}>
                Expertise in Contemporary Modalities
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                Dr. Alghadban is proficient in all the contemporary nonsurgical and surgical gum treatment modalities. These include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.45rem 2rem', listStyle: 'none', paddingLeft: 0, marginBottom: '2.5rem', marginTop: '1rem' }}>
                {modalities.map(m => (
                  <li key={m} style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.95rem', color: 'var(--ink-soft)', padding: '0.3rem 0' }}>
                    <i className="fas fa-check-circle" style={{ color: 'var(--teal)', flexShrink: 0, fontSize: '0.9rem' }}></i>
                    {m}
                  </li>
                ))}
              </ul>

              {/* Profile Block */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '2.5rem', alignItems: 'start', marginTop: '2.5rem', borderTop: '1px solid var(--border)', paddingTop: '2.5rem' }}>

                {/* Left: Doctor photo — full, not cropped */}
                <div>
                  <img
                    src={drDds}
                    alt="Dr. Houssam Alghadban, DDS"
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '16px',
                      boxShadow: 'var(--shadow-md)',
                      display: 'block'
                    }}
                  />
                </div>

                {/* Right: Name + bio */}
                <div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.65rem', color: 'var(--teal)', margin: '0 0 0.25rem' }}>
                    Dr. Houssam Alghadban, DDS
                  </h3>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.5rem' }}>
                    Board-Certified Periodontist
                  </h4>

                  <h4 style={{ fontSize: '1.15rem', color: 'var(--teal)', marginBottom: '0.75rem' }}>Profile</h4>
                  <p style={{ lineHeight: '1.75', color: 'var(--ink-soft)', marginBottom: '1.25rem' }}>
                    Dr. Houssam Alghadban, also known as Dr. Al, has been practicing dentistry since 2001. He specializes in periodontology, oral plastic surgery, and dental implants. After his exposure to different specialties, he decided to do a three years intensive postdoctoral program in Periodontology. Dr. Al was accepted at Louisiana State University, School of Dentistry in the periodontics postdoctoral program. This course focused on the clinical treatment of patients and research activities.
                  </p>
                  <p style={{ lineHeight: '1.75', color: 'var(--ink-soft)' }}>
                    Dr. Al has been providing specialty dental care services in San Antonio, Texas for more than 15 years. When he is not at the office, Dr. Al enjoys spending quality time with his wife, Nour, and daughters, Talia, Alma and Luna.
                  </p>
                </div>
              </div>

              {/* Memberships Block — text left, presentation photo right */}
              <div style={{ marginTop: '3rem', borderTop: '1px solid var(--border)', paddingTop: '2.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', color: 'var(--teal)', marginBottom: '0.75rem' }}>
                      Recognized Memberships &amp; Teaching Experience
                    </h3>
                    <p style={{ fontSize: '0.95rem', lineHeight: '1.75', color: 'var(--ink-soft)', marginBottom: '1.25rem' }}>
                      Dr. Alghadban holds memberships in esteemed organizations, such as the American Academy of Periodontology (AAP), American Board of Periodontology (ABP), American Dental Association (ADA), South West Society of Periodontology (SWSP), and Texas Society of Periodontology (TSP). He also shares his expertise by serving as an adjunct professor at UT Health San Antonio School of Dentistry.
                    </p>
                    <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                      {affiliations.map(a => (
                        <li key={a} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 0', borderBottom: '1px solid #f3f4f6', fontSize: '0.92rem', color: 'var(--ink-soft)' }}>
                          <i className="fas fa-certificate" style={{ color: 'var(--teal)', fontSize: '0.8rem', flexShrink: 0 }}></i>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <img
                      src={drPresentation}
                      alt="Dr. Al presenting at clinical conference"
                      style={{ width: '100%', height: 'auto', borderRadius: '14px', boxShadow: 'var(--shadow-md)', display: 'block' }}
                    />
                  </div>
                </div>
              </div>


              {/* Community Involvement Block */}
              <div style={{ marginTop: '3rem', borderTop: '1px solid var(--border)', paddingTop: '2.5rem', marginBottom: '2rem' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', color: 'var(--teal)', marginBottom: '1.5rem' }}>
                  Community Involvement
                </h3>
                {/* Card: image left, text right */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1.4fr',
                  gap: '2rem',
                  alignItems: 'center',
                  background: 'linear-gradient(135deg, var(--teal-light) 0%, #f0fdfa 100%)',
                  borderRadius: '16px',
                  padding: '2rem',
                  border: '1px solid rgba(13,148,136,0.12)'
                }}>
                  <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                    <img
                      src={drCommunity}
                      alt="Dr. Al with team in Southeast Asia"
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--teal-dark)', lineHeight: '1.25', marginBottom: '1rem' }}>
                      Committed to Our Community
                    </h4>
                    <p style={{ fontSize: '0.97rem', lineHeight: '1.8', color: 'var(--ink-soft)', margin: 0 }}>
                      Giving back to our community is important to us. Dr. Alghadban proudly participated in a missionary outreach with <strong>Smile for Everyone Foundation</strong> and <strong>iServe Foundation</strong>, providing essential dental and periodontal care to over 1,000 patients in underserved areas of Thailand and Laos (03/2019).
                    </p>
                  </div>
                </div>
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

