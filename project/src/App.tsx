import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import VisionSection from './sections/VisionSection';
import ServicesSection from './sections/ServicesSection';
import WhyChooseSection from './sections/WhyChooseSection';
import FounderSection from './sections/FounderSection';
import ContactSection from './sections/ContactSection';
import ScrollAnimationObserver from './components/ScrollAnimationObserver';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ScrollAnimationObserver>
          <VisionSection />
          <ServicesSection />
          <WhyChooseSection />
          <FounderSection />
          <ContactSection />
        </ScrollAnimationObserver>
      </main>
      <Footer />
    </div>
  );
}

export default App;