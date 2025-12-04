import React from 'react';
import { motion } from 'framer-motion';
import { TEAM } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-dark-900">
      {/* Header */}
      <div className="container mx-auto px-6 md:px-12 mb-24">
         <motion.h1 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           className="font-display text-5xl md:text-7xl text-white mb-12 text-center"
         >
           THE <span className="text-gold-400">AGlENCY</span>
         </motion.h1>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="font-serif text-xl md:text-2xl leading-relaxed text-gray-300"
            >
              <p className="mb-8">
                "We believe that luxury is not just a price point, but an experience. 
                A feeling of belonging, of arriving, of being exactly where you are meant to be."
              </p>
              <div className="h-1 w-20 bg-gold-400" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
               <p className="font-sans text-gray-400 leading-relaxed mb-6">
                 Founded in 2008, Line Property has established itself as the premier boutique agency for high-net-worth individuals seeking exceptional real estate. Our philosophy combines modern technology with old-world service.
               </p>
               <p className="font-sans text-gray-400 leading-relaxed">
                 With offices in Milan, Dubai, and New York, our team brings a global perspective to every transaction. We don't just sell homes; we curate lifestyles.
               </p>
            </motion.div>
         </div>
      </div>

      {/* Timeline Section */}
      <section className="bg-dark-800 py-24 mb-24">
        <div className="container mx-auto px-6 md:px-12">
            <h3 className="font-display text-3xl text-center mb-16 text-white">OUR <span className="text-gold-400">JOURNEY</span></h3>
            <div className="relative border-l border-gold-400/30 ml-4 md:ml-1/2 md:transform md:-translate-x-1/2 space-y-12">
                {[
                  { year: '2008', title: 'Foundation', desc: 'Opened our first boutique in Milan.' },
                  { year: '2015', title: 'Global Expansion', desc: 'Launched operations in Dubai and NYC.' },
                  { year: '2023', title: 'Digital Innovation', desc: 'Pioneering VR tours for international buyers.' }
                ].map((item, index) => (
                   <motion.div 
                     key={item.year}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className={`relative pl-12 md:pl-0 md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center justify-center`}
                   >
                      <div className="absolute left-[-5px] top-0 w-3 h-3 bg-gold-400 rounded-full md:left-1/2 md:-translate-x-1/2" />
                      <div className="md:w-1/2 md:px-12">
                         <span className="text-gold-400 font-display text-2xl block mb-2">{item.year}</span>
                         <h4 className="text-white text-xl font-serif mb-2">{item.title}</h4>
                         <p className="text-gray-500 font-sans text-sm">{item.desc}</p>
                      </div>
                      <div className="hidden md:block md:w-1/2" />
                   </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Team Section */}
      <div className="container mx-auto px-6 md:px-12">
         <h3 className="font-display text-4xl mb-16 text-center text-white">MEET THE <span className="text-gold-400">TEAM</span></h3>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member, idx) => (
               <motion.div 
                 key={member.id}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.2 }}
                 className="group relative overflow-hidden"
               >
                  <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                     <img src={member.image} alt={member.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 pt-24 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     <h4 className="font-display text-xl text-white">{member.name}</h4>
                     <p className="text-gold-400 text-xs uppercase tracking-widest mt-1">{member.role}</p>
                  </div>
               </motion.div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default About;