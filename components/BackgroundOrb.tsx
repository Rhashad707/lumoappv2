
import React, { useEffect, useRef } from 'react';

export const BackgroundOrb: React.FC = () => {
  const orbRef = useRef<HTMLDivElement>(null);
  const animationFrameIdRef = useRef<number | null>(null);

  // Store position, velocity, and size in a ref to avoid re-renders on every frame.
  const orbData = useRef({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    size: 0,
  });

  // Initialize properties that depend on window size
  const initializeOrb = () => {
    orbData.current = {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 1, // Slow and steady speed
        vy: (Math.random() - 0.5) * 1,
        size: Math.min(window.innerWidth, window.innerHeight) * 0.5, // Relative size
    };
    if(orbRef.current) {
        orbRef.current.style.width = `${orbData.current.size}px`;
        orbRef.current.style.height = `${orbData.current.size}px`;
    }
  };


  useEffect(() => {
    initializeOrb();

    const animate = () => {
      const { current: data } = orbData;
      const { current: orb } = orbRef;

      if (!orb) return;

      // Update position
      data.x += data.vx;
      data.y += data.vy;

      // Bounce off edges of the viewport
      if (data.x + data.size / 2 > window.innerWidth || data.x - data.size / 2 < 0) {
        data.vx *= -1;
      }
      if (data.y + data.size / 2 > window.innerHeight || data.y - data.size / 2 < 0) {
        data.vy *= -1;
      }
      
      // Ensure the orb stays within bounds to prevent it from getting stuck
      data.x = Math.max(data.size / 2, Math.min(data.x, window.innerWidth - data.size / 2));
      data.y = Math.max(data.size / 2, Math.min(data.y, window.innerHeight - data.size / 2));

      // Apply transform to move the orb. Using translate for performance.
      orb.style.transform = `translate(${data.x - data.size / 2}px, ${data.y - data.size / 2}px)`;

      animationFrameIdRef.current = requestAnimationFrame(animate);
    };

    animationFrameIdRef.current = requestAnimationFrame(animate);

    // Re-initialize on window resize to handle different screen sizes
    window.addEventListener('resize', initializeOrb);

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      window.removeEventListener('resize', initializeOrb);
    };
  }, []);

  return (
    <div
      ref={orbRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0, 240, 192, 0.12)', // Brand cyan with low opacity
        borderRadius: '50%',
        filter: 'blur(80px)',
        zIndex: -1, // Behind main content but above body background
        willChange: 'transform',
        pointerEvents: 'none', // Ensure it doesn't interfere with clicks
      }}
      aria-hidden="true"
    />
  );
};
