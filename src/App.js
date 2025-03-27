import React from 'react';
import HeroSection from './components/Hero';
import FeaturesSection from './components/Features';
import HowItWorksSection from './components/HowItWorks';
import CTASection from './components/CTA';
import FooterSection from './components/Footer';
import './App.css';
import ShowcaseSection from './components/Showcase';

function App() {
  return (
    <>
    <HeroSection />
    <FeaturesSection />
    <ShowcaseSection />
    <HowItWorksSection />
    <CTASection />
    <FooterSection />
    </>
  );
}

export default App;
