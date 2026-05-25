import { Service, Membership } from '../types';

import svcImplants from '../assets/dental_implants.webp';
import svcGumDisease from '../assets/gum_disease_treament.webp';
import svcDeepCleaning from '../assets/deep_cleaning.webp';
import svcGumGrafting from '../assets/gum_grafting.webp';
import svcContouring from '../assets/gum_contouring.webp';
import svcSedation from '../assets/sedation_dentistry.webp';
import svcJaw from '../assets/jaw_bone_graft.png';
import svcExposeBond from '../assets/expose_bond.png';

import logoAbpCert from '../assets/logo-abp-certified.png';
import logoAbp from '../assets/logo-abp.png';
import logoAda from '../assets/logo-ada.png';
import logoTda from '../assets/logo-tda.png';
import logoUthsa from '../assets/logo-uthsa.png';
import logoSadds from '../assets/logo-sadds.png';
import logoSsp from '../assets/logo-ssp.png';
import logoAap from '../assets/logo-aap.png';
import logoTsp from '../assets/logo-tsp.png';

export const SERVICES: Service[] = [
  { img: svcImplants,     icon: 'fas fa-tooth',         title: 'Dental Implants',      desc: 'Permanent, natural-looking tooth replacements using the latest implant systems for single teeth to full-mouth restoration.', to: '/services/dental-implants' },
  { img: svcGumDisease,   icon: 'fas fa-heartbeat',     title: 'Gum Disease Treatment', desc: 'Comprehensive care for all stages of periodontal disease, including scaling, root planing, and laser-assisted therapy.', to: '/services/gum-disease-treatment' },
  { img: svcDeepCleaning, icon: 'fas fa-shield-alt',    title: 'Deep Cleaning',         desc: 'Professional scaling and root planing to remove tartar and bacteria below the gumline and restore periodontal health.', to: '/services/deep-cleaning' },
  { img: svcGumGrafting,  icon: 'fas fa-procedures',    title: 'Gum Grafting',          desc: 'Correct gum recession and protect exposed tooth roots with advanced soft-tissue grafting techniques.', to: '/services/gum-grafting' },
  { img: svcContouring,   icon: 'fas fa-magic',         title: 'Gum Contouring',        desc: 'Reshape your gum line for a more balanced, attractive smile through precise esthetic periodontal surgery.', to: '/services/gum-contouring' },
  { img: svcSedation,     icon: 'fas fa-spa',           title: 'Sedation Dentistry',    desc: 'Relax comfortably during your procedure with our safe sedation options, designed for anxious patients.', to: '/services/sedation-dentistry' },
  { img: svcJaw,          icon: 'fas fa-shield-virus',  title: 'Jaw Bone Augmentation & Sinus Lift', desc: 'Advanced procedures to address bone loss and provide structural support for dental implant placement.', to: '/jaw-bone-augmentation-sinus-lift' },
  { img: svcExposeBond,   icon: 'fas fa-link',          title: 'Expose & Bond Procedure', desc: 'Surgical exposure and orthodontic bonding to guide impacted teeth into proper alignment.', to: '/services/expose-bond-procedure' },
];

export const MEMBERSHIPS: Membership[] = [
  { img: logoAbpCert, alt: 'American Board of Periodontology – Board Certified' },
  { img: logoAbp,     alt: 'American Board of Periodontology' },
  { img: logoAda,     alt: 'American Dental Association' },
  { img: logoTda,     alt: 'Texas Dental Association' },
  { img: logoUthsa,   alt: 'UT Health San Antonio School of Dentistry' },
  { img: logoSadds,   alt: 'San Antonio District Dental Society' },
  { img: logoSsp,     alt: 'Southwest Society of Periodontists' },
  { img: logoAap,     alt: 'American Academy of Periodontology' },
  { img: logoTsp,     alt: 'Texas Society of Periodontists' },
];
