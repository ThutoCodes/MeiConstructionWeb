import HeroBanner from '../components/HeroBanner';
import HomeSections from '../components/sections/HomeSections';
import StatsSection from '../components/sections/StatsSection';
import ProjectShowcase from '../components/sections/ProjectShowcase';
import Testimonials from '../components/sections/Testimonials';
import Clients from '../components/sections/Clients';

export default function Homepage() {
  return (
    <div className="overflow-hidden">
      <div className="text-center mt-10 mb-8 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Welcome to <span className="text-green-700">MEI Construction</span>
        </h1>
        <p className="text-lg text-gray-600 mt-3">
          Delivering excellence in mining, engineering, and infrastructure.
        </p>
      </div>

      <HeroBanner />
      <HomeSections />
      <StatsSection />
      <ProjectShowcase />
      <Testimonials />
      <Clients />
    </div>
  );
}