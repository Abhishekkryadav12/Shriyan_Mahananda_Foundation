import { HelpCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';

const faqs = [
  {
    question: 'What does Shriyan Mahananda Foundation do?',
    answer: 'We work with communities across India on education, women\'s empowerment, healthcare and cultural preservation. Our programs include learning centres, health camps, blood donation drives, skill development training and environmental protection initiatives.',
  },
  {
    question: 'Is the foundation a registered NGO?',
    answer: 'Yes. Shriyan Mahananda Foundation is formally registered under Reg. No. 260500551137/2026 with Trust PAN ABOT56874P. You can find more details on our Transparency page.',
  },
  {
    question: 'How can I donate?',
    answer: 'You can donate through our Donate page using UPI or direct bank transfer. We are working on integrating a payment gateway for online donations. Every rupee goes directly to our community programs.',
  },
  {
    question: 'Do I need experience to volunteer?',
    answer: 'No prior experience is required. We welcome volunteers of all backgrounds. Simply fill out the registration form on our Volunteer page and our team will get back to you within a few days.',
  },
  {
    question: 'Where does the foundation work?',
    answer: 'We originated in Bihar Sharif, Nalanda, Bihar and currently work across communities in India. Our projects span Sohsarai, Bihar Sharif and various other locations depending on community needs.',
  },
  {
    question: 'How is my donation used?',
    answer: 'All donations directly fund education materials, health camp supplies, women\'s training equipment and community outreach. We do not use donations for overhead costs. Annual and audit reports will be published on our Transparency page.',
  },
  {
    question: 'Can I partner with the foundation?',
    answer: 'Yes. We welcome partnerships with organisations, hospitals, schools and businesses. Please reach out through our Contact page with details about your proposed partnership.',
  },
  {
    question: 'How can I stay updated on the foundation\'s work?',
    answer: 'You can subscribe to our newsletter on the home page for occasional updates on programs, events and impact stories. We also share updates on our social media channels.',
  },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ScrollReveal delay={index * 50}>
      <div className="card overflow-hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between gap-4 p-5 lg:p-6 text-left"
          aria-expanded={isOpen}
        >
          <span className="font-serif text-base font-bold text-navy-900 lg:text-lg">{question}</span>
          <ChevronDown
            className={`h-5 w-5 text-gold-600 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
        {isOpen && (
          <div className="px-5 pb-5 lg:px-6 lg:pb-6 animate-fade-in">
            <p className="text-sm leading-relaxed text-muted-500">{answer}</p>
          </div>
        )}
      </div>
    </ScrollReveal>
  );
}

export default function FAQs() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        description="Common questions about the foundation, donations, volunteering and our programs."
        eyebrow="Legal"
      />
      <section className="section-padding bg-cream-100">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <HelpCircle className="h-5 w-5 text-gold-600" />
              <p className="text-sm text-muted-500">
                Can't find what you're looking for?{' '}
                <Link to="/contact" className="font-medium text-gold-600 hover:underline">
                  Contact us
                </Link>
                .
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
