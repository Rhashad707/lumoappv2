import React from 'react';
import { TimerIcon, MagicPinIcon, BulbListIcon, ShieldCheckIcon } from './icons';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const benefits = [
  {
    icon: <TimerIcon className="w-10 h-10 sm:w-12 sm:h-12 text-brand-cyan" />,
    text: "Save 15 minutes every trip",
  },
  {
    icon: <MagicPinIcon className="w-10 h-10 sm:w-12 sm:h-12 text-brand-cyan" />,
    text: "No more asking where stuff is",
  },
  {
    icon: <BulbListIcon className="w-10 h-10 sm:w-12 sm:h-12 text-brand-cyan" />,
    text: "Make smarter lists that actually help",
  },
  {
    icon: <ShieldCheckIcon className="w-10 h-10 sm:w-12 sm:h-12 text-brand-cyan" />,
    text: "Avoid food you can't eat",
  }
];

export const WhyItIsBetterSection: React.FC = () => {
  const [ref, isVisible] = useAnimateOnScroll<HTMLElement>({ threshold: 0.2 });

  return (
    <section ref={ref} className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-12 md:mb-16">
          <span className="text-brand-cyan">Why It's Better</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`bg-dark-tertiary p-6 rounded-2xl shadow-lg 
                         flex flex-col items-center space-y-4
                         transform transition-all duration-500 ease-out 
                         hover:scale-105 hover:shadow-brand-cyan/30 hover:border-brand-cyan border-2 border-transparent
                         ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0">
                {benefit.icon}
              </div>
              <p className="text-lg font-medium text-dark-text text-center">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};