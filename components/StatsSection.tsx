
import React, { useState, useEffect, useRef } from 'react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

interface StatProps {
  value: number;
  label: string;
  isVisible: boolean;
}

const StatItem: React.FC<StatProps> = ({ value, label, isVisible }) => {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (isVisible) {
      let startTime: number | null = null;
      const duration = 2000;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        const currentCount = Math.floor(value * percentage);

        setCount(currentCount);

        if (progress < duration) {
          frameRef.current = requestAnimationFrame(animate);
        } else {
            setCount(value);
        }
      };
      frameRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [isVisible, value]);

  return (
    <div className="text-center">
      <p className="text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-cyan tracking-tighter">
        {count}%
      </p>
      <p className="mt-2 text-sm sm:text-base text-dark-subtext max-w-xs mx-auto" dangerouslySetInnerHTML={{ __html: label }}>
      </p>
    </div>
  );
};

const stats = [
  { value: 83, label: "<strong>Of overall shoppers</strong> would rather prefer to want <strong>more personalized offers</strong>" },
  { value: 41, label: "<strong>of millennials</strong> would try a new retailer if it offered <strong>better personalized deals</strong>" },
  { value: 71, label: "<strong>of shoppers</strong> say they’d shop more often if stores used <strong>augmented reality</strong>" },
  { value: 55, label: "<strong>of shoppers</strong> are more likely to return after seeing an <strong>in-store ad</strong> that influenced their decision" },
];

export const StatsSection: React.FC = () => {
  const [ref, isVisible] = useAnimateOnScroll<HTMLElement>({ threshold: 0.5 });

  return (
    <section ref={ref} className={`py-12 md:py-16 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <StatItem value={stat.value} label={stat.label} isVisible={isVisible} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
