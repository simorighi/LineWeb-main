import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logo: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div 
      onClick={() => navigate('/')} 
      className="cursor-pointer flex flex-col items-center justify-center group"
    >
      <div className="relative w-10 h-10 mb-1 transition-transform duration-700 group-hover:rotate-180">
         {/* Abstract Building Icon representing the Logo */}
         <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gold-400">
            <path d="M3 21H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M5 21V7L12 3L19 7V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 21V10" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M15 21V10" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M9 10L12 8L15 10" stroke="currentColor" strokeWidth="1.5"/>
         </svg>
      </div>
      <div className="flex flex-col items-center">
        <span className="font-display tracking-[0.2em] text-lg text-white font-bold leading-none">LINE</span>
        <span className="font-sans tracking-[0.3em] text-[0.55rem] text-gold-400 mt-0.5 uppercase">Property</span>
      </div>
    </div>
  );
};

export default Logo;