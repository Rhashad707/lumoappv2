
import React from 'react';
import { WifiIcon, SignalIcon } from './icons';

interface PhoneMockupProps {
  time?: string;
  batteryLevel?: number;
  screenContent: React.ReactNode;
  isHeroPhone?: boolean;
  className?: string;
  screenClassName?: string; 
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  time = "9:21",
  batteryLevel = 98,
  screenContent,
  isHeroPhone = false,
  className = '',
  screenClassName = '' 
}) => {
  const phoneSizeClasses = isHeroPhone 
    ? "w-full max-w-[260px] h-[520px] sm:max-w-[280px] sm:h-[560px] md:max-w-[300px] md:h-[600px]"
    : "w-full max-w-[220px] h-[440px] sm:max-w-[240px] sm:h-[480px]";

  return (
    <div className={`relative ${phoneSizeClasses} bg-neutral-950 rounded-6xl shadow-2xl border border-neutral-800 overflow-hidden mx-auto flex flex-col group ${className}`}>
      {/* Screen Area (Black Glass Front) */}
      <div className={`relative flex-grow bg-black m-[2px] rounded-[2.75rem] overflow-hidden flex flex-col`}>
        
        {/* Status Bar Content (Time, Icons) & Dynamic Island Pill */}
        <div className="relative z-10 pt-3 pb-1.5 px-3.5">
          {/* Main Status Bar Row */}
          <div className="flex justify-between items-center h-7">
            {/* Time */}
            <span className="text-white text-xs sm:text-sm font-semibold w-16 text-left">{time}</span>
            
            {/* Dynamic Island Pill */}
            <div className="flex-shrink-0 bg-black h-5 sm:h-6 w-20 sm:w-[90px] rounded-full shadow-inner border border-neutral-700/50"></div>

            {/* Status Icons */}
            <div className="flex items-center justify-end space-x-1 w-16">
              <WifiIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-neutral-300" />
              <SignalIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-neutral-300" />
              <span className="text-white text-[10px] sm:text-xs font-semibold">{batteryLevel}%</span>
            </div>
          </div>
        </div>
        
        {/* Screen Content Area (Where app UI is displayed) */}
        {/* screenClassName can override padding with !p-0 for full-bleed images */}
        <div className={`flex-grow bg-dark-secondary overflow-y-auto no-scrollbar relative 
                        ${screenClassName.includes('!p-0') ? screenClassName : `p-3 sm:p-4 ${screenClassName}`}`}>
          {screenContent}
        </div>
      </div>
    </div>
  );
};
