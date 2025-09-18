import React from 'react';
import { ListRouteIcon, StoreNavigationIcon, SmartProductIcon } from './icons';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

interface StepCardProps {
  stepNumber: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ stepNumber, icon, title, description }) => {
  return (
    <div className="bg-dark-tertiary p-6 pt-10 rounded-3xl shadow-xl flex flex-col items-center text-center
                   border-2 border-transparent hover:border-brand-cyan/50 
                   transition-all duration-300 ease-out transform hover:-translate-y-2 
                   hover:shadow-brand-cyan/20 relative group h-80">
      <div 
        className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-cyan text-black text-sm font-semibold w-10 h-10 
                   rounded-full flex items-center justify-center shadow-lg border-2 border-dark-primary 
                   group-hover:scale-110 group-hover:shadow-brand-cyan/40 transition-all duration-300 ease-out"
      >
        {stepNumber}
      </div>
      <div className="w-16 h-16 sm:w-20 sm:h-20 mb-5 text-brand-cyan transform group-hover:scale-105 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl lg:text-2xl font-semibold text-dark-text mb-2">{title}</h3>
      <p className="text-dark-subtext text-sm sm:text-base leading-relaxed px-2">{description}</p>
    </div>
  );
};

export const HowItWorksSection: React.FC = () => {
  const [ref, isVisible] = useAnimateOnScroll<HTMLElement>({ threshold: 0.2 });

  const steps = [
    {
      stepNumber: "1",
      icon: <ListRouteIcon className="w-full h-full" />,
      title: "Plan Your Route",
      description: "Add your shopping list. Lumo intelligently maps the fastest path through the store for you.",
    },
    {
      stepNumber: "2",
      icon: <StoreNavigationIcon className="w-full h-full" />,
      title: "Navigate with Ease",
      description: "Follow precise, real-time directions on your phone. Lumo guides you shelf by shelf, item by item.",
    },
    {
      stepNumber: "3",
      icon: <SmartProductIcon className="w-full h-full" />,
      title: "Discover Smarter",
      description: "Instantly access product details, compare prices, check for allergens, and find alternatives on the go.",
    },
  ];

  return (
    <section 
      ref={ref}
      className={`text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-16 md:mb-20">
        How <span className="text-brand-cyan">Lumo</span> Works
      </h2>
      <div className="grid md:grid-cols-3 gap-x-8 gap-y-16 max-w-5xl mx-auto px-4">
        {steps.map((step, index) => (
          <div 
            key={step.stepNumber}
            className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <StepCard
              stepNumber={step.stepNumber}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};