import emailjs from '@emailjs/browser';

// ── EmailJS Configuration ──────────────────────────────────────────────────
const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || 'YOUR_SERVICE_ID';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const PATIENT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_PATIENT_TEMPLATE_ID || TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || 'YOUR_PUBLIC_KEY';

// Both emails will receive every submission
const RECIPIENTS = 'admin@advancedperiosa.com, info@advancedperiosa.com';

export interface ChatbotSubmission {
  patientEmail: string;
  service: string;
  fullName: string;
  dob: string;
  phone: string;
}

export interface ContactFormSubmission {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  office: string;
  message: string;
}

// ── HTML Email Generators ──────────────────────────────────────────────────

function getAdminChatbotHtml(data: ChatbotSubmission): string {
  return `
    <div style="font-family: 'Plus Jakarta Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff; color: #111827;">
      <div style="text-align: center; padding-bottom: 20px; border-bottom: 2px solid #0d9488;">
        <h2 style="color: #0d9488; margin: 0; font-family: Georgia, serif; font-size: 24px; font-weight: 600; letter-spacing: -0.02em;">Advanced Periodontics & Dental Implants</h2>
        <p style="color: #c5a059; margin: 5px 0 0 0; text-transform: uppercase; font-size: 11px; letter-spacing: 2px; font-weight: bold;">New Chatbot Booking Request</p>
      </div>
      
      <div style="margin: 25px 0;">
        <p style="font-size: 15px; line-height: 1.6; color: #374151;">A patient has requested an appointment booking through the website chatbot. Below are their details:</p>
      </div>
      
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
        <tbody>
          <tr style="background-color: #f9fafb;">
            <td style="padding: 12px; font-weight: bold; width: 150px; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #4b5563;">Patient Name:</td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #111827; font-weight: 500;">${data.fullName}</td>
          </tr>
          <tr>
            <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #4b5563;">Date of Birth:</td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #111827;">${data.dob}</td>
          </tr>
          <tr style="background-color: #f9fafb;">
            <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #4b5563;">Phone Number:</td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #111827;"><a href="tel:${data.phone}" style="color: #0d9488; text-decoration: none; font-weight: 600;">${data.phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #4b5563;">Email Address:</td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #111827;"><a href="mailto:${data.patientEmail}" style="color: #0d9488; text-decoration: none;">${data.patientEmail}</a></td>
          </tr>
          <tr style="background-color: #f9fafb;">
            <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #4b5563;">Requested Service:</td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px; font-weight: 600; color: #0d9488;">${data.service}</td>
          </tr>
          <tr>
            <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #4b5563;">Office Location:</td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px; font-style: italic; color: #6b7280;">Pending (Patient will be contacted)</td>
          </tr>
          <tr style="background-color: #f9fafb;">
            <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #4b5563;">Submitted At:</td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #6b7280;">${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })}</td>
          </tr>
        </tbody>
      </table>
      
      <div style="text-align: center; border-top: 1px solid #e5e7eb; padding-top: 15px; font-size: 12px; color: #9ca3af;">
        This is an automated notification from the Advanced Periodontics Web Bot.
      </div>
    </div>
  `;
}

