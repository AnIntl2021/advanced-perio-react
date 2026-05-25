import { Link } from 'react-router-dom';

const HOURS = [
  ['Mon', '8:30 AM – 5:00 PM'],
  ['Tue', '8:30 AM – 5:00 PM'],
  ['Wed', '8:30 AM – 5:00 PM'],
  ['Thu', '8:30 AM – 5:00 PM'],
  ['Fri', '8:00 AM – 3:00 PM'],
  ['Sat', 'Closed'],
  ['Sun', 'Closed'],
];

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__brand">
              <div className="footer__socials">
                <a href="https://www.facebook.com/Advancedperiosa" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/advancedperiosa/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.tiktok.com/@advancedperiosa" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <i className="fab fa-tiktok"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCtfAXezKKXPcSKQ24DuFbMA" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>

            {/* San Antonio */}
            <div className="footer__col">
              <h4>San Antonio</h4>
              <address>
                9480 Huebner Rd Ste 300<br />
                San Antonio, TX 78240
              </address>
              <p><a href="tel:2103325335">(210) 332-5335</a></p>
            </div>

            {/* Schertz */}
            <div className="footer__col">
              <h4>Schertz</h4>
              <address>
                1996 Schertz Pkwy #103<br />
                Schertz, TX 78154
              </address>
              <p><a href="tel:2103325335">(210) 332-5335</a></p>
            </div>

            {/* Hours */}
            <div className="footer__col">
              <h4>Office Hours</h4>
              <ul className="footer__hours" style={{ listStyle: 'none' }}>
                {HOURS.map(([day, time]) => (
                  <li key={day}>
                    <span>{day}</span>
                    <span style={{ color: time === 'Closed' ? 'rgba(255,255,255,.35)' : 'rgba(255,255,255,.75)' }}>
                      {time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer__bottom">
            <span>&copy; {new Date().getFullYear()} Advanced Periodontics &amp; Dental Implants. All Rights Reserved.</span>
            <span>
              <Link to="/patient-info" style={{ marginRight: '1rem' }}>Patient Info</Link>
              <Link to="/contact-us">Contact Us</Link>
            </span>
          </div>
        </div>
      </footer>

      {/* Mobile sticky CTA */}
      <div className="sticky-cta">
        <span><i className="fas fa-tooth" style={{ marginRight: '.4rem' }}></i> Ready for a healthier smile?</span>
        <a href="tel:2103325335">Call Now</a>
      </div>
    </>
  );
}
