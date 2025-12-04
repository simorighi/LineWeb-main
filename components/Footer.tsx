import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center justify-center mb-16">
          <Logo />
          <p className="mt-6 text-gray-500 font-sans text-sm tracking-widest text-center max-w-md">
            REDEFINING LUXURY LIVING THROUGH EXCEPTIONAL PROPERTIES AND UNPARALLELED SERVICE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-y border-white/5 py-12">
          <div className="text-center md:text-left">
            <h4 className="font-display text-gold-400 mb-4">Contact</h4>
            <p className="text-gray-400 font-sans text-sm mb-2">+39 02 1234 5678</p>
            <p className="text-gray-400 font-sans text-sm">info@lineproperty.com</p>
          </div>
          
          <div className="flex flex-col items-center justify-center space-y-4">
             <div className="flex space-x-6">
               {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                 <a key={i} href="#" className="text-gray-500 hover:text-gold-400 transition-colors duration-300">
                   <Icon size={20} strokeWidth={1} />
                 </a>
               ))}
             </div>
          </div>

          <div className="text-center md:text-right">
            <h4 className="font-display text-gold-400 mb-4">Visit Us</h4>
            <p className="text-gray-400 font-sans text-sm mb-2">Via Monte Napoleone, 12</p>
            <p className="text-gray-400 font-sans text-sm">20121 Milano, Italy</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-sans uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Line Property. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;