import { useState } from 'react';
import { CheckCircle2, AlertCircle, Send, Mail, Phone, MapPin } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { foundationInfo } from '@/data/site';

export default function Contact() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.fullName.trim()) newErrors.fullName = 'Please enter your full name.';
    if (!form.email.trim()) newErrors.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Please enter a valid email.';
    if (!form.subject.trim()) newErrors.subject = 'Please enter a subject.';
    if (!form.message.trim()) newErrors.message = 'Please enter your message.';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus('error');
      return;
    }
    setStatus('success');
    setErrors({});
  };

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(foundationInfo.address)}&output=embed`;

  return (
    <>
      <PageHero
        title="We'd love to hear from you"
        description="Reach out about volunteering, partnerships, donations or anything else — our team responds within a few days."
        eyebrow="Contact"
      />

      <section className="section-padding bg-cream-100">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="font-serif text-2xl font-bold text-navy-900 sm:text-3xl">Contact details</h2>
                <p className="mt-3 text-muted-500">
                  Prefer to reach us directly? Use the details below.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="mt-8 space-y-5">
                  <a href={`mailto:${foundationInfo.email}`} className="flex items-start gap-4 group">
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
                  <a href={`tel:${foundationInfo.phone.replace(/\s/g, '')}`} className="flex items-start gap-4 group">
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
              </ScrollReveal>
            </div>

            <div className="lg:col-span-3">
              <ScrollReveal delay={100}>
                <div className="card p-6 lg:p-8">
                  {status === 'success' ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in-up">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600 mb-5">
                        <CheckCircle2 className="h-8 w-8" />
                      </div>
                      <h3 className="font-serif text-xl font-bold text-navy-900">Message sent!</h3>
                      <p className="mt-3 text-sm text-muted-500 max-w-sm">
                        Thank you for reaching out. Our team will get back to you within a few days.
                      </p>
                      <button
                        onClick={() => {
                          setStatus('idle');
                          setForm({ fullName: '', email: '', subject: '', message: '' });
                        }}
                        className="btn-secondary mt-6"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 className="font-serif text-2xl font-bold text-navy-900">Send us a message</h2>
                      <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                          <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-navy-700 mb-1.5">
                              Full name
                            </label>
                            <input
                              id="fullName"
                              type="text"
                              value={form.fullName}
                              onChange={(e) => updateField('fullName', e.target.value)}
                              className="input-field"
                              aria-invalid={!!errors.fullName}
                            />
                            {errors.fullName && (
                              <p className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600">
                                <AlertCircle className="h-4 w-4" />
                                {errors.fullName}
                              </p>
                            )}
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1.5">
                              Email
                            </label>
                            <input
                              id="email"
                              type="email"
                              value={form.email}
                              onChange={(e) => updateField('email', e.target.value)}
                              className="input-field"
                              aria-invalid={!!errors.email}
                            />
                            {errors.email && (
                              <p className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600">
                                <AlertCircle className="h-4 w-4" />
                                {errors.email}
                              </p>
                            )}
                          </div>
                        </div>

                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-navy-700 mb-1.5">
                            Subject
                          </label>
                          <input
                            id="subject"
                            type="text"
                            value={form.subject}
                            onChange={(e) => updateField('subject', e.target.value)}
                            className="input-field"
                            aria-invalid={!!errors.subject}
                          />
                          {errors.subject && (
                            <p className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600">
                              <AlertCircle className="h-4 w-4" />
                              {errors.subject}
                            </p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-1.5">
                            Message
                          </label>
                          <textarea
                            id="message"
                            rows={5}
                            value={form.message}
                            onChange={(e) => updateField('message', e.target.value)}
                            className="input-field resize-none"
                            aria-invalid={!!errors.message}
                          />
                          {errors.message && (
                            <p className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600">
                              <AlertCircle className="h-4 w-4" />
                              {errors.message}
                            </p>
                          )}
                        </div>

                        <button type="submit" className="btn-primary w-full">
                          <Send className="h-4 w-4" />
                          Send message
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-200 pb-20 lg:pb-28">
        <div className="container-page">
          <ScrollReveal>
            <div className="overflow-hidden rounded-2xl border border-navy-100 shadow-card">
              <iframe
                title="Foundation location map"
                src={mapSrc}
                className="w-full h-[400px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
