import React from 'react';
import { motion } from 'framer-motion';
import { Bed, Bath, Maximize, ArrowUpRight } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative bg-dark-800 overflow-hidden"
    >
      <div className="relative h-[400px] overflow-hidden">
        <motion.img 
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.8 }}
          src={property.imageUrl} 
          alt={property.title} 
          className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-80" />
        
        <div className="absolute top-4 right-4 bg-dark-900/80 backdrop-blur-sm px-4 py-1 border border-gold-400/30">
            <span className="text-gold-400 font-serif text-sm tracking-widest">{property.price}</span>
        </div>
        
        {/* Overlay Content on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-[2px]">
            <button className="border border-white text-white px-8 py-3 font-sans tracking-widest text-xs uppercase hover:bg-white hover:text-black transition-all duration-300">
                View Details
            </button>
        </div>
      </div>

      <div className="p-6 relative">
        <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-gold-500 w-10 h-10 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-[0_0_15px_rgba(212,175,55,0.5)]">
            <ArrowUpRight size={20} className="text-dark-900" />
        </div>

        <h3 className="text-2xl font-display text-white mb-1 group-hover:text-gold-400 transition-colors duration-300">{property.title}</h3>
        <p className="text-gray-400 font-sans text-xs tracking-wider uppercase mb-6">{property.location}</p>

        <div className="flex items-center justify-between border-t border-white/10 pt-4 text-gray-400">
          <div className="flex items-center space-x-2">
            <Bed size={16} strokeWidth={1} />
            <span className="text-xs font-sans">{property.beds} Beds</span>
          </div>
          <div className="flex items-center space-x-2">
            <Bath size={16} strokeWidth={1} />
            <span className="text-xs font-sans">{property.baths} Baths</span>
          </div>
          <div className="flex items-center space-x-2">
            <Maximize size={16} strokeWidth={1} />
            <span className="text-xs font-sans">{property.sqft.toLocaleString()} Sq Ft</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;