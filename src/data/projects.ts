export interface Project {
  id: string;
  title: string;
  status: 'Ongoing' | 'Completed';
  description: string;
  location: string;
}

export const projects: Project[] = [
  {
    id: 'learning-centre',
    title: 'Community Learning Centre, Sohsarai',
    status: 'Ongoing',
    description: 'A free after-school learning centre offering tuition, books and a safe study space for local children.',
    location: 'Sohsarai, Bihar Sharif',
  },
  {
    id: 'health-camp-series',
    title: 'Mobile Health Camp Series',
    status: 'Ongoing',
    description: 'A rotating health camp bringing doctors, medicines and basic diagnostics to villages without nearby clinics.',
    location: 'Various communities across India',
  },
  {
    id: 'tailoring-unit',
    title: "Women's Tailoring Training Unit",
    status: 'Completed',
    description: 'A three-month tailoring training batch that helped 40 women set up home-based stitching work.',
    location: 'Sant Nagar, Bihar Sharif',
  },
];
