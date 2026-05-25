import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../utils/blogData';
import Sidebar from './Sidebar';

export default function Blog() {
  return (
    <div>
      {/* ── PAGE HEADER ──────────────────────────────────────────── */}
      <section className="page-header">
        <div className="container page-header__inner">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,.7)' }}>Educational Resources</span>
          <h1>Our Blog</h1>
        </div>
      </section>

      {/* ── MAIN CONTENT & SIDEBAR ───────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="inner-page-layout">
            
            {/* Left Content */}
            <div className="inner-page-layout__main">
              <h2 className="section-title" style={{ fontFamily: 'var(--font-serif)', color: 'var(--gold)', marginBottom: '2rem' }}>
                Latest Articles
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {BLOG_POSTS.map(post => (
                  <article 
                    key={post.slug} 
                    style={{ 
                      background: 'var(--white)', 
                      border: '1px solid var(--border)', 
                      borderRadius: '12px', 
                      padding: '2rem', 
                      boxShadow: 'var(--shadow-sm)',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                    }}
                    className="blog-card-hover"
                  >
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem', fontSize: '0.85rem', color: 'var(--muted)' }}>
                      <span><i className="far fa-calendar-alt"></i> {post.date}</span>
                      <span>•</span>
                      <span><i className="far fa-user"></i> By Dr. Houssam Alghadban</span>
                    </div>
                    
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--teal)', marginBottom: '1rem', lineHeight: '1.3' }}>
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p style={{ fontSize: '0.95rem', color: 'var(--ink-soft)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                      {post.excerpt}
                    </p>
                    
                    <Link to={`/blog/${post.slug}`} className="btn btn-outline btn-sm">
                      Read Full Article <i className="fas fa-arrow-right"></i>
                    </Link>
                  </article>
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
