import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { footerLinks } from '@/data/nav';
import { foundationInfo } from '@/data/site';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-100">
      <div className="container-page py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/logo/footer-logo.jpeg"
                alt="Shriyan Mahananda Foundation"
                className="h-12 w-12 rounded-lg object-cover"
              />
              <div>
                <p className="font-serif text-lg font-bold text-white">
                  Shriyan Mahananda Foundation
                </p>
                <p className="devanagari text-sm text-gold-400">
                  सेवा • संस्कृति • समर्पण
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-navy-200 max-w-sm">
              Originating in Bihar and working across India for education, women empowerment,
              health and community welfare — with service, culture and dedication at heart.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Youtube, label: 'YouTube' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-800 text-navy-200 transition-all duration-200 hover:bg-gold-400 hover:text-navy-900"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-4">Explore</h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-navy-200 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-4">Get Involved</h3>
            <ul className="space-y-3">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-navy-200 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-navy-200 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${foundationInfo.email}`}
                  className="flex items-start gap-2 text-sm text-navy-200 transition-colors hover:text-white break-all"
                >
                  <Mail className="h-4 w-4 mt-0.5 shrink-0 text-gold-400" />
                  <span>{foundationInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${foundationInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-start gap-2 text-sm text-navy-200 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 mt-0.5 shrink-0 text-gold-400" />
                  <span>{foundationInfo.phone}</span>
                </a>
              </li>
              <li>
                <p className="flex items-start gap-2 text-sm text-navy-200">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold-400" />
                  <span>{foundationInfo.address}</span>
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-navy-800 pt-6 text-center">
          <p className="text-xs text-navy-300">
            &copy; 2026 Shriyan Mahananda Foundation. All rights reserved.
          </p>
          <p className="text-xs text-navy-400 mt-1">
            Reg. No. {foundationInfo.registrationNumber} &middot; Trust PAN {foundationInfo.trustPan}
          </p>
        </div>
      </div>
    </footer>
  );
}
