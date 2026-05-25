import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { sendReferringDoctorEmail, uploadFileToTmpFiles } from '../services/emailService';

export default function Doctors() {
  const [formData, setFormData] = useState({
    doctorName: '',
    practiceName: '',
    doctorPhone: '',
    doctorEmail: '',
    patientName: '',
    patientDob: '',
    patientPhone: '',
    patientEmail: '',
    office: 'schertz',
    reasonForReferral: 'Dental Implants',
    notes: ''
  });

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<string>('');
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);
    setUploadStatus('');

    try {
      const attachments: { name: string; url: string }[] = [];

      if (selectedFiles.length > 0) {
        setUploadStatus(`Uploading 1 of ${selectedFiles.length} file...`);
        for (let i = 0; i < selectedFiles.length; i++) {
          const file = selectedFiles[i];
          setUploadStatus(`Uploading file ${i + 1} of ${selectedFiles.length}: ${file.name}...`);
          try {
            const url = await uploadFileToTmpFiles(file);
            attachments.push({ name: file.name, url });
          } catch (uploadErr) {
            console.error(`Failed to upload ${file.name}:`, uploadErr);
            throw new Error(`Failed to upload attachment "${file.name}". Please check your internet connection.`);
          }
        }
      }

      setUploadStatus('Sending referral details...');
      await sendReferringDoctorEmail({
        ...formData,
        attachments
      });

      setSubmitResult({
        success: true,
        message: 'Thank you! The referral has been submitted and sent to our admin team successfully.'
      });

      // Reset form
      setFormData({
        doctorName: '',
        practiceName: '',
        doctorPhone: '',
        doctorEmail: '',
        patientName: '',
        patientDob: '',
        patientPhone: '',
        patientEmail: '',
        office: 'schertz',
        reasonForReferral: 'Dental Implants',
        notes: ''
      });
      setSelectedFiles([]);
    } catch (error: any) {
      setSubmitResult({
        success: false,
        message: error.message || 'Failed to submit referral. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
      setUploadStatus('');
    }
  };

  return (
    <div>
      {/* ── PAGE HEADER ──────────────────────────────────────────── */}
      <section className="page-header">
        <div className="container page-header__inner">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,.7)' }}>Professionals</span>
          <h1>Referring Doctors</h1>
        </div>
      </section>

      {/* ── MAIN CONTENT & SIDEBAR ───────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="inner-page-layout">
            
            {/* Left Content */}
            <div className="inner-page-layout__main">
              <h2 className="section-title" style={{ fontFamily: 'var(--font-serif)', color: 'var(--gold)', marginBottom: '1.5rem' }}>
                Referring Doctors
              </h2>
              
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--ink-soft)', marginBottom: '2.5rem' }}>
                We appreciate your trust in referring your patients to our practice. Please submit your referral online and our team will contact your patient soon.
              </p>

              <div className="contact-form-wrap" style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '12px', padding: '2rem', boxShadow: 'var(--shadow-sm)' }}>
                <span className="eyebrow">Referral Form</span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.55rem', marginBottom: '1.5rem' }}>Submit a Patient Referral</h3>

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

                {isSubmitting && uploadStatus && (
                  <div style={{
                    padding: '1rem',
                    borderRadius: '6px',
                    marginBottom: '1.5rem',
                    backgroundColor: 'rgba(197, 160, 89, 0.1)',
                    color: 'var(--ink)',
                    border: '1px solid var(--gold)',
                    fontSize: '0.92rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <i className="fas fa-spinner fa-spin" style={{ color: 'var(--gold)' }}></i>
                    {uploadStatus}
                  </div>
                )}

                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <h4 style={{ color: 'var(--teal)', borderBottom: '1px solid var(--border)', paddingBottom: '0.35rem', marginBottom: '1rem', marginTop: '0.5rem', fontSize: '1rem', fontWeight: 600 }}>1. Referring Dentist Information</h4>
                  <div className="form-grid" style={{ marginBottom: '1.5rem' }}>
                    <div className="form-group">
                      <label htmlFor="doctorName">Doctor Name *</label>
                      <input 
                        id="doctorName" 
                        name="doctorName" 
                        type="text" 
                        required 
                        value={formData.doctorName} 
                        onChange={handleChange} 
                        disabled={isSubmitting} 
                        placeholder="Dr. Jane Doe"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="practiceName">Practice Name *</label>
                      <input 
                        id="practiceName" 
                        name="practiceName" 
                        type="text" 
                        required 
                        value={formData.practiceName} 
                        onChange={handleChange} 
                        disabled={isSubmitting} 
                        placeholder="Practice or Clinic Name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="doctorPhone">Doctor Phone *</label>
                      <input 
                        id="doctorPhone" 
                        name="doctorPhone" 
                        type="tel" 
                        required 
                        value={formData.doctorPhone} 
                        onChange={handleChange} 
                        disabled={isSubmitting} 
                        placeholder="(555) 555-5555"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="doctorEmail">Doctor Email *</label>
                      <input 
                        id="doctorEmail" 
                        name="doctorEmail" 
                        type="email" 
                        required 
                        value={formData.doctorEmail} 
                        onChange={handleChange} 
                        disabled={isSubmitting} 
                        placeholder="dentist@clinic.com"
                      />
                    </div>
                  </div>

                  <h4 style={{ color: 'var(--teal)', borderBottom: '1px solid var(--border)', paddingBottom: '0.35rem', marginBottom: '1rem', marginTop: '1rem', fontSize: '1rem', fontWeight: 600 }}>2. Patient Information</h4>
                  <div className="form-grid" style={{ marginBottom: '1.5rem' }}>
                    <div className="form-group">
                      <label htmlFor="patientName">Patient Name *</label>
                      <input 
                        id="patientName" 
                        name="patientName" 
                        type="text" 
                        required 
                        value={formData.patientName} 
                        onChange={handleChange} 
                        disabled={isSubmitting} 
                        placeholder="Full Patient Name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="patientDob">Date of Birth *</label>
                      <input 
                        id="patientDob" 
                        name="patientDob" 
                        type="date" 
                        required 
                        value={formData.patientDob} 
                        onChange={handleChange} 
                        disabled={isSubmitting} 
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="patientPhone">Patient Phone *</label>
                      <input 
                        id="patientPhone" 
                        name="patientPhone" 
                        type="tel" 
                        required 
                        value={formData.patientPhone} 
                        onChange={handleChange} 
                        disabled={isSubmitting} 
                        placeholder="(555) 555-5555"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="patientEmail">Patient Email *</label>
                      <input 
                        id="patientEmail" 
                        name="patientEmail" 
                        type="email" 
                        required 
                        value={formData.patientEmail} 
                        onChange={handleChange} 
                        disabled={isSubmitting} 
                        placeholder="patient@example.com"
                      />
                    </div>
                    <div className="form-group full">
                      <label htmlFor="office">Preferred Practice Location *</label>
                      <select id="office" name="office" required value={formData.office} onChange={handleChange} disabled={isSubmitting}>
                        <option value="schertz">Schertz Office</option>
                        <option value="huebner">San Antonio Office (Huebner)</option>
                      </select>
                    </div>
                  </div>

                  <h4 style={{ color: 'var(--teal)', borderBottom: '1px solid var(--border)', paddingBottom: '0.35rem', marginBottom: '1rem', marginTop: '1rem', fontSize: '1rem', fontWeight: 600 }}>3. Clinical Referral Details</h4>
                  <div className="form-grid" style={{ marginBottom: '1.5rem' }}>
                    <div className="form-group full">
                      <label htmlFor="reasonForReferral">Reason for Referral *</label>
                      <select id="reasonForReferral" name="reasonForReferral" required value={formData.reasonForReferral} onChange={handleChange} disabled={isSubmitting}>
                        <option value="Dental Implants">Dental Implants</option>
                        <option value="Gum Grafting">Gum Grafting (Recession Treatment)</option>
                        <option value="Crown Lengthening">Crown Lengthening</option>
                        <option value="Deep Teeth Cleaning">Deep Teeth Cleaning (Scaling/Root Planing)</option>
                        <option value="Jaw Bone Augmentation & Sinus Lift">Jaw Bone Augmentation &amp; Sinus Lift</option>
                        <option value="Wisdom Tooth Removal">Wisdom Tooth Removal</option>
                        <option value="Expose & Bond Procedure">Expose &amp; Bond Procedure</option>
                        <option value="General Periodontal Evaluation">General Periodontal Evaluation</option>
                        <option value="Other">Other (Specify in notes)</option>
                      </select>
                    </div>
                    
                    <div className="form-group full">
                      <label htmlFor="notes">Clinical Notes / Comments</label>
                      <textarea 
                        id="notes" 
                        name="notes" 
                        rows={4} 
                        value={formData.notes} 
                        onChange={handleChange} 
                        disabled={isSubmitting} 
                        placeholder="Please describe the patient's condition, specify treatment details, or add any special requests."
                      />
                    </div>

                    <div className="form-group full">
                      <label htmlFor="attachments" style={{ fontWeight: 600 }}>Patient Attachments (X-Rays, PDFs, Radiographs)</label>
                      <input 
                        id="attachments" 
                        type="file" 
                        multiple 
                        onChange={handleFileChange}
                        disabled={isSubmitting}
                        style={{
                          display: 'block',
                          width: '100%',
                          padding: '1rem',
                          border: '2px dashed var(--teal)',
                          borderRadius: '8px',
                          background: 'var(--off-white)',
                          cursor: 'pointer',
                          textAlign: 'center'
                        }}
                      />
                      {selectedFiles.length > 0 && (
                        <div style={{ marginTop: '0.75rem', padding: '0.5rem', background: '#f8f9fa', borderRadius: '6px', border: '1px solid var(--border)' }}>
                          <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--teal-dark)', marginBottom: '0.25rem' }}>Attached files:</p>
                          <ul style={{ paddingLeft: '1.25rem', fontSize: '0.8rem', color: 'var(--ink-soft)', listStyleType: 'disc' }}>
                            {selectedFiles.map((file, idx) => (
                              <li key={idx}>{file.name} ({(file.size / 1024).toFixed(1)} KB)</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}>
                    <i className="fas fa-paper-plane"></i> {isSubmitting ? 'Submitting Referral...' : 'Submit Referral'}
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
