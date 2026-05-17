import { NavLink } from '../types';

export const PAYMENT_PORTAL_URL = "https://www.patientviewer.com/?ID=25609&PAY=Y";
export const PHONE_NUMBER = '(210) 332-5335';
export const PHONE_URI = 'tel:2103325335';

export const NAV_LINKS: NavLink[] = [
  { to: '/',                  label: 'Home',               hash: '#home-top' },
  { to: '/about',             label: 'About Us',           hash: '#home-about' },
  { to: '/services',          label: 'Services',           hash: '#home-services' },
  { to: '/patient-info',      label: 'Patient Info',       hash: '#home-patient' },
  { to: '/referring-doctors', label: 'Referring Doctors',   hash: '#home-referring' },
  { to: '/contact-us',        label: 'Contact Us',         hash: '#home-contact' },
  { to: PAYMENT_PORTAL_URL,   label: 'Pay Online',         isExternal: true },
];
export const GOOGLE_MAPS_API_KEY = "AIzaSyBW9_zUXttrvLnUH-ZvoFM7uZijyZTdd8k";

// ─── OPEN DENTAL API CONFIGURATION ──────────────────────────────────────────
export const OPEN_DENTAL_API_KEYS = {
  schertz: {
    officeName: 'Schertz Office',
    customerKey: 'iRqTGAPpURDMaa6E',
  },
  huebner: {
    officeName: 'Huebner Office (San Antonio)',
    customerKey: 'IqOzCvsekKb04ncA',
  }
};

// Paste your Master Developer Key here once received from vendor.relations@opendental.com
export const OPEN_DENTAL_DEVELOPER_KEY = "";
