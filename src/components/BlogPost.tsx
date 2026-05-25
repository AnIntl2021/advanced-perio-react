import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../utils/blogData';
import Sidebar from './Sidebar';

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <div style={{ padding: '8rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2>Article Not Found</h2>
          <p style={{ margin: '1rem 0 2rem', color: 'var(--muted)' }}>
            The requested blog post could not be found.
          </p>
          <Link to="/blog" className="btn btn-primary">
            Back to Blog
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
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,.7)' }}>Dental Health Articles</span>
          <h1>Blog Post</h1>
        </div>
      </section>

      {/* ── MAIN CONTENT & SIDEBAR ───────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="inner-page-layout">
            
            {/* Left Content */}
            <div className="inner-page-layout__main">
              <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--teal)', fontWeight: 600, marginBottom: '1.5rem' }}>
                <i className="fas fa-arrow-left"></i> Back to Blog
              </Link>
              
              <h2 className="section-title" style={{ fontFamily: 'var(--font-serif)', color: 'var(--gold)', marginBottom: '0.5rem', lineHeight: '1.25' }}>
                {post.title}
              </h2>
              
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2.5rem', fontSize: '0.85rem', color: 'var(--muted)' }}>
                <span><i className="far fa-calendar-alt"></i> {post.date}</span>
                <span>•</span>
                <span><i className="far fa-user"></i> By Dr. Houssam Alghadban</span>
              </div>

              {post.image && (
                <div style={{ marginBottom: '2.5rem', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border)' }}>
                  <img src={post.image} alt={post.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
              )}

              <div className="blog-post-content" style={{ lineHeight: '1.8', color: 'var(--ink-soft)' }}>
                {post.content.map((line, idx) => {
                  const trimmed = line.trim();
                  
                  // Heuristic to check if a line is a sub-heading inside the blog post
                  const isHeading = trimmed.length < 80 && 
                                    !trimmed.endsWith('.') && 
                                    !trimmed.endsWith('!') && 
                                    (trimmed.includes('Procedure') || trimmed.includes('Longevity') || trimmed.includes('Conclusion') || trimmed.includes('Vs') || trimmed.includes('Maxim') || trimmed.includes('Myth') || trimmed.startsWith('Connection') || trimmed.startsWith('Factors') || trimmed.startsWith('Typical') || trimmed.startsWith('How to'));
                                    
                  if (isHeading) {
                    return (
                      <h3 
                        key={idx} 
                        style={{ 
                          fontFamily: 'var(--font-serif)', 
                          fontSize: '1.4rem', 
                          color: 'var(--teal)', 
                          marginTop: '2.5rem', 
                          marginBottom: '1rem', 
                          borderBottom: '1px solid var(--border)', 
                          paddingBottom: '0.5rem' 
                        }}
                      >
                        {trimmed}
                      </h3>
                    );
                  }
                  
                  return (
                    <p key={idx} style={{ marginBottom: '1.25rem', fontSize: '1rem' }}>
                      {trimmed}
                    </p>
                  );
                })}
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '3.5rem', borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
                <Link to="/contact-us" className="btn btn-primary">
                  <i className="fas fa-calendar-check"></i> Book Consultation
                </Link>
                <Link to="/blog" className="btn btn-outline">
                  <i className="fas fa-arrow-left"></i> More Articles
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
