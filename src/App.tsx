import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Programs from '@/pages/Programs';
import Projects from '@/pages/Projects';
import Gallery from '@/pages/Gallery';
import Transparency from '@/pages/Transparency';
import Volunteer from '@/pages/Volunteer';
import Contact from '@/pages/Contact';
import Donate from '@/pages/Donate';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import FAQs from '@/pages/FAQs';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/transparency" element={<Transparency />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