function getAdminContactHtml(data: ContactFormSubmission): string {
  const officeName = data.office === 'huebner' ? 'San Antonio (Huebner)' : 'Schertz';
  return `
    <div style="font-family: 'Plus Jakarta Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff; color: #111827;">
      <div style="text-align: center; padding-bottom: 20px; border-bottom: 2px solid #0d9488;">
        <h2 style="color: #0d9488; margin: 0; font-family: Georgia, serif; font-size: 24px; font-weight: 600; letter-spacing: -0.02em;">Advanced Periodontics & Dental Implants</h2>
        <p style="color: #c5a059; margin: 5px 0 0 0; text-transform: uppercase; font-size: 11px; letter-spacing: 2px; font-weight: bold;">New Contact Form Submission</p>
      </div>
      
      <div style="margin: 25px 0;">
        <p style="font-size: 15px; line-height: 1.6; color: #374151;">A visitor submitted a message on the contact page. Below are their details:</p>
      </div>
      
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
        <tbody>
          <tr style="background-color: #f9fafb;">
            <td style="padding: 12px; font-weight: bold; width: 150px; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #4b5563;">Name:</td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #111827; font-weight: 500;">${data.firstName} ${data.lastName}</td>
          </tr>
          <tr>
            <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #4b5563;">Phone Number:</td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #111827;"><a href="tel:${data.phone}" style="color: #0d9488; text-decoration: none; font-weight: 600;">${data.phone}</a></td>
          </tr>
          <tr style="background-color: #f9fafb;">
            <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #4b5563;">Email Address:</td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #111827;"><a href="mailto:${data.email}" style="color: #0d9488; text-decoration: none;">${data.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #4b5563;">Preferred Location:</td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #111827;">${officeName}</td>
          </tr>
          <tr style="background-color: #f9fafb;">
            <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #4b5563;">Subject:</td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px; font-weight: 600; color: #0d9488;">${data.subject}</td>
          </tr>
          <tr>
            <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #4b5563;">Submitted At:</td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #6b7280;">${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })}</td>
          </tr>
        </tbody>
      </table>
      
      <div style="margin-bottom: 25px;">
        <h4 style="margin: 0 0 10px 0; color: #111827; font-size: 14px;">Message Content:</h4>
        <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 15px; border-radius: 8px; font-size: 14px; color: #374151; line-height: 1.6; white-space: pre-wrap;">${data.message}</div>
      </div>
      
      <div style="text-align: center; border-top: 1px solid #e5e7eb; padding-top: 15px; font-size: 12px; color: #9ca3af;">
        This is an automated notification from the Advanced Periodontics Web Contact Form.
      </div>
    </div>
  `;
}

function getPatientConfirmationHtml(fullName: string, serviceOrSubject: string, email: string): string {
  return `
    <div style="font-family: 'Plus Jakarta Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff; color: #111827;">
      <div style="text-align: center; padding-bottom: 20px; border-bottom: 2px solid #0d9488;">
        <h2 style="color: #0d9488; margin: 0; font-family: Georgia, serif; font-size: 24px; font-weight: 600; letter-spacing: -0.02em;">Advanced Periodontics & Dental Implants</h2>
        <p style="color: #c5a059; margin: 5px 0 0 0; text-transform: uppercase; font-size: 11px; letter-spacing: 2px; font-weight: bold;">Appointment Inquiry Received</p>
      </div>
      
      <div style="margin: 30px 0; line-height: 1.7; font-size: 15px; color: #374151;">
        <p>Dear <strong>${fullName}</strong>,</p>
        
        <p>Thank you for reaching out to Advanced Periodontics & Dental Implants. We have received your inquiry for <strong>${serviceOrSubject}</strong>.</p>
        
        <p>Our team will contact you as soon as possible to fit you into our schedule.</p>
        
        <div style="background-color: #f5ead5; border: 1px solid #c5a059; padding: 15px; border-radius: 8px; margin: 25px 0;">
          <h4 style="margin: 0 0 8px 0; color: #8e6c27; font-size: 14px;"><strong>Have questions in the meantime?</strong></h4>
          <p style="margin: 0; font-size: 13px; color: #6b531e;">Feel free to call us at <a href="tel:2103325335" style="color: #0d9488; text-decoration: none; font-weight: bold;">(210) 332-5335</a> or reply to this email.</p>
        </div>
        
        <p style="margin-top: 30px;">We look forward to serving you!</p>
        
        <p style="margin: 0; font-family: Georgia, serif; font-style: italic; color: #0d9488; font-weight: 600;">Warm regards,<br>The Advanced Periodontics Team</p>
      </div>
      
      <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px; font-size: 12px; color: #6b7280;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="width: 50%; padding-right: 15px; vertical-align: top;">
              <strong style="color: #0d9488;">San Antonio Office:</strong><br>
              9480 Huebner Rd Ste 300<br>
              San Antonio, TX 78240
            </td>
            <td style="width: 50%; padding-left: 15px; border-left: 1px solid #e5e7eb; vertical-align: top;">
              <strong style="color: #0d9488;">Schertz Office:</strong><br>
              1996 Schertz Pkwy #103<br>
              Schertz, TX 78154
            </td>
          </tr>
        </table>
      </div>
      
      <div style="text-align: center; border-top: 1px solid #e5e7eb; padding-top: 15px; margin-top: 25px; font-size: 11px; color: #9ca3af;">
        This email was sent to ${email}. If you did not make this request, please disregard this message.
      </div>
    </div>
  `;
}

