import { FileText } from 'lucide-react';
import PageHero from '@/components/PageHero';

const sections = [
  {
    heading: 'Acceptance of Terms',
    body: 'By accessing and using this website, you accept and agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use our website.',
  },
  {
    heading: 'Use of the Website',
    body: 'You agree to use this website for lawful purposes only. You must not use the site in any way that violates applicable laws, infringes the rights of others, or could damage, disable or impair the website.',
  },
  {
    heading: 'Intellectual Property',
    body: 'All content on this website — including text, images, logos and design elements — is the property of Shriyan Mahananda Foundation unless otherwise stated. You may not reproduce, distribute or use any content without prior written permission.',
  },
  {
    heading: 'Donations',
    body: 'Donations made to Shriyan Mahananda Foundation are voluntary and non-refundable except in cases of proven error or fraud. We reserve the right to allocate donations to the areas of greatest need within our stated program areas.',
  },
  {
    heading: 'Volunteer Participation',
    body: 'Volunteers participate at their own risk and agree to follow the foundation\'s guidelines and code of conduct. The foundation is not liable for any personal injury, loss or damage incurred during volunteer activities.',
  },
  {
    heading: 'Limitation of Liability',
    body: 'Shriyan Mahananda Foundation shall not be liable for any indirect, incidental or consequential damages arising from the use of this website. We provide the website "as is" without warranties of any kind.',
  },
  {
    heading: 'Changes to Terms',
    body: 'We reserve the right to modify these Terms of Use at any time. Continued use of the website after changes constitutes acceptance of the updated terms.',
  },
];

export default function Terms() {
  return (
    <>
      <PageHero
        title="Terms of Use"
        description="The terms and conditions for using the Shriyan Mahananda Foundation website."
        eyebrow="Legal"
      />
      <section className="section-padding bg-cream-100">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3 mb-8 text-muted-500">
              <FileText className="h-5 w-5 text-gold-600" />
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
