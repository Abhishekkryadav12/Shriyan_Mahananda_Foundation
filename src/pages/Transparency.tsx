import { FileCheck, FileText, FileBarChart, Mail, Phone, MapPin } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import ScrollReveal from '@/components/ScrollReveal';
import LegalCard from '@/components/LegalCard';
import { foundationInfo } from '@/data/site';

export default function Transparency() {
  return (
    <>
      <PageHero
        title="Open about our registration and finances"
        description="We believe trust is earned through openness. Here's our registration status and where our reports will be published."
        eyebrow="Transparency"
      />

      <section className="section-padding bg-cream-100">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ScrollReveal delay={0}>
              <LegalCard
                icon={<FileCheck className="h-6 w-6" />}
                title="Registration Certificate"
                value={`Reg. No. ${foundationInfo.registrationNumber}`}
                status="Available"
              />
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <LegalCard
                icon={<FileText className="h-6 w-6" />}
                title="Trust PAN"
                value={foundationInfo.trustPan}
                status="Available"
              />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <LegalCard
                icon={<FileBarChart className="h-6 w-6" />}
                title="Annual Report"
                value="Published annually after year-end review"
                status="Coming soon"
              />
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <LegalCard
                icon={<FileBarChart className="h-6 w-6" />}
                title="Audit Report"
                value="Independent financial audit, published yearly"
                status="Coming soon"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-200">
        <div className="container-page">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Questions?"
              title="Get in touch"
              description="Have questions about our registration, finances or programs? Reach out — we're happy to answer."
            />
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mt-12 mx-auto max-w-2xl">
              <div className="card p-8 lg:p-10">
                <div className="space-y-5">
                  <a href={`mailto:${foundationInfo.email}`} className="flex items-center gap-4 group">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-100 text-gold-600 shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-400">Email</p>
                      <p className="font-medium text-navy-800 group-hover:text-gold-600 transition-colors break-all">
                        {foundationInfo.email}
                      </p>
                    </div>
                  </a>
                  <a href={`tel:${foundationInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 group">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-100 text-gold-600 shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-400">Phone</p>
                      <p className="font-medium text-navy-800 group-hover:text-gold-600 transition-colors">
                        {foundationInfo.phone}
                      </p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-100 text-gold-600 shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-400">Address</p>
                      <p className="font-medium text-navy-800">{foundationInfo.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
