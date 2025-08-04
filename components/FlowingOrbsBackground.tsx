
import React, { useEffect, useRef } from 'react';

const Orb: React.FC<{ id: number }> = ({ id }) => (
  <div className={`orb orb-${id}`} />
);

export const FlowingOrbsBackground: React.FC = () => {
  const orbDataRef = useRef<any[]>([]);
  const animationFrameIdRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const orbsContainer = containerRef.current;
    if (!orbsContainer) return;

    const orbs = Array.from(orbsContainer.querySelectorAll('.orb')) as HTMLElement[];
    if (orbs.length === 0) return;

    orbDataRef.current = orbs.map(() => ({
      xPos: Math.random() * 100,
      yPos: Math.random() * 100,
      xSpeed: (Math.random() - 0.5) * 0.4,
      ySpeed: (Math.random() - 0.5) * 0.4,
      size: 0.8 + Math.random() * 0.4,
      opacityOffset: Math.random() * 1000,
      opacitySpeed: 0.7 + Math.random() * 0.6,
      maxOpacity: 0.3 + Math.random() * 0.3
    }));

    const animateOrbs = () => {
      orbs.forEach((orb, index) => {
        const data = orbDataRef.current[index];
        if (!data) return;

        data.xPos += data.xSpeed;
        data.yPos += data.ySpeed;

        if (data.xPos > 105 || data.xPos < -5) {
            data.xSpeed *= -1;
            data.xSpeed += (Math.random() - 0.5) * 0.1;
        }
        if (data.yPos > 105 || data.yPos < -5) {
            data.ySpeed *= -1;
            data.ySpeed += (Math.random() - 0.5) * 0.1;
        }
        
        data.xSpeed = Math.max(-0.6, Math.min(0.6, data.xSpeed));
        data.ySpeed = Math.max(-0.6, Math.min(0.6, data.ySpeed));

        const sizeFactor = data.size + Math.sin(Date.now() / 2000 + index) * 0.1;
        
        orb.style.transform = `translate(${data.xPos - 50}vw, ${data.yPos - 50}vh) scale(${sizeFactor})`;
        
        const opacityValue = 0.05 + Math.abs(Math.sin(Date.now() / (2000 / data.opacitySpeed) + data.opacityOffset)) * data.maxOpacity;
        orb.style.opacity = opacityValue.toFixed(2);
      });
      animationFrameIdRef.current = requestAnimationFrame(animateOrbs);
    };

    animateOrbs();

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none">
      <style>{`
        .orb {
          position: absolute;
          top: 0;
          left: 0;
          border-radius: 50%;
          background-clip: padding-box;
          filter: blur(50px);
          opacity: 0.5;
          will-change: transform, opacity;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        .orb-1 { width: 45vw; height: 45vw; background-color: rgba(0, 240, 192, 0.6); }
        .orb-2 { width: 40vw; height: 40vw; background-color: rgba(0, 176, 144, 0.5); }
        .orb-3 { width: 50vw; height: 50vw; background-color: rgba(64, 224, 208, 0.55); }
        .orb-4 { width: 35vw; height: 35vw; background-color: rgba(0, 208, 176, 0.6); }
        .orb-5 { width: 45vw; height: 45vw; background-color: rgba(32, 192, 160, 0.5); }
        .orb-6 { width: 55vw; height: 55vw; background-color: rgba(0, 240, 192, 0.45); }
        .orb-7 { width: 40vw; height: 40vw; background-color: rgba(0, 160, 128, 0.55); }
        .orb-8 { width: 50vw; height: 50vw; background-color: rgba(125, 249, 255, 0.5); }
        .orb-9 { width: 60vw; height: 60vw; background-color: rgba(0, 240, 192, 0.4); }
        .orb-10 { width: 45vw; height: 45vw; background-color: rgba(0, 176, 144, 0.6); }
      `}</style>
      {Array.from({ length: 10 }).map((_, i) => <Orb key={i} id={i + 1} />)}
    </div>
  );
};
