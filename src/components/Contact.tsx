import React, { useState } from 'react';
import { OpenDentalService } from '../services/openDentalService';
import { sendContactEmail } from '../services/emailService';
import Sidebar from './Sidebar';

const LOCATIONS = [
  {
    name:    'San Antonio Office',
    address: '9480 Huebner Rd Ste 300\nSan Antonio, TX 78240',
    phone:   '(210) 332-5335',
    mapSrc:  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3470.876!2d-98.5583!3d29.5527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c5ec5a8e9b51b%3A0x4b7d81d43e15adf7!2s9480%20Huebner%20Rd%20%23300%2C%20San%20Antonio%2C%20TX%2078240!5e0!3m2!1sen!2sus!4v1680000000000',
    directions: 'https://maps.google.com/?q=9480+Huebner+Rd+STE+300+San+Antonio+TX+78240',
  },
  {
    name:    'Schertz Office',
    address: '1996 Schertz Pkwy #103\nSchertz, TX 78154',
    phone:   '(210) 332-5335',
    mapSrc:  'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13880.830386264186!2d-98.2760170820313!3d29.568562517223334!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c93b2ba4e5033%3A0x39f016b9efaa1a92!2sAdvanced%20Periodontics%20%26%20Dental%20Implants!5e0!3m2!1sen!2sus!4v1680000000001',
    directions: 'https://maps.google.com/?q=1996+Schertz+Pkwy+%23103+Schertz+TX+78154',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    subject: 'Appointment Request',
    office: 'huebner', // Default to Huebner (San Antonio)
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const response = await OpenDentalService.bookAppointment({
        office: formData.office as 'schertz' | 'huebner',
        fullName: `${formData.firstName} ${formData.lastName}`,
        dob: '1990-01-01', // Default DOB for contact form
        email: formData.email,
        phone: formData.phone,
        service: formData.subject,
        dateTime: `Web Message Request - Subject: ${formData.subject}. Message: ${formData.message}`
      });

      // Send contact email notification to admin via EmailJS
      try {
        await sendContactEmail(formData);
      } catch (emailErr) {
        console.error('Failed to send contact email notification:', emailErr);
      }

      setSubmitResult({
        success: response.success,
        message: response.success 
          ? 'Thank you! Your message has been sent and synchronized with Open Dental.'
          : response.message
      });

      if (response.success) {
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          subject: 'Appointment Request',
          office: 'huebner',
          message: ''
        });
      }
    } catch (error: any) {
      setSubmitResult({
        success: false,
        message: error.message || 'Failed to submit. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* ── PAGE HEADER ──────────────────────────────────────────── */}
      <section className="page-header">
        <div className="container page-header__inner">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,.7)' }}>Get In Touch</span>
          <h1>Contact Us</h1>
        </div>
      </section>

      {/* ── MAIN CONTENT & SIDEBAR ───────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="inner-page-layout">
            
            {/* Left Content */}
            <div className="inner-page-layout__main">
              <h2 className="section-title" style={{ fontFamily: 'var(--font-serif)', color: 'var(--gold)', marginBottom: '1.5rem' }}>
                Get in Touch With Us
              </h2>

              {/* Locations Grid */}
              <div className="locations-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>
                {LOCATIONS.map(({ name, address, phone, mapSrc, directions }) => (
                  <div key={name} className="location-card" style={{ border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', background: 'var(--white)', boxShadow: 'var(--shadow-sm)' }}>
                    <div className="location-card__map" style={{ height: '220px' }}>
                      <iframe
                        src={mapSrc}
                        title={`Map — ${name}`}
                        style={{ width: '100%', height: '100%', border: 'none' }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                    <div className="location-card__body" style={{ padding: '1.25rem' }}>
                      <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--teal)' }}>{name}</h3>
                      <address style={{ fontStyle: 'normal', fontSize: '0.88rem', color: 'var(--ink-soft)', lineHeight: '1.5', marginBottom: '1rem' }}>
                        {address.split('\n').map((line, i) => (
                          <span key={i}>{line}<br /></span>
                        ))}
                      </address>
                      <div className="location-card__actions" style={{ display: 'flex', gap: '0.5rem' }}>
                        <a href={`tel:${phone.replace(/\D/g, '')}`} className="btn btn-primary btn-sm" style={{ padding: '0.4rem 1rem', fontSize: '0.78rem' }}>
                          <i className="fas fa-phone-alt"></i> {phone}
                        </a>
                        <a href={directions} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm" style={{ padding: '0.4rem 1rem', fontSize: '0.78rem' }}>
                          <i className="fas fa-directions"></i> Directions
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bio snippet matching the live contact page */}
              <div style={{ padding: '1.5rem', background: 'var(--off-white)', borderRadius: '12px', border: '1px solid var(--border)', marginBottom: '3rem' }}>
                <h4 style={{ color: 'var(--teal)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Meet our Doctor</h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--ink-soft)', lineHeight: '1.6' }}>
                  Dr. Alghadban specializes in both nonsurgical and surgical approaches to treating gum disease and other periodontal issues. Some of the services we offer include regeneration, dental implants, dental endoscope (PerioView®), esthetic periodontal plastic surgery, gum disease treatment, and wisdom teeth extraction. You can trust that you are in capable hands with our skilled team.
                </p>
              </div>

              {/* Contact form */}
              <div className="contact-form-wrap" style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '12px', padding: '2rem', boxShadow: 'var(--shadow-sm)' }}>
                <span className="eyebrow">Message Us</span>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.65rem', marginBottom: '0.5rem' }}>Send Us a Message</h2>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>We&rsquo;ll respond within one business day.</p>
                
                {submitResult && (
                  <div style={{
                    padding: '1rem',
                    borderRadius: '6px',
                    marginBottom: '1.5rem',
                    backgroundColor: submitResult.success ? 'rgba(0, 97, 90, 0.1)' : 'rgba(219, 68, 85, 0.1)',
                    color: submitResult.success ? 'var(--teal-dark)' : '#db4455',
                    border: `1px solid ${submitResult.success ? 'var(--teal)' : '#db4455'}`,
                    fontSize: '0.95rem'
                  }}>
                    {submitResult.message}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name *</label>
                      <input id="firstName" name="firstName" type="text" required value={formData.firstName} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name *</label>
                      <input id="lastName" name="lastName" type="text" required value={formData.lastName} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone *</label>
                      <input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="form-group full">
                      <label htmlFor="office">Preferred Location *</label>
                      <select id="office" name="office" required value={formData.office} onChange={handleChange}>
                        <option value="huebner">San Antonio Office (Huebner)</option>
                        <option value="schertz">Schertz Office</option>
                      </select>
                    </div>
                    <div className="form-group full">
                      <label htmlFor="subject">Subject</label>
                      <select id="subject" name="subject" value={formData.subject} onChange={handleChange}>
                        <option>Appointment Request</option>
                        <option>New Patient Inquiry</option>
                        <option>Insurance Question</option>
                        <option>Treatment Question</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="form-group full">
                      <label htmlFor="message">Message *</label>
                      <textarea id="message" name="message" rows={4} required value={formData.message} onChange={handleChange} placeholder="How can we help you?" />
                    </div>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center' }}>
                    <i className="fas fa-paper-plane"></i> {isSubmitting ? 'Sending Request...' : 'Send Message'}
                  </button>
                </form>
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
