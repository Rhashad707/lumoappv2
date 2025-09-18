import React, { useState, useEffect } from 'react';
import { db, collection, addDoc } from '../firebase'; // Import Firestore functions

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="12" fill="currentColor" opacity="0.1" />
    <path
      d="M7 13l3 3 7-7"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [internalIsOpen, setInternalIsOpen] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setInternalIsOpen(true);
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
      setSubmitted(false); 
      setEmail(''); 
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => {
        setInternalIsOpen(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Get the current timestamp
      const timestamp = new Date().toISOString();

      // Add email and timestamp to Firestore
      const docRef = await addDoc(collection(db, "waitlist"), {
        email: email,
        timestamp: timestamp
      });

      console.log('Waitlist email submitted:', email, 'at', timestamp);

      // Mark the form as submitted
      setSubmitted(true);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  if (!internalIsOpen) {
    return null;
  }

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 sm:pt-24 transition-opacity duration-300 ease-out ${isVisible && isOpen ? 'opacity-100' : 'opacity-0'}`}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="waitlist-modal-title"
      aria-hidden={!isOpen}
    >
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      <div 
        className={`bg-dark-secondary p-6 sm:p-8 rounded-3xl shadow-2xl w-full max-w-md transform transition-all duration-300 ease-out ${isVisible && isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-dark-subtext hover:text-dark-text transition-colors z-10"
          aria-label="Close waitlist modal"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!submitted ? (
          <>
            <h2 id="waitlist-modal-title" className="text-2xl sm:text-3xl font-bold text-dark-text mb-3 text-center">
              Join the <span className="text-brand-cyan">Lumo</span> Waitlist
            </h2>
            <p className="text-dark-subtext mb-6 text-center text-sm sm:text-base">
              Be the first to know when Lumo launches and transform your shopping.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email-waitlist" className="sr-only">Email address</label>
                <input 
                  type="email" 
                  id="email-waitlist"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-3 bg-dark-primary border border-neutral-700 rounded-lg text-dark-text placeholder-neutral-500 focus:ring-2 focus:ring-brand-cyan focus:border-brand-cyan outline-none transition-colors"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-brand-cyan text-black font-semibold py-3 px-6 rounded-lg shadow-md
                           transform hover:scale-105 transition duration-300 
                           hover:bg-brand-darkCyan hover:brightness-110
                           active:brightness-95 text-lg"
              >
                Count Me In!
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <CheckIcon className="w-16 h-16 text-brand-cyan mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-dark-text mb-2">You're In!</h2>
            <p className="text-dark-subtext mb-6">
              Thanks for joining the Lumo waitlist. We'll keep you updated!
            </p>
            <button 
              onClick={onClose}
              className="bg-brand-cyan text-black font-semibold py-2 px-6 rounded-lg shadow-md
                         hover:bg-brand-darkCyan hover:brightness-110 transition-colors"
            >
              Close
            </button>
          </div>
        )}
        <p className="text-xs text-neutral-600 mt-6 text-center">We respect your privacy. No spam, ever.</p>
      </div>
    </div>
  );
};
