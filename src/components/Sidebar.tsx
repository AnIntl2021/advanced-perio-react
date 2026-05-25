import { Link } from 'react-router-dom';
import { PHONE_NUMBER, PHONE_URI } from '../utils/constants';

interface SidebarProps {
  showHours?: boolean;
}

export default function Sidebar({ showHours = false }: SidebarProps) {
  const hours = [
    { day: 'MON', time: '8:30 AM – 5:00 PM' },
    { day: 'TUE', time: '8:30 AM – 5:00 PM' },
    { day: 'WED', time: '8:30 AM – 5:00 PM' },
    { day: 'THU', time: '8:30 AM – 5:00 PM' },
    { day: 'FRI', time: '8:00 AM – 3:00 PM' },
    { day: 'SAT', time: 'CLOSED' },
    { day: 'SUN', time: 'CLOSED' }
  ];

  return (
    <aside className="sidebar-widget">
      {/* Head section */}
      <div className="sidebar-widget__title-box">
        <h3>Healthy Gums</h3>
        <h4>Beautiful Smiles</h4>
      </div>

      {/* Buttons */}
      <div className="sidebar-widget__buttons">
        <Link to="/about" className="sidebar-btn">
          MEET THE DOCTOR
        </Link>
        <Link to="/patient-info" className="sidebar-btn">
          PATIENT INFORMATION
        </Link>
        <Link to="/contact-us" className="sidebar-btn">
          CONTACT US
        </Link>
      </div>

      {/* Address & Hours Box */}
      <div className="sidebar-widget__info-card">
        <div className="info-card__brand">
          ADVANCED
          <span>PERIODONTICS &amp; DENTAL IMPLANTS</span>
        </div>

        <a href={PHONE_URI} className="info-card__phone-btn">
          {PHONE_NUMBER}
        </a>

        <div className="info-card__locations">
          <div className="info-card__location">
            <i className="fas fa-map-marker-alt"></i>
            <p>
              <strong>Schertz Office</strong>
              1996 Schertz Parkway # 103<br />
              Schertz, TX 78154
            </p>
          </div>
          <div className="info-card__location">
            <i className="fas fa-map-marker-alt"></i>
            <p>
              <strong>San Antonio Office</strong>
              9480 Huebner Rd Ste 300<br />
              San Antonio, TX 78240
            </p>
          </div>
        </div>

        {showHours && (
          <>
            <div className="info-card__hours-title">
              <i className="far fa-clock"></i> Office Hours
            </div>
            <div className="info-card__hours">
              {hours.map(({ day, time }) => (
                <div key={day} className="info-card__hours-row">
                  <span className="day">{day}</span>
                  <span className={`time ${time === 'CLOSED' ? 'closed' : ''}`}>{time}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
