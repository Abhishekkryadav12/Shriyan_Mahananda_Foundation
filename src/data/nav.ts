export interface NavLink {
  label: string;
  path: string;
}

export const navLinks: NavLink[] = [
  { label: 'About', path: '/about' },
  { label: 'Programs', path: '/programs' },
  { label: 'Projects', path: '/projects' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Transparency', path: '/transparency' },
  { label: 'Volunteer', path: '/volunteer' },
  { label: 'Contact', path: '/contact' },
];

export const footerLinks = {
  explore: [
    { label: 'About Us', path: '/about' },
    { label: 'Programs', path: '/programs' },
    { label: 'Projects', path: '/projects' },
    { label: 'Gallery', path: '/gallery' },
  ],
  getInvolved: [
    { label: 'Donate', path: '/donate' },
    { label: 'Volunteer', path: '/volunteer' },
    { label: 'Transparency', path: '/transparency' },
    { label: 'Contact', path: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Use', path: '/terms' },
    { label: 'FAQs', path: '/faqs' },
  ],
};
