import { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setError('Please enter your email address.');
      setStatus('error');
      return;
    }

    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    setStatus('success');
    setError('');
    setEmail('');
  };

  return (
    <section className="bg-cream-100 py-20 lg:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-100 text-gold-600 mb-6">
            <Mail className="h-7 w-7" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
            Stay updated with our work
          </h2>
          <p className="mt-4 text-base text-muted-500 sm:text-lg">
            Occasional updates on programs, events and impact stories. No spam.
          </p>

          {status === 'success' ? (
            <div className="mt-8 flex items-center justify-center gap-3 rounded-xl border border-green-200 bg-green-50 px-6 py-4 text-green-700 animate-fade-in-up">
              <CheckCircle2 className="h-5 w-5" />
              <p className="text-sm font-medium">
                Thank you for subscribing! We'll be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-center">
              <div className="flex-1 max-w-md w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setStatus('idle');
                  }}
                  placeholder="you@example.com"
                  className="input-field"
                  aria-label="Email address"
                  aria-invalid={status === 'error'}
                />
                {status === 'error' && (
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-red-600">
                    <AlertCircle className="h-4 w-4" />
                    {error}
                  </p>
                )}
              </div>
              <button type="submit" className="btn-primary shrink-0">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
