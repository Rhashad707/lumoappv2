import React from 'react';

interface ImageScreenProps {
  src: string;
  alt: string;
}

export const ImageScreen: React.FC<ImageScreenProps> = ({ src, alt }) => (
  <div className="w-full h-full flex items-center justify-center overflow-visible bg-transparent p-0 m-0" style={{ background: 'transparent', padding: 0, margin: 0 }}>
    <img 
      src={src} 
      alt={alt} 
      className="block object-contain m-0 p-0" 
      style={{ background: 'transparent', padding: 0, margin: 0, boxShadow: 'none', border: 'none', maxWidth: '100%', maxHeight: '100%' }}
    />
  </div>
);