// ── Email Transmission Functions ───────────────────────────────────────────

/**
 * Sends a chatbot booking submission.
 */
export async function sendChatbotEmail(data: ChatbotSubmission): Promise<void> {
  if (TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
    console.warn('[EmailJS] Configuration missing. Skipping email send.');
    return;
  }

  // 1. Send Admin Notification Email
  const adminParams = {
    to_email:     RECIPIENTS,
    reply_to:     data.patientEmail,
    subject:      `[ChatBot Booking] ${data.fullName} - ${data.service}`,
    email_html:   getAdminChatbotHtml(data),
  };

  await emailjs.send(SERVICE_ID, TEMPLATE_ID, adminParams, PUBLIC_KEY);
  console.log('%c[EmailJS] Admin chatbot notification sent ✓', 'color:#0d9488;font-weight:bold;');

  // 2. Send Patient Confirmation Email (if template ID is configured)
  if (PATIENT_TEMPLATE_ID && PATIENT_TEMPLATE_ID !== 'YOUR_PATIENT_TEMPLATE_ID') {
    const patientParams = {
      to_email:     data.patientEmail,
      reply_to:     'info@advancedperiosa.com',
      subject:      `We received your inquiry! - Advanced Periodontics`,
      email_html:   getPatientConfirmationHtml(data.fullName, data.service, data.patientEmail),
    };
    await emailjs.send(SERVICE_ID, PATIENT_TEMPLATE_ID, patientParams, PUBLIC_KEY);
    console.log('%c[EmailJS] Patient confirmation email sent ✓', 'color:#0d9488;font-weight:bold;');
  }
}

/**
 * Sends a contact-page form submission.
 */
export async function sendContactEmail(data: ContactFormSubmission): Promise<void> {
  if (TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
    console.warn('[EmailJS] Configuration missing. Skipping email send.');
    return;
  }

  // 1. Send Admin Notification Email
  const adminParams = {
    to_email:     RECIPIENTS,
    reply_to:     data.email,
    subject:      `[Contact Form] ${data.firstName} ${data.lastName} - ${data.subject}`,
    email_html:   getAdminContactHtml(data),
  };

  await emailjs.send(SERVICE_ID, TEMPLATE_ID, adminParams, PUBLIC_KEY);
  console.log('%c[EmailJS] Contact form submission sent ✓', 'color:#0d9488;font-weight:bold;');

  // 2. Send Patient Confirmation Email
  if (PATIENT_TEMPLATE_ID && PATIENT_TEMPLATE_ID !== 'YOUR_PATIENT_TEMPLATE_ID') {
    const patientParams = {
      to_email:     data.email,
      reply_to:     'info@advancedperiosa.com',
      subject:      `We received your message! - Advanced Periodontics`,
      email_html:   getPatientConfirmationHtml(`${data.firstName} ${data.lastName}`, data.subject, data.email),
    };
    await emailjs.send(SERVICE_ID, PATIENT_TEMPLATE_ID, patientParams, PUBLIC_KEY);
    console.log('%c[EmailJS] Patient confirmation email sent ✓', 'color:#0d9488;font-weight:bold;');
  }
}

// ── New Form Interfaces ─────────────────────────────────────────────────────

export interface CallbackRequestFormSubmission {
  fullName: string;
  phone: string;
  email: string;
  service?: string;
  notes?: string;
}

export interface ReferringDoctorSubmission {
  doctorName: string;
  practiceName: string;
  doctorPhone: string;
  doctorEmail: string;
  patientName: string;
  patientDob: string;
  patientPhone: string;
  patientEmail: string;
  office: string;
  reasonForReferral: string;
  notes?: string;
  attachments?: { name: string; url: string }[];
}

// ── HTML Email Generators for New Forms ─────────────────────────────────────

