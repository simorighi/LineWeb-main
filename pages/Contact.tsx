import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert("Thank you. An agent will contact you shortly.");
    setFormState({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const inputClasses = "w-full bg-transparent border-b border-gray-700 text-white py-4 focus:outline-none focus:border-gold-400 transition-colors duration-300 font-sans text-lg placeholder-gray-600";

  return (
    <div className="pt-32 pb-24 min-h-screen bg-dark-900 flex items-center">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
            >
               <h1 className="font-display text-5xl md:text-7xl text-white mb-8">GET IN <br/><span className="text-gold-400">TOUCH</span></h1>
               <p className="text-gray-400 font-sans text-lg mb-12 max-w-md">
                 Ready to find your dream home? Let our experts guide you through the process with discretion and excellence.
               </p>

               <div className="space-y-8 font-serif text-xl">
                  <div>
                    <span className="text-gold-400 text-sm font-sans uppercase tracking-widest block mb-2">Visit</span>
                    <p>Via Monte Napoleone, 12<br/>20121 Milano, Italy</p>
                  </div>
                  <div>
                    <span className="text-gold-400 text-sm font-sans uppercase tracking-widest block mb-2">Call</span>
                    <p>+39 02 1234 5678</p>
                  </div>
                  <div>
                    <span className="text-gold-400 text-sm font-sans uppercase tracking-widest block mb-2">Email</span>
                    <p>info@lineproperty.com</p>
                  </div>
               </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="bg-dark-800/30 p-8 md:p-12 border border-white/5"
            >
               <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="relative group">
                     <input 
                       type="text" 
                       name="name" 
                       value={formState.name}
                       onChange={handleChange}
                       placeholder="Full Name" 
                       className={inputClasses}
                       required 
                     />
                  </div>
                  <div className="relative group">
                     <input 
                       type="email" 
                       name="email" 
                       value={formState.email}
                       onChange={handleChange}
                       placeholder="Email Address" 
                       className={inputClasses}
                       required 
                     />
                  </div>
                  <div className="relative group">
                     <input 
                       type="tel" 
                       name="phone" 
                       value={formState.phone}
                       onChange={handleChange}
                       placeholder="Phone Number" 
                       className={inputClasses} 
                     />
                  </div>
                  <div className="relative group">
                     <textarea 
                       name="message" 
                       value={formState.message}
                       onChange={handleChange}
                       placeholder="Tell us about your requirements" 
                       rows={4}
                       className={inputClasses}
                     ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-gold-400 text-dark-900 py-4 font-sans uppercase tracking-widest font-bold hover:bg-white transition-colors duration-300 mt-8"
                  >
                    Send Request
                  </button>
               </form>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;