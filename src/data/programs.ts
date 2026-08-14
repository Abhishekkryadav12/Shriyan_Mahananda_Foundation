export interface Program {
  id: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  image: string;
  icon: string;
}

export const programs: Program[] = [
  {
    id: 'education',
    title: 'Education for All',
    description: 'Supporting underprivileged children with school supplies, tuition support and learning centres across India.',
    metric: '1,200+',
    metricLabel: 'children',
    image: '/assets/programs/education.jpeg',
    icon: 'BookOpen',
  },
  {
    id: 'women-empowerment',
    title: 'Women Empowerment',
    description: 'Skill-building, self-help groups and micro-enterprise support that help women across India become financially independent.',
    metric: '400+',
    metricLabel: 'women',
    image: '/assets/programs/women-empowerment.jpeg',
    icon: 'Heart',
  },
  {
    id: 'skill-development',
    title: 'Skill Development',
    description: 'Vocational training in tailoring, computers and trades for youth to improve employability.',
    metric: '300+',
    metricLabel: 'youth',
    image: '/assets/programs/skill-development.jpeg',
    icon: 'Wrench',
  },
  {
    id: 'health-camps',
    title: 'Health Camps',
    description: 'Free health check-ups, medicine distribution and awareness camps in villages with limited healthcare access.',
    metric: '2,000+',
    metricLabel: 'patients',
    image: '/assets/programs/health-camps.jpeg',
    icon: 'Stethoscope',
  },
  {
    id: 'blood-donation',
    title: 'Blood Donation Drives',
    description: 'Regular blood donation camps in partnership with local hospitals to keep blood banks stocked.',
    metric: '600+',
    metricLabel: 'units collected',
    image: '/assets/programs/blood-donation.png',
    icon: 'Droplet',
  },
  {
    id: 'environmental',
    title: 'Environmental Protection',
    description: 'Tree plantation drives, cleanliness campaigns and awareness programs for a greener India.',
    metric: '5,000+',
    metricLabel: 'trees planted',
    image: '/assets/programs/environmental.jpeg',
    icon: 'TreePine',
  },
];
