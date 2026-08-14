import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users } from 'lucide-react';

export default function DonationCTA() {
  return (
    <section className="bg-navy-900 py-20 lg:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight text-balance">
            Your support builds a stronger India
          </h2>
          <p className="mt-4 text-base text-navy-200 sm:text-lg max-w-2xl mx-auto">
            Every rupee goes directly to education, health and empowerment programs on the ground.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/donate" className="btn-primary">
              <Heart className="h-4 w-4" fill="currentColor" />
              Donate Now
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/volunteer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-navy-800"
            >
              <Users className="h-4 w-4" />
              Volunteer instead
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
