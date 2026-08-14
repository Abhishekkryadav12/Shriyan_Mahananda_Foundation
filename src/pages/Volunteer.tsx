import { useState } from 'react';
import { CheckCircle2, AlertCircle, Send, Heart, Users, Calendar, Award, Sprout } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { volunteerRoles, volunteerBenefits } from '@/data/site';

const benefitIcons = [Users, Calendar, Award, Sprout];

export default function Volunteer() {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    role: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.fullName.trim()) newErrors.fullName = 'Please enter your full name.';
    if (!form.phone.trim()) newErrors.phone = 'Please enter your phone number.';
    else if (!/^[+]?[\d\s-]{10,15}$/.test(form.phone)) newErrors.phone = 'Please enter a valid phone number.';
    if (!form.email.trim()) newErrors.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Please enter a valid email.';
    if (!form.role) newErrors.role = 'Please select a preferred role.';
    if (!form.message.trim()) newErrors.message = 'Please tell us why you want to volunteer.';
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

  return (
    <>
      <PageHero
        title="Give your time, change a life"
        description="We welcome volunteers of all backgrounds — no prior experience required. Tell us how you'd like to help."
        eyebrow="Volunteer"
      />

      <section className="section-padding bg-cream-100">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <ScrollReveal>
                <h2 className="font-serif text-2xl font-bold text-navy-900 sm:text-3xl">Why volunteer</h2>
                <p className="mt-3 text-muted-500">
                  Join a growing community of volunteers making direct impact across India.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="mt-8">
                  <h3 className="font-serif text-lg font-bold text-navy-900 mb-4">What you'll get</h3>
                  <ul className="space-y-4">
                    {volunteerBenefits.map((benefit, index) => {
                      const Icon = benefitIcons[index] ?? Heart;
                      return (
                        <li key={index} className="flex items-start gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-100 text-gold-600 shrink-0">
                            <Icon className="h-4 w-4" />
                          </div>
                          <p className="text-sm text-navy-700 pt-1.5">{benefit}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="mt-8">
                  <h3 className="font-serif text-lg font-bold text-navy-900 mb-4">Roles</h3>
                  <div className="flex flex-wrap gap-2">
                    {volunteerRoles.map((role) => (
                      <span
                        key={role}
                        className="rounded-full border border-navy-100 bg-white px-4 py-2 text-sm font-medium text-navy-700"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={100}>
              <div className="card p-6 lg:p-8">
                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in-up">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600 mb-5">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-navy-900">Registration received!</h3>
                    <p className="mt-3 text-sm text-muted-500 max-w-sm">
                      Thank you for your interest in volunteering. Our team will reach out to you within a few days.
                    </p>
                    <button
                      onClick={() => {
                        setStatus('idle');
                        setForm({ fullName: '', phone: '', email: '', role: '', message: '' });
                      }}
                      className="btn-secondary mt-6"
                    >
                      Submit another response
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-serif text-2xl font-bold text-navy-900">Volunteer Registration</h2>
                    <p className="mt-2 text-sm text-muted-500">
                      Fill in your details and we'll get back to you.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
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

                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-navy-700 mb-1.5">
                            Phone number
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            value={form.phone}
                            onChange={(e) => updateField('phone', e.target.value)}
                            className="input-field"
                            aria-invalid={!!errors.phone}
                          />
                          {errors.phone && (
                            <p className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600">
                              <AlertCircle className="h-4 w-4" />
                              {errors.phone}
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
                        <label htmlFor="role" className="block text-sm font-medium text-navy-700 mb-1.5">
                          Preferred role
                        </label>
                        <select
                          id="role"
                          value={form.role}
                          onChange={(e) => updateField('role', e.target.value)}
                          className="input-field cursor-pointer"
                          aria-invalid={!!errors.role}
                        >
                          <option value="">Select a role</option>
                          {volunteerRoles.map((role) => (
                            <option key={role} value={role}>{role}</option>
                          ))}
                        </select>
                        {errors.role && (
                          <p className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600">
                            <AlertCircle className="h-4 w-4" />
                            {errors.role}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-1.5">
                          Why do you want to volunteer with us?
                        </label>
                        <textarea
                          id="message"
                          rows={4}
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
                        Submit registration
                      </button>
                    </form>
                  </>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