function getAdminCallbackHtml(data: CallbackRequestFormSubmission): string {
  return `
    <div style="font-family: 'Plus Jakarta Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff; color: #111827;">
      <div style="text-align: center; padding-bottom: 20px; border-bottom: 2px solid #0d9488;">
        <h2 style="color: #0d9488; margin: 0; font-family: Georgia, serif; font-size: 24px; font-weight: 600; letter-spacing: -0.02em;">Advanced Periodontics & Dental Implants</h2>
        <p style="color: #c5a059; margin: 5px 0 0 0; text-transform: uppercase; font-size: 11px; letter-spacing: 2px; font-weight: bold;">New Callback / Appointment Request</p>
      </div>
      
      <div style="margin: 25px 0;">
        <p style="font-size: 15px; line-height: 1.6; color: #374151;">A patient requested a callback or appointment via the homepage request form. Details below:</p>
      </div>
      
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
        <tbody>
          <tr style="background-color: #f9fafb;">
            <td style="padding: 12px; font-weight: bold; width: 150px; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #4b5563;">Full Name:</td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #111827; font-weight: 500;">${data.fullName}</td>
          </tr>
          <tr>
            <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #4b5563;">Phone Number:</td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #111827;"><a href="tel:${data.phone}" style="color: #0d9488; text-decoration: none; font-weight: 600;">${data.phone}</a></td>
          </tr>
          <tr style="background-color: #f9fafb;">
            <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #4b5563;">Email Address:</td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #111827;"><a href="mailto:${data.email}" style="color: #0d9488; text-decoration: none;">${data.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #4b5563;">Requested Service:</td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px; font-weight: 600; color: #0d9488;">${data.service || 'General Inquiry'}</td>
          </tr>
          <tr style="background-color: #f9fafb;">
            <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #4b5563;">Submitted At:</td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #6b7280;">${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })}</td>
          </tr>
        </tbody>
      </table>

      ${data.notes ? `
      <div style="margin-bottom: 25px;">
        <h4 style="margin: 0 0 10px 0; color: #111827; font-size: 14px;">Additional Patient Notes:</h4>
        <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 15px; border-radius: 8px; font-size: 14px; color: #374151; line-height: 1.6; white-space: pre-wrap;">${data.notes}</div>
      </div>
      ` : ''}
      
      <div style="text-align: center; border-top: 1px solid #e5e7eb; padding-top: 15px; font-size: 12px; color: #9ca3af;">
        This is an automated notification from the Advanced Periodontics Homepage Form.
      </div>
    </div>
  `;
}

function getAdminReferringDoctorHtml(data: ReferringDoctorSubmission): string {
  const officeName = data.office === 'huebner' ? 'San Antonio (Huebner)' : 'Schertz';
  const attachmentsList = data.attachments && data.attachments.length > 0
    ? data.attachments.map(att => `
        <li style="margin-bottom: 8px;">
          <a href="${att.url}" target="_blank" style="color: #0d9488; text-decoration: underline; font-weight: bold; font-size: 14px;">
            <i className="fas fa-file-download"></i> ${att.name}
          </a>
        </li>
      `).join('')
    : '<li style="color: #6b7280; font-style: italic; font-size: 14px;">No files attached</li>';

  return `
    <div style="font-family: 'Plus Jakarta Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff; color: #111827;">
      <div style="text-align: center; padding-bottom: 20px; border-bottom: 2px solid #0d9488;">
        <h2 style="color: #0d9488; margin: 0; font-family: Georgia, serif; font-size: 24px; font-weight: 600; letter-spacing: -0.02em;">Advanced Periodontics & Dental Implants</h2>
        <p style="color: #c5a059; margin: 5px 0 0 0; text-transform: uppercase; font-size: 11px; letter-spacing: 2px; font-weight: bold;">New Patient Referral</p>
      </div>
      
      <div style="margin: 25px 0;">
        <p style="font-size: 15px; line-height: 1.6; color: #374151;">A referring dentist has submitted a patient referral on the website. Below are the details:</p>
      </div>

      <h3 style="color: #0d9488; font-size: 16px; border-bottom: 1px solid #dee2e6; padding-bottom: 5px; margin-top: 20px; margin-bottom: 12px; font-family: Georgia, serif;">Referring Doctor Information</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <tbody>
          <tr style="background-color: #f9fafb;">
            <td style="padding: 10px; font-weight: bold; width: 180px; font-size: 14px; color: #4b5563;">Doctor Name:</td>
            <td style="padding: 10px; font-size: 14px; color: #111827; font-weight: 500;">Dr. ${data.doctorName}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; font-size: 14px; color: #4b5563;">Practice Name:</td>
            <td style="padding: 10px; font-size: 14px; color: #111827;">${data.practiceName}</td>
          </tr>
          <tr style="background-color: #f9fafb;">
            <td style="padding: 10px; font-weight: bold; font-size: 14px; color: #4b5563;">Doctor Phone:</td>
            <td style="padding: 10px; font-size: 14px; color: #111827;"><a href="tel:${data.doctorPhone}" style="color: #0d9488; text-decoration: none;">${data.doctorPhone}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; font-size: 14px; color: #4b5563;">Doctor Email:</td>
            <td style="padding: 10px; font-size: 14px; color: #111827;"><a href="mailto:${data.doctorEmail}" style="color: #0d9488; text-decoration: none;">${data.doctorEmail}</a></td>
          </tr>
        </tbody>
      </table>

      <h3 style="color: #0d9488; font-size: 16px; border-bottom: 1px solid #dee2e6; padding-bottom: 5px; margin-top: 25px; margin-bottom: 12px; font-family: Georgia, serif;">Patient Information</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <tbody>
          <tr style="background-color: #f9fafb;">
            <td style="padding: 10px; font-weight: bold; width: 180px; font-size: 14px; color: #4b5563;">Patient Name:</td>
            <td style="padding: 10px; font-size: 14px; color: #111827; font-weight: 500;">${data.patientName}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; font-size: 14px; color: #4b5563;">Date of Birth:</td>
            <td style="padding: 10px; font-size: 14px; color: #111827;">${data.patientDob}</td>
          </tr>
          <tr style="background-color: #f9fafb;">
            <td style="padding: 10px; font-weight: bold; font-size: 14px; color: #4b5563;">Patient Phone:</td>
            <td style="padding: 10px; font-size: 14px; color: #111827;"><a href="tel:${data.patientPhone}" style="color: #0d9488; text-decoration: none;">${data.patientPhone}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; font-size: 14px; color: #4b5563;">Patient Email:</td>
            <td style="padding: 10px; font-size: 14px; color: #111827;"><a href="mailto:${data.patientEmail}" style="color: #0d9488; text-decoration: none;">${data.patientEmail}</a></td>
          </tr>
          <tr style="background-color: #f9fafb;">
            <td style="padding: 10px; font-weight: bold; font-size: 14px; color: #4b5563;">Preferred Location:</td>
            <td style="padding: 10px; font-size: 14px; color: #111827; font-weight: 500; color: #0d9488;">${officeName}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; font-size: 14px; color: #4b5563;">Reason for Referral:</td>
            <td style="padding: 10px; font-size: 14px; font-weight: bold; color: #0d9488;">${data.reasonForReferral}</td>
          </tr>
        </tbody>
      </table>

      ${data.notes ? `
      <h3 style="color: #0d9488; font-size: 16px; border-bottom: 1px solid #dee2e6; padding-bottom: 5px; margin-top: 25px; margin-bottom: 12px; font-family: Georgia, serif;">Clinical Notes</h3>
      <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 15px; border-radius: 8px; font-size: 14px; color: #374151; line-height: 1.6; white-space: pre-wrap; margin-bottom: 20px;">${data.notes}</div>
      ` : ''}

      <h3 style="color: #0d9488; font-size: 16px; border-bottom: 1px solid #dee2e6; padding-bottom: 5px; margin-top: 25px; margin-bottom: 12px; font-family: Georgia, serif;">Referral Attachments (X-Rays / Files)</h3>
      <p style="font-size: 12px; color: #6b7280; margin-bottom: 10px; font-style: italic;">Note: Attached files are securely stored and will expire/self-delete in 48 hours.</p>
      <ul style="padding-left: 20px; font-size: 14px; line-height: 1.6;">
        ${attachmentsList}
      </ul>
      
      <div style="text-align: center; border-top: 1px solid #e5e7eb; padding-top: 15px; margin-top: 30px; font-size: 12px; color: #9ca3af;">
        This is an automated notification from the Referring Doctors Referral Form.
      </div>
    </div>
  `;
}

// ── New Email Transmission Functions ────────────────────────────────────────

/**
 * Sends a callback request from the homepage hero form.
 */
export async function sendCallbackEmail(data: CallbackRequestFormSubmission): Promise<void> {
  if (TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
    console.warn('[EmailJS] Configuration missing. Skipping email send.');
    return;
  }

  // 1. Send Admin Notification Email
  const adminParams = {
    to_email:     RECIPIENTS,
    reply_to:     data.email,
    subject:      `[Callback Request] ${data.fullName} - ${data.service || 'General Inquiry'}`,
    email_html:   getAdminCallbackHtml(data),
  };

  await emailjs.send(SERVICE_ID, TEMPLATE_ID, adminParams, PUBLIC_KEY);
  console.log('%c[EmailJS] Callback request notification sent ✓', 'color:#0d9488;font-weight:bold;');

  // 2. Send Confirmation Email to Patient
  if (PATIENT_TEMPLATE_ID && PATIENT_TEMPLATE_ID !== 'YOUR_PATIENT_TEMPLATE_ID') {
    const patientParams = {
      to_email:     data.email,
      reply_to:     'info@advancedperiosa.com',
      subject:      `We received your callback request! - Advanced Periodontics`,
      email_html:   getPatientConfirmationHtml(data.fullName, `Callback/Appointment Request: ${data.service || 'General Inquiry'}`, data.email),
    };
    await emailjs.send(SERVICE_ID, PATIENT_TEMPLATE_ID, patientParams, PUBLIC_KEY);
    console.log('%c[EmailJS] Patient callback confirmation email sent ✓', 'color:#0d9488;font-weight:bold;');
  }
}

/**
 * Sends a referring doctor patient referral form submission.
 */
export async function sendReferringDoctorEmail(data: ReferringDoctorSubmission): Promise<void> {
  if (TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
    console.warn('[EmailJS] Configuration missing. Skipping email send.');
    return;
  }

  // 1. Send Admin Notification Email
  const adminParams = {
    to_email:     RECIPIENTS,
    reply_to:     data.doctorEmail,
    subject:      `[Referral Form] Dr. ${data.doctorName} referred patient ${data.patientName}`,
    email_html:   getAdminReferringDoctorHtml(data),
  };

  await emailjs.send(SERVICE_ID, TEMPLATE_ID, adminParams, PUBLIC_KEY);
  console.log('%c[EmailJS] Doctor referral notification sent ✓', 'color:#0d9488;font-weight:bold;');

  // 2. Send Doctor Confirmation Receipt Email
  if (PATIENT_TEMPLATE_ID && PATIENT_TEMPLATE_ID !== 'YOUR_PATIENT_TEMPLATE_ID') {
    const doctorParams = {
      to_email:     data.doctorEmail,
      reply_to:     'info@advancedperiosa.com',
      subject:      `Thank you for your patient referral! - Advanced Periodontics`,
      email_html:   getPatientConfirmationHtml(`Dr. ${data.doctorName}`, `Referral for patient: ${data.patientName}`, data.doctorEmail),
    };
    await emailjs.send(SERVICE_ID, PATIENT_TEMPLATE_ID, doctorParams, PUBLIC_KEY);
    console.log('%c[EmailJS] Doctor confirmation email sent ✓', 'color:#0d9488;font-weight:bold;');
  }
}

// ── File Upload Utility ─────────────────────────────────────────────────────

/**
 * Uploads a file to tmpfiles.org and returns the secure download link URL.
 * Set to expire in 48 hours (172800 seconds).
 */
export async function uploadFileToTmpFiles(file: File): Promise<string> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('expire', '172800'); // 48 hours retention

  const response = await fetch('https://tmpfiles.org/api/v1/upload', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Upload failed for file: ${file.name}`);
  }

  const json = await response.json();
  if (json.status === 'success' && json.data && json.data.url) {
    // Return direct download url instead of view page url
    return json.data.url.replace('tmpfiles.org/', 'tmpfiles.org/dl/');
  }

  throw new Error(`Invalid response during upload for file: ${file.name}`);
}

