

import React from 'react';
import { PhoneMockup } from './PhoneMockup';
import { ImageScreen } from './ImageScreen';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const groceryListScreenImage = '/deals_home_pafe.png';
const lumoAssistScreenImage = '/price.png';
const arNavigationScreenImage = '/ar-navigation-preview.png';
const nutritionAnalysisImage = '/nutruution_analysis.png';
const priceImage = '/price.png';
const profileImage = '/profile.png'; // Add this line if not present

export const LivePreviewSection: React.FC = () => {
  const [ref, isVisible] = useAnimateOnScroll<HTMLDivElement>({ threshold: 0.2 });

  const groceryListScreen = (
    <ImageScreen src={groceryListScreenImage} alt="Deals Home Page Preview" />
  );

  const arScreen = (
    <ImageScreen src={arNavigationScreenImage} alt="Lumo Augmented Reality Navigation Preview" />
  );

  const lumoAssistScreen = (
    <ImageScreen src={lumoAssistScreenImage} alt="Lumo Assist Preview" />
  );

  const nutritionAnalysisScreen = (
    <ImageScreen src={nutritionAnalysisImage} alt="Nutrition Analysis Preview" />
  );

  const priceScreen = (
    <ImageScreen src={priceImage} alt="Price Preview" />
  );


  return (
    <section className="text-center py-12 md:py-16">
      <div ref={ref}>
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Live Preview</h2>
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12 items-start justify-items-center max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="mx-auto" style={{ maxWidth: '300px' }}>
              {groceryListScreen}
            </div>
          </div>
          <div className={`transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mx-auto" style={{ maxWidth: '300px' }}>
              {lumoAssistScreen}
            </div>
          </div>
          <div className={`transition-all duration-1000 ease-out delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mx-auto" style={{ maxWidth: '300px' }}>
              {nutritionAnalysisScreen}
            </div>
          </div>
          <div className={`transition-all duration-1000 ease-out delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mx-auto" style={{ maxWidth: '300px' }}>
              {/* If unnamed-6.png was here, switch to profile.png */}
              <ImageScreen src={profileImage} alt="Profile Preview" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
