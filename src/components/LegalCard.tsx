import type { ReactNode } from 'react';

interface LegalCardProps {
  icon: ReactNode;
  title: string;
  value: string;
  status: 'Available' | 'Coming soon';
  children?: ReactNode;
}

export default function LegalCard({ icon, title, value, status, children }: LegalCardProps) {
  const isAvailable = status === 'Available';

  return (
    <div className="card card-hover p-6 lg:p-7 flex flex-col">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-100 text-gold-600 mb-5">
        {icon}
      </div>
      <h3 className="font-serif text-lg font-bold text-navy-900">{title}</h3>
      <p className="mt-2 text-sm text-muted-500 break-all">{value}</p>
      {children}
      <div className="mt-5 pt-4 border-t border-navy-50">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
            isAvailable ? 'bg-green-50 text-green-700' : 'bg-gold-50 text-gold-700'
          }`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${isAvailable ? 'bg-green-500' : 'bg-gold-400'}`} />
          {status}
        </span>
      </div>
    </div>
  );
}
