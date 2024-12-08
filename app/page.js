import Navbar from './components/Navbar';
import content from './data/content.json';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseSection from './components/WhyChooseSection';
import PricingSection from './components/PricingSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection content={content} />
      <ServicesSection content={content} />
      <WhyChooseSection content={content} />
      <PricingSection content={content} />
    </main>
  );
}
