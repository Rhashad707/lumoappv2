
import React, { useState, useEffect } from 'react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import { 
  TurnByTurnIcon, 
  SmartListRoutingIcon, 
  AllergyFilterIcon, 
  AiAssistantIcon, 
  SharedListsIcon, 
  PriceTrackIcon,
  AugmentedRealityIcon,
  MealPrepIcon
} from './icons';

const features = [
  {
    icon: <TurnByTurnIcon />,
    title: "Turn-by-Turn In-Store Navigation",
    description: "Lumo helps you find every item fast with in-store GPS. No more wandering, no more asking."
  },
  {
    icon: <SmartListRoutingIcon />,
    title: "Smart Lists with Instant Routing",
    description: "Your shopping list becomes a route that's optimized for speed, convenience, and efficiency."
  },
  {
    icon: <AiAssistantIcon />,
    title: "Built-In AI Shopping Assistant",
    description: "Get product recommendations, substitutions, and allergy-friendly suggestions in real time."
  },
  {
    icon: <MealPrepIcon />,
    title: "Meal Prep AI",
    description: "Turn any recipe, video, or link into a ready-to-shop list. Lumo adapts meals to your diet, allergies, and budget, then maps every ingredient to the exact shelf."
  }
];

const TypewriterText: React.FC<{ text: string; start: boolean; className?: string }> = ({ text, start, className }) => {
  const [typedText, setTypedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (start && !isComplete) {
      let typingTimer: ReturnType<typeof setTimeout>;
      let i = 0;
      setTypedText(''); 

      const type = () => {
        if (i < text.length) {
          setTypedText(text.substring(0, i + 1));
          i++;
          typingTimer = setTimeout(type, 30);
        } else {
          setIsComplete(true);
        }
      };
      
      typingTimer = setTimeout(type, 200);

      return () => clearTimeout(typingTimer);
    }
  }, [start, text, isComplete]);

  return (
    <h3 className={`${className} min-h-[2.5rem] sm:min-h-[2.8rem]`}>
      {typedText}
      {!isComplete && start && (
        <span 
          className="inline-block w-1 bg-brand-cyan animate-pulse ml-2 align-bottom"
          style={{ height: '0.9em' }}
          aria-hidden="true"
        ></span>
      )}
    </h3>
  );
};

const FeatureRow: React.FC<{ feature: typeof features[0]; index: number }> = ({ feature, index }) => {
  const [ref, isVisible] = useAnimateOnScroll<HTMLDivElement>({ threshold: 0.6, triggerOnce: true });
  const isReversed = index % 2 === 1;

  return (
      <div
          ref={ref}
          className={`
            flex flex-col md:flex-row items-center gap-6 md:gap-10
            ${isReversed ? 'md:flex-row-reverse' : ''}
            transform transition-all duration-700 ease-out
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 ' + (isReversed ? 'translate-x-10' : '-translate-x-10')}
          `}
      >
          <div className="flex-shrink-0">
              {React.cloneElement(feature.icon, { className: "w-20 h-20 text-brand-cyan" })}
          </div>
          <div className={`flex-grow text-center ${isReversed ? 'md:text-right' : 'md:text-left'}`}>
              <TypewriterText 
                text={feature.title} 
                start={isVisible} 
                className="text-xl sm:text-2xl font-bold text-dark-text mb-3"
              />
              <p className={`text-base text-dark-subtext leading-relaxed max-w-lg mx-auto transition-opacity duration-500 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'} ${isReversed ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'}`}>
                  {feature.description}
              </p>
          </div>
      </div>
  );
};

export const CoreFeaturesSection: React.FC = () => {
  const [ref, isVisible] = useAnimateOnScroll<HTMLElement>({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-16 md:mb-24">
          The <span className="text-brand-cyan">lumo</span> advantage
        </h2>
        <div className="flex flex-col gap-24 md:gap-28">
          {features.map((feature, index) => (
             <FeatureRow key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
