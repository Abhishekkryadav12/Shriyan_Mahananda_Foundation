export interface TimelineItem {
  year: string;
  text: string;
}

export const timeline: TimelineItem[] = [
  { year: '2023', text: 'Idea for the foundation takes shape after community outreach in Sohsarai.' },
  { year: '2024', text: 'First learning centre and health camp organised in Bihar Sharif.' },
  { year: '2025', text: "Women's tailoring unit and blood donation drives expand our reach." },
  { year: '2026', text: 'Formal registration as Shriyan Mahananda Foundation, Reg. No. 260500551137/2026.' },
];

export interface MissionCard {
  title: string;
  text: string;
  icon: string;
}

export const missionCards: MissionCard[] = [
  {
    title: 'Our Mission',
    text: 'To serve underprivileged communities across India through education, health, empowerment and cultural preservation, with dignity at the centre of every program.',
    icon: 'Target',
  },
  {
    title: 'Our Vision',
    text: 'A self-reliant India where every family has access to education, healthcare and opportunity, rooted in shared culture and service.',
    icon: 'Eye',
  },
  {
    title: 'Our Values',
    text: 'Seva (service), transparency and community-first decision making guide every project we run, however small.',
    icon: 'Heart',
  },
  {
    title: 'Our Approach',
    text: 'We work directly with local volunteers and families, building programs around what each village actually needs.',
    icon: 'Users',
  },
];

export interface ImpactStat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export const impactStats: ImpactStat[] = [
  { value: 5200, suffix: '+', label: 'Lives Impacted', icon: 'Heart' },
  { value: 180, suffix: '+', label: 'Active Volunteers', icon: 'Users' },
  { value: 42, suffix: '', label: 'Villages Reached', icon: 'MapPin' },
  { value: 9, suffix: '', label: 'Programs Running', icon: 'Activity' },
];

export const founderQuote = {
  quote: 'We started with one classroom and a handful of volunteers. Today, that same spirit of seva reaches thousands of families across India.',
  name: 'Ruchi Kumari',
  role: 'Founder & President',
};

export const founderMessage = {
  quote: 'I grew up watching families in our own neighbourhood struggle to access basic education and healthcare. Shriyan Mahananda Foundation exists so that no child in India has to go without a classroom, and no family has to travel far for a doctor. Our name carries a promise — of service, culture and dedication — and every program we run is built to keep that promise.',
  name: 'Ruchi Kumari',
  role: 'Founder & President',
};

export const foundationInfo = {
  registrationNumber: '260500551137/2026',
  trustPan: 'ABOT56874P',
  location: 'Bihar Sharif, Nalanda, Bihar',
  email: 'shriyanmahanandafoundation@zohomail.in',
  phone: '+91 62043 87598',
  address: 'Sohsarai, Near Anju Medical, Kisan College, Hanuman Mandir, Bihar Sharif, Nalanda, Bihar 803118',
};

export const volunteerRoles = [
  'Teaching & Tutoring',
  'Health Camp Support',
  'Event Coordination',
  'Photography & Content',
  'Fundraising & Outreach',
  'Administration',
];

export const volunteerBenefits = [
  'Work directly with communities across India',
  'Flexible, part-time or one-off commitments',
  'Certificate of appreciation for regular volunteers',
  'Be part of a growing, hands-on local team',
];
