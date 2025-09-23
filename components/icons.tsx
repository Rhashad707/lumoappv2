
import React from 'react';

interface IconProps {
  className?: string;
}

export const CheckIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export const SearchIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

export const SmartFilterIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" >
    <path d="M7.41235 9.53516L12.0001 14.1229L16.5878 9.53516L14.7071 9.53516H9.29303L7.41235 9.53516Z" />
  </svg>
);

export const HeartIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

export const LocationPinIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
  </svg>
);

export const HomeIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    </svg>
);

export const ZigZagPath: React.FC<IconProps & { strokeColor?: string }> = ({ className, strokeColor = "currentColor" }) => (
  <svg className={className} viewBox="0 0 60 150" fill="none" preserveAspectRatio="xMidYMid meet">
    <path d="M30 5C10 30 50 50 30 75C10 100 50 120 30 145" stroke={strokeColor} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const WifiIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.05C9.974 14.735 12.026 14.735 13.889 16.05M5.272 13.211C8.038 11.083 13.962 11.083 16.728 13.211M2.432 10.372C6.101 7.433 15.899 7.433 19.568 10.372" />
  </svg>
);

export const SignalIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M18 5.00002C18 4.72388 17.7761 4.50002 17.5 4.50002H16.625C16.2968 4.50002 16.0312 4.76558 16.0312 5.09377V15.5C16.0312 15.7761 16.2551 16 16.5312 16H17.5C17.7761 16 18 15.7761 18 15.5V5.00002Z M13.3125 7.00002C13.3125 6.72388 13.0886 6.50002 12.8125 6.50002H11.9375C11.6093 6.50002 11.3438 6.76558 11.3438 7.09377V15.5C11.3438 15.7761 11.5676 16 11.8438 16H12.8125C13.0886 16 13.3125 15.7761 13.3125 15.5V7.00002Z M8.625 9.00002C8.625 8.72388 8.40112 8.50002 8.125 8.50002H7.25C6.92185 8.50002 6.65625 8.76558 6.65625 9.09377V15.5C6.65625 15.7761 6.87901 16 7.15625 16H8.125C8.40112 16 8.625 15.7761 8.625 15.5V9.00002Z M3.9375 11C3.9375 10.7239 3.71362 10.5 3.4375 10.5H2.5625C2.23435 10.5 1.96875 10.7656 1.96875 11.0938V15.5C1.96875 15.7761 2.19151 16 2.46875 16H3.4375C3.71362 16 3.9375 15.7761 3.9375 15.5V11Z" />
  </svg>
);

// Icons for "Why It's Better" section
export const TimerIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const MagicPinIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 6l1-1 1 1M14.5 6l-1-1-1 1M12 3.5V2m0 11.5v-2" />
  </svg>
);

export const BulbListIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM12 15v1M12 9V8m2.5-1.5l.707-.707M8.793 6.793l.707.707m0 7.414l-.707.707M15.207 15.207l-.707-.707" />
  </svg>
);

export const ShieldCheckIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

// Icons for "How Lumo Works" section
export const ListRouteIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 6h8M8 10h8M8 14h5" /> {/* List lines */}
    <rect x="4" y="4" width="16" height="16" rx="2" /> {/* List Background */}
    <circle cx="12" cy="18" r="2" stroke="currentColor" fill="currentColor" opacity="0.3"/> {/* Start point */}
    <path d="M12 16V9" /> {/* Path */}
    <path d="M10 11l2-2 2 2" /> {/* Arrow head */}
  </svg>
);

export const StoreNavigationIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="2" width="12" height="20" rx="2" /> {/* Phone body */}
    <path d="M12 17.01V17" /> {/* Small detail, like home indicator */}
    <circle cx="12" cy="8" r="1.5" fill="currentColor" opacity="0.5" /> {/* Item location 1 */}
    <circle cx="10" cy="12" r="1.5" fill="currentColor" opacity="0.5" /> {/* Item location 2 */}
    <path d="M12 8.5v1.5l-2 2V12" /> {/* Path connecting them */}
    <path d="M12 6.5l-2 2" /> {/* To first item */ }
  </svg>
);

export const SmartProductIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /> {/* Tag */}
    <line x1="7" y1="7" x2="7.01" y2="7" strokeWidth="2.5" /> {/* Dot on tag */}
    <circle cx="15" cy="7" r="4" /> {/* Magnifying glass part */}
    <line x1="17.5" y1="9.5" x2="15" y2="7" />
    <path d="M13 7h4" /> {/* Filter lines / Smart aspect */}
  </svg>
);

// New Icons for "Core Features" section
export const TurnByTurnIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="7" y="2" width="10" height="20" rx="2" ry="2"></rect>
    <path d="M12 18h.01"></path>
    <path d="M9.5 8.5a2.5 2.5 0 1 1 5 0" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 11v3.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.5 13L12 14.5l1.5-1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const SmartListRoutingIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M8 6h8M8 10h8M8 14h4" strokeLinecap="round"/>
    <path d="M19 14l-3 3 3 3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 4h16v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 17H6.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const AllergyFilterIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="m9.5 14.5 5-5" strokeLinecap="round"/>
    <path d="m14.5 14.5-5-5" strokeLinecap="round"/>
  </svg>
);

export const AiAssistantIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M9.5 3.5A2.5 2.5 0 0 1 12 6V9" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.5 3.5A2.5 2.5 0 0 0 12 6V9" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 9v2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 17.5V15" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 10.5c0-1.657 1.343-3 3-3h8c1.657 0 3 1.343 3 3v3c0 1.657-1.343 3-3 3h-.172a3 3 0 0 0-2.121.879l-.53.53a1.5 1.5 0 0 1-2.121 0l-.53-.53a3 3 0 0 0-2.121-.879H8c-1.657 0-3-1.343-3-3v-3z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.5 12.5a.5.5 0 0 1 1 0v.5a.5.5 0 0 1-1 0v-.5z" fill="currentColor"/>
    <path d="M15.5 12.5a.5.5 0 0 1 1 0v.5a.5.5 0 0 1-1 0v-.5z" fill="currentColor"/>
  </svg>
);

export const SharedListsIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const PriceTrackIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="7" y1="7" x2="7.01" y2="7" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M11 11a4 4 0 1 1 6 0 4 4 0 0 1-6 0z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 17l-1-1" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const AugmentedRealityIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="7" y="2" width="10" height="20" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"></rect>
    <path d="M12 7v5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 10l2 2 2-2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 6H5v2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 6h2v2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 18H5v-2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 18h2v-2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const MealPrepIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="3" y1="10" x2="21" y2="10" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="16" r="2" fill="currentColor" opacity="0.3"/>
    <path d="M11 15l1 1 2-2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
