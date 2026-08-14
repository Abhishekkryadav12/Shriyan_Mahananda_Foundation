import { Link, NavLink } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navLinks } from '@/data/nav';
import { useScrollPosition } from '@/hooks/useAnimations';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrollPosition();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-navy-100'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container-page flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 shrink-0" onClick={() => setMobileOpen(false)}>
          <img
            src="/assets/logo/logo.png"
            alt="Shriyan Mahananda Foundation logo"
            className="h-11 w-11 rounded-lg object-contain"
          />
          <div className="hidden sm:block">
            <p className="font-serif text-base font-bold leading-tight text-navy-900">
              Shriyan Mahananda Foundation
            </p>
            <p className="devanagari text-xs font-medium text-gold-600">
              सेवा • संस्कृति • समर्पण
            </p>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-gold-600'
                      : 'text-navy-700 hover:text-navy-900 hover:bg-navy-50'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gold-400" />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-2 shrink-0">
          <Link to="/donate" className="btn-primary">
            <Heart className="h-4 w-4" fill="currentColor" />
            Donate Now
          </Link>
        </div>

        <button
          className="lg:hidden flex items-center justify-center rounded-lg p-2 text-navy-800 hover:bg-navy-50 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden border-t border-navy-100 bg-white animate-fade-in">
          <div className="container-page py-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-gold-50 text-gold-700'
                          : 'text-navy-700 hover:bg-navy-50'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Link
              to="/donate"
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-3 w-full"
            >
              <Heart className="h-4 w-4" fill="currentColor" />
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
