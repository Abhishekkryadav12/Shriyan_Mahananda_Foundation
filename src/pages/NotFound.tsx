import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-cream-100 px-5 pt-20">
      <div className="text-center">
        <p className="font-serif text-7xl font-bold text-gold-400 sm:text-9xl">404</p>
        <h1 className="mt-4 font-serif text-2xl font-bold text-navy-900 sm:text-3xl">Page not found</h1>
        <p className="mt-3 text-muted-500 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-primary mt-8">
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
