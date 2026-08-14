export type GalleryCategory =
  | 'All'
  | 'Events'
  | 'Projects'
  | 'Blood Donation'
  | 'Plantation'
  | 'Awareness Programs'
  | 'Cultural Programs';

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, 'All'>;
}

export const galleryCategories: GalleryCategory[] = [
  'All',
  'Events',
  'Projects',
  'Blood Donation',
  'Plantation',
  'Awareness Programs',
  'Cultural Programs',
];

export const galleryImages: GalleryImage[] = [
  { id: 'bd1', src: '/assets/gallery/blood-donation-1.png', alt: 'Blood donation camp', category: 'Blood Donation' },
  { id: 'bd2', src: '/assets/gallery/blood-donation-2.png', alt: 'Blood donation drive', category: 'Blood Donation' },
  { id: 'h1', src: '/assets/gallery/health-1.jpeg', alt: 'Health camp', category: 'Blood Donation' },
  { id: 'h2', src: '/assets/gallery/health-2.jpeg', alt: 'Health check-up', category: 'Blood Donation' },
  { id: 'h3', src: '/assets/gallery/health-3.jpeg', alt: 'Medical camp', category: 'Blood Donation' },
  { id: 'p1', src: '/assets/gallery/plantation-1.jpeg', alt: 'Tree plantation drive', category: 'Plantation' },
  { id: 'p2', src: '/assets/gallery/plantation-2.jpeg', alt: 'Environmental protection', category: 'Plantation' },
  { id: 'p3', src: '/assets/gallery/plantation-3.jpeg', alt: 'Tree planting', category: 'Plantation' },
  { id: 'p4', src: '/assets/gallery/plantation-4.jpeg', alt: 'Green initiative', category: 'Plantation' },
  { id: 'e1', src: '/assets/gallery/education-1.jpeg', alt: 'Education program', category: 'Awareness Programs' },
  { id: 'e2', src: '/assets/gallery/education-2.jpeg', alt: 'Learning centre', category: 'Awareness Programs' },
  { id: 'e3', src: '/assets/gallery/education-3.jpeg', alt: 'Teaching session', category: 'Awareness Programs' },
  { id: 'e4', src: '/assets/gallery/education-4.jpeg', alt: 'School supplies distribution', category: 'Awareness Programs' },
  { id: 'e5', src: '/assets/gallery/education-5.jpeg', alt: 'Children education', category: 'Awareness Programs' },
  { id: 's1', src: '/assets/gallery/skill-1.jpeg', alt: 'Skill development training', category: 'Cultural Programs' },
  { id: 's2', src: '/assets/gallery/skill-2.jpeg', alt: 'Vocational training', category: 'Cultural Programs' },
  { id: 's3', src: '/assets/gallery/skill-3.jpeg', alt: 'Tailoring training', category: 'Cultural Programs' },
  { id: 's4', src: '/assets/gallery/skill-4.jpeg', alt: 'Computer training', category: 'Cultural Programs' },
  { id: 's5', src: '/assets/gallery/skill-5.jpeg', alt: 'Skill workshop', category: 'Cultural Programs' },
  { id: 'ev1', src: '/assets/gallery/events-1.jpeg', alt: 'Community event', category: 'Events' },
  { id: 'ev2', src: '/assets/gallery/events-2.jpeg', alt: 'Foundation event', category: 'Events' },
  { id: 'ev3', src: '/assets/gallery/events-3.jpeg', alt: 'Women empowerment event', category: 'Events' },
  { id: 'ev4', src: '/assets/gallery/events-4.jpeg', alt: 'Community gathering', category: 'Events' },
  { id: 'ev5', src: '/assets/gallery/events-5.jpeg', alt: 'Volunteer event', category: 'Events' },
  { id: 'ev6', src: '/assets/gallery/events-6.jpeg', alt: 'Outreach program', category: 'Events' },
  { id: 'ev7', src: '/assets/gallery/events-7.jpeg', alt: 'Community activity', category: 'Events' },
  { id: 'ev8', src: '/assets/gallery/events-8.jpeg', alt: 'Field work', category: 'Events' },
];
