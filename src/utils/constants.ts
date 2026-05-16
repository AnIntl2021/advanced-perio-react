import { NavLink } from '../types';

export const NAV_LINKS: NavLink[] = [
  { to: '/',                  label: 'Home',               hash: '#home-top' },
  { to: '/about',             label: 'About Us',           hash: '#home-about' },
  { to: '/services',          label: 'Services',           hash: '#home-services' },
  { to: '/patient-info',      label: 'Patient Info',       hash: '#home-patient' },
  { to: '/referring-doctors', label: 'Referring Doctors',   hash: '#home-referring' },
  { to: '/contact-us',        label: 'Contact Us',         hash: '#home-contact' },
];

export const PHONE_NUMBER = '(210) 332-5335';
export const PHONE_URI = 'tel:2103325335';
export const PAYMENT_PORTAL_URL = "https://www.patientviewer.com/?ID=25609&PAY=Y";
