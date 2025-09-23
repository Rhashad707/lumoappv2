
import React, { useState, useEffect } from 'react';
import { PhoneMockup } from './PhoneMockup';
import { CheckIcon } from './icons'; 
import { WaitlistModal } from './WaitlistModal';
import { ImageScreen } from './ImageScreen'; 
import { db, collection } from '../firebase';
import { getDocs } from 'firebase/firestore';

const heroPhoneScreenImage = '/profile.png';
const nutritionAnalysisImage = '/nutruution_analysis.png';

export const HeroSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null);
  const [displayCount, setDisplayCount] = useState(248);

  useEffect(() => {
    // Trigger animation shortly after component mounts
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Fetch unique waitlist signups from Firestore
    const fetchWaitlistCount = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'waitlist'));
        const uniqueEmails = new Set<string>();
        snapshot.forEach(doc => {
          const data = doc.data();
          if (data.email) uniqueEmails.add(data.email);
        });
        setWaitlistCount(uniqueEmails.size);
      } catch (e) {
        setWaitlistCount(null);
      }
    };
    fetchWaitlistCount();
  }, []);

  useEffect(() => {
    if (waitlistCount !== null) {
      const targetCount = 248 + waitlistCount;
      let currentCount = displayCount;
      const increment = Math.ceil((targetCount - currentCount) / 20);

      const animateCount = () => {
        if (currentCount < targetCount) {
          currentCount += increment;
          if (currentCount > targetCount) currentCount = targetCount;
          setDisplayCount(currentCount);
          requestAnimationFrame(animateCount);
        }
      };

      animateCount();
    }
  }, [waitlistCount]);

  const heroPhoneScreenContent = (
    <ImageScreen src={heroPhoneScreenImage} alt="Profile Preview" />
  );
  const nutritionAnalysisScreen = (
    <ImageScreen src={nutritionAnalysisImage} alt="Nutrition Analysis Preview" />
  );

  const incrementWaitlistCount = () => {
    if (waitlistCount !== null) {
      const newCount = waitlistCount + 1;
      setWaitlistCount(newCount);
      animateCount(newCount);
    }
  };

  const animateCount = (targetCount) => {
    let currentCount = displayCount;
    const increment = Math.ceil((targetCount - currentCount) / 20);

    const animate = () => {
      if (currentCount < targetCount) {
        currentCount += increment;
        if (currentCount > targetCount) currentCount = targetCount;
        setDisplayCount(currentCount);
        requestAnimationFrame(animate);
      }
    };

    animate();
  };

  return (
    <>
      <section className="grid md:grid-cols-2 gap-10 md:gap-16 items-center min-h-[calc(100vh-10rem)] py-10 md:min-h-0 md:py-0">
        <div className={`space-y-6 md:space-y-8 text-center md:text-left transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight">
            Shop Like You Have <span className="text-brand-cyan">Superpowers</span>
          </h1>
          <p className="text-lg sm:text-xl text-dark-subtext max-w-xl mx-auto md:mx-0">
            Lumo helps you find every item fast with in-store GPS—no more wandering, no more asking.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
            <button 
              onClick={() => {
                setIsModalOpen(true);
                incrementWaitlistCount();
              }}
              className="bg-brand-cyan text-black font-semibold py-3 px-8 rounded-lg shadow-lg 
                         transform hover:scale-105 transition duration-300 
                         hover:bg-brand-darkCyan hover:brightness-110 
                         shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] 
                         hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),0_4px_15px_rgba(0,0,0,0.2)]
                         active:brightness-95
                         text-lg w-full sm:w-auto"
              aria-haspopup="dialog"
              aria-expanded={isModalOpen}
            >
              Join the Waitlist
            </button>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-2 text-sm text-dark-subtext pt-2">
            <CheckIcon className="w-5 h-5 text-brand-cyan" />
            <span>{displayCount} already signed up</span>
          </div>
        </div>
        <div className={`flex justify-center items-center md:mt-0 transition-all duration-1000 ease-out delay-200 ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <div className="w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px]">
            <img src={heroPhoneScreenImage} alt="Hero Visual" className="w-full h-auto rounded-xl shadow-lg" />
          </div>
        </div>
      </section>
      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
