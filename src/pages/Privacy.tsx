import { Shield } from 'lucide-react';
import PageHero from '@/components/PageHero';

const sections = [
  {
    heading: 'Information We Collect',
    body: 'We collect information you voluntarily provide when you contact us, volunteer, or donate — including your name, email address, phone number and any message content. We do not collect sensitive financial information directly through this website.',
  },
  {
    heading: 'How We Use Your Information',
    body: 'Your information is used solely to respond to your inquiries, coordinate volunteer activities, process donations and keep you updated on foundation programs if you have opted in. We never sell or rent your personal information to third parties.',
  },
  {
    heading: 'Data Storage & Security',
    body: 'We take reasonable measures to protect your personal information against unauthorised access, alteration or disclosure. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.',
  },
  {
    heading: 'Cookies',
    body: 'This website does not use tracking cookies for advertising. Any cookies used are essential for the proper functioning of the site and do not collect personally identifiable information.',
  },
  {
    heading: 'Your Rights',
    body: 'You may request access to, correction of, or deletion of your personal information at any time by contacting us at shriyanmahanandafoundation@zohomail.in. We will respond to your request within a reasonable timeframe.',
  },
  {
    heading: 'Updates to This Policy',
    body: 'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this page periodically.',
  },
];

export default function Privacy() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description="How Shriyan Mahananda Foundation collects, uses and protects your personal information."
        eyebrow="Legal"
      />
      <section className="section-padding bg-cream-100">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3 mb-8 text-muted-500">
              <Shield className="h-5 w-5 text-gold-600" />
              <p className="text-sm">Last updated: August 2026</p>
            </div>
            <div className="space-y-8">
              {sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="font-serif text-xl font-bold text-navy-900">{section.heading}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-500">{section.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
