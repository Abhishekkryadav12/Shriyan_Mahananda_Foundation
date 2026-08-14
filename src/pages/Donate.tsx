import { useState } from 'react';
import { Heart, Copy, Check, Building2, Mail, Phone } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import { foundationInfo } from '@/data/site';

const presetAmounts = [500, 1000, 2500, 5000, 10000, 25000];

const donationConfig = {
  upiId: 'shriyanmahananda@upi',
  bankName: 'To be announced',
  accountName: 'Shriyan Mahananda Foundation',
  accountNumber: 'To be announced',
  ifscCode: 'To be announced',
  note: 'Payment gateway integration (Razorpay/UPI) coming soon. You can use the UPI ID above to donate directly.',
};

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [copied, setCopied] = useState(false);

  const finalAmount = customAmount ? parseInt(customAmount, 10) : selectedAmount;

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(donationConfig.upiId).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      <PageHero
        title="Your support builds a stronger India"
        description="Every rupee goes directly to education, health and empowerment programs on the ground. Choose an amount below to contribute."
        eyebrow="Donate"
      />

      <section className="section-padding bg-cream-100">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 max-w-5xl mx-auto">
            <ScrollReveal>
              <div>
                <h2 className="font-serif text-2xl font-bold text-navy-900">Choose an amount</h2>
                <p className="mt-3 text-sm text-muted-500">
                  All donations are used for community programs across India.
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {presetAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => { setSelectedAmount(amount); setCustomAmount(''); }}
                      className={`rounded-xl border-2 px-4 py-4 text-center transition-all duration-200 ${
                        selectedAmount === amount && !customAmount
                          ? 'border-gold-400 bg-gold-50 text-navy-900'
                          : 'border-navy-100 bg-white text-navy-700 hover:border-navy-200'
                      }`}
                    >
                      <span className="font-serif text-lg font-bold">
                        &#8377;{amount.toLocaleString('en-IN')}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="mt-4">
                  <label htmlFor="customAmount" className="block text-sm font-medium text-navy-700 mb-1.5">
                    Or enter a custom amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-serif text-lg font-bold text-navy-500">
                      &#8377;
                    </span>
                    <input
                      id="customAmount"
                      type="number"
                      min="1"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                      placeholder="Enter amount"
                      className="input-field pl-9"
                    />
                  </div>
                </div>

                {finalAmount && finalAmount > 0 && (
                  <div className="mt-6 rounded-xl bg-navy-50 p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-500">Your contribution</span>
                      <span className="font-serif text-2xl font-bold text-navy-900">
                        &#8377;{(finalAmount || 0).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                )}

                <button
                  className="btn-primary mt-6 w-full"
                  disabled={!finalAmount || finalAmount <= 0}
                  onClick={() => alert('Payment gateway integration coming soon. Please use the UPI ID to donate directly.')}
                >
                  <Heart className="h-4 w-4" fill="currentColor" />
                  Donate &#8377;{(finalAmount || 0).toLocaleString('en-IN')}
                </button>

                <p className="mt-4 text-xs text-muted-400 text-center leading-relaxed">
                  {donationConfig.note}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="card p-6 lg:p-8">
                <h2 className="font-serif text-2xl font-bold text-navy-900">Payment details</h2>
                <p className="mt-2 text-sm text-muted-500">
                  Direct bank transfer or UPI details for offline donations.
                </p>

                <div className="mt-6 rounded-xl border border-navy-100 bg-cream-50 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-400">UPI ID</p>
                      <p className="font-mono text-base font-semibold text-navy-900 mt-0.5">
                        {donationConfig.upiId}
                      </p>
                    </div>
                    <button
                      onClick={handleCopyUpi}
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-100 text-gold-600 transition-colors hover:bg-gold-200"
                      aria-label="Copy UPI ID"
                    >
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  {[
                    { label: 'Bank', value: donationConfig.bankName },
                    { label: 'Account Name', value: donationConfig.accountName },
                    { label: 'Account Number', value: donationConfig.accountNumber },
                    { label: 'IFSC Code', value: donationConfig.ifscCode },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-100 text-gold-600 shrink-0">
                        <Building2 className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-400">{item.label}</p>
                        <p className="font-medium text-navy-800">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 border-t border-navy-50 pt-5">
                  <p className="text-sm font-medium text-navy-700 mb-3">Need help with your donation?</p>
                  <div className="space-y-2">
                    <a
                      href={`mailto:${foundationInfo.email}`}
                      className="flex items-center gap-2 text-sm text-muted-500 hover:text-gold-600 transition-colors break-all"
                    >
                      <Mail className="h-4 w-4 shrink-0" />
                      {foundationInfo.email}
                    </a>
                    <a
                      href={`tel:${foundationInfo.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-2 text-sm text-muted-500 hover:text-gold-600 transition-colors"
                    >
                      <Phone className="h-4 w-4 shrink-0" />
                      {foundationInfo.phone}
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <div className="mt-16 mx-auto max-w-3xl text-center">
              <SectionHeading
                title="Where your donation goes"
                description="Every contribution directly funds education materials, health camp supplies, women's training equipment and community outreach — not overhead."
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
