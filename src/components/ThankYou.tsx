import { Link } from 'react-router-dom';

export default function ThankYou() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8rem 0', minHeight: '60vh', background: 'var(--off-white)' }}>
      <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
        <div style={{ 
          width: '72px', 
          height: '72px', 
          background: 'var(--teal-light)', 
          color: 'var(--teal)', 
          borderRadius: '50%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          fontSize: '2rem', 
          margin: '0 auto 1.5rem',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <i className="fas fa-check-circle"></i>
        </div>
        
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--navy)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Thank You
        </h1>
        
        <p style={{ fontSize: '1.15rem', color: 'var(--ink-soft)', lineHeight: '1.7', marginBottom: '2.5rem' }}>
          Thanks! We received your form and we will get in touch with you shortly.
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">
            Go To Home
          </Link>
          <Link to="/services" className="btn btn-outline">
            View Our Services
          </Link>
        </div>
      </div>
    </div>
  );
}
