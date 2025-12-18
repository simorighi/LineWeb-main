import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, MapPin, Globe, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import { PROPERTIES } from '../constants';



const Home: React.FC = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  const featuredProperties = PROPERTIES.filter(p => p.featured);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2000&auto=format&fit=crop"
            /* src="https://staticfanpage.akamaized.net/wp-content/uploads/sites/34/2022/06/alessia-lanza-1-1654845060330.jpg" */
            alt="Luxury Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900/60 via-transparent to-dark-900" />
        </motion.div>

        <div className="relative z-10 text-center px-4">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-gold-400 font-sans tracking-[0.4em] uppercase text-sm mb-6"
          >
            Exclusive Real Estate
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="font-display text-5xl md:text-7xl lg:text-9xl text-white mb-8 leading-tight"
          >
            DISCOVER <br/> <span className="text-gradient-gold italic font-serif">Luxury</span>
          </motion.h1>
          
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            onClick={() => navigate('/properties')}
            className="border border-white/30 bg-white/5 backdrop-blur-sm px-10 py-4 text-white font-sans text-sm tracking-widest uppercase hover:bg-gold-400 hover:border-gold-400 hover:text-black transition-all duration-300"
          >
            Explore Collection
          </motion.button>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50"
        >
          <ArrowDown size={24} strokeWidth={1} />
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-dark-900 relative">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
                <h2 className="font-display text-4xl md:text-5xl mb-6">WHAT YOU DREAM <br/><span className="text-gold-400 italic font-serif">Is Reality With Us</span></h2>
                <div className="w-20 h-[1px] bg-gold-400 mb-8" />
                <p className="text-gray-400 font-sans leading-relaxed mb-8">
                    Line Property is more than a real estate agency; we are curators of an exceptional lifestyle. 
                    From penthouses in Dubai to historic villas in Lake Como, we connect the world's most discerning 
                    clients with properties that transcend the ordinary.
                </p>
                <div className="flex space-x-12">
                    <div>
                        <h3 className="text-3xl font-display text-white">15+</h3>
                        <p className="text-xs uppercase tracking-widest text-gray-500 mt-2">Years Experience</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-display text-white">250+</h3>
                        <p className="text-xs uppercase tracking-widest text-gray-500 mt-2">Exclusive Listings</p>
                    </div>
                </div>
            </motion.div>
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative"
            >
                <div className="absolute -inset-4 border border-gold-400/20 z-0" />
                <img 
                    /* src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop"  */
                    src="https://hoteldelaville.com/wp-content/uploads/2022/05/lago-di-como-cosa-vedere-ville-storiche-villa-del-balbianello.jpg"
                    alt="Interior Design" 
                    className="w-full h-[500px] object-cover relative z-10 grayscale hover:grayscale-0 transition-all duration-700" 
                />
            </motion.div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 bg-dark-800">
        <div className="container mx-auto px-6 md:px-12">
            <div className="flex justify-between items-end mb-16">
                <div>
                    <h2 className="font-display text-4xl text-white mb-2">CURATED <span className="text-gold-400">SELECTION</span></h2>
                    <p className="text-gray-500 text-sm tracking-widest uppercase">Handpicked for excellence</p>
                </div>
                <button 
                  onClick={() => navigate('/properties')}
                  className="hidden md:block text-gold-400 text-sm tracking-widest uppercase border-b border-gold-400 pb-1 hover:text-white hover:border-white transition-all duration-300"
                >
                    View All
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>
            
            <div className="mt-12 text-center md:hidden">
              <button 
                  onClick={() => navigate('/properties')}
                  className="text-gold-400 text-sm tracking-widest uppercase border-b border-gold-400 pb-1"
                >
                    View All
                </button>
            </div>
        </div>
      </section>

      {/* Interactive Map Concept Section */}
      <section className="py-32 bg-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           {/* Abstract World Map SVG */}
           <svg className="w-full h-full object-cover text-gray-700" fill="currentColor" viewBox="0 0 1000 500">
              <path d="M100,100 Q150,50 200,100 T300,100 T400,150 T500,100 T600,150 T700,100 T800,150 T900,100" stroke="none" /> 
              {/* Minimal representation of continents for aesthetic background */}
              <circle cx="200" cy="150" r="40" />
              <circle cx="500" cy="120" r="30" />
              <circle cx="800" cy="180" r="50" />
              <circle cx="250" cy="300" r="45" />
              <circle cx="550" cy="350" r="35" />
              <circle cx="850" cy="320" r="25" />
           </svg>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
                <h2 className="font-display text-4xl md:text-6xl text-white mb-6">GLOBAL <span className="text-gold-400">REACH</span></h2>
                <p className="text-gray-400 max-w-2xl mx-auto font-sans mb-12">
                    Our network extends across the world's most coveted destinations. 
                    From the Mediterranean coast to the skylines of Asia and the Americas.
                </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-12 mt-16">
                {[
                    { icon: MapPin, title: "Prime Locations", desc: "Access to off-market listings" },
                    { icon: Globe, title: "International", desc: "Multilingual agents worldwide" },
                    { icon: Award, title: "Excellence", desc: "Award-winning service" }
                ].map((item, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="bg-dark-800/50 backdrop-blur-md p-8 border border-white/5 hover:border-gold-400/50 transition-colors duration-500 w-full md:w-80"
                    >
                        <item.icon className="w-10 h-10 text-gold-400 mx-auto mb-6" strokeWidth={1} />
                        <h4 className="font-display text-xl mb-3">{item.title}</h4>
                        <p className="text-gray-500 font-sans text-sm">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;