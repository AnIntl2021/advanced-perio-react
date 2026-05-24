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
        
        <p>Our team is currently reviewing clinic availability to match you with the best slot. A member of our scheduling staff will contact you at your provided phone number or email address shortly to finalize your appointment time.</p>
        
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
