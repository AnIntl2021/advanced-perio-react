export interface NavLink {
  to: string;
  label: string;
  hash?: string;
  isExternal?: boolean;
}

export interface Service {
  img: string;
  icon: string;
  title: string;
  desc: string;
  to: string;
}

export interface Membership {
  img: string;
  alt: string;
}
