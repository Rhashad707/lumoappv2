
import React from 'react';
import { HeroSection } from './components/HeroSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { WhyItIsBetterSection } from './components/WhyItIsBetterSection';
import { LivePreviewSection } from './components/LivePreviewSection';
import { CoreFeaturesSection } from './components/CoreFeaturesSection';
import { FlowingOrbsBackground } from './components/FlowingOrbsBackground';
import { StatsSection } from './components/StatsSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-white selection:bg-brand-cyan selection:text-black relative">
      <FlowingOrbsBackground />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-40 sm:space-y-48 md:space-y-56 lg:space-y-64 relative z-10">
        <HeroSection />
        <HowItWorksSection />
        <StatsSection />
        <CoreFeaturesSection />
        <LivePreviewSection />
      </main>
      <footer className="text-center py-10 text-dark-subtext text-sm relative z-10">
        <p>&copy; {new Date().getFullYear()} Lumo. All rights reserved.</p>
        <p>Innovation in every aisle.</p>
      </footer>
    </div>
  );
};

export default App;
