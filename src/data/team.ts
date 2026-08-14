export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string | null;
}

export const team: TeamMember[] = [
  {
    id: 'ruchi',
    name: 'Ruchi Kumari',
    role: 'Founder & President',
    bio: "Leads the foundation's vision of service, culture and dedication, driving programs across education, women's empowerment and community welfare across India.",
    image: null,
  },
  {
    id: 'avinash',
    name: 'Avinash Kumar',
    role: 'Secretary',
    bio: "Oversees governance, documentation and day-to-day coordination between the foundation's programs and its partners.",
    image: '/assets/team/avinash.jpeg',
  },
  {
    id: 'anshuman',
    name: 'Anshuman Shekhar',
    role: 'Treasurer',
    bio: 'Manages financial planning and transparency, ensuring every donation is tracked and reported responsibly.',
    image: '/assets/team/anshuman.jpeg',
  },
  {
    id: 'naulej',
    name: 'Dr. Naulej Kumar',
    role: 'Team Member',
    bio: "Dedicated team member contributing to the foundation's healthcare initiatives and medical camps.",
    image: '/assets/team/naulej.jpeg',
  },
  {
    id: 'ravi',
    name: 'Ravi Ranjan Kumar',
    role: 'Team Member',
    bio: 'Dedicated team member supporting community outreach and development programs.',
    image: '/assets/team/ravi.jpeg',
  },
];
