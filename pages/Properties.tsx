import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROPERTIES } from '../constants';
import PropertyCard from '../components/PropertyCard';
import { Filter } from 'lucide-react';

const Properties: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('All');
  
  const types = ['All', ...Array.from(new Set(PROPERTIES.map(p => p.type)))];
  
  const filteredProperties = filterType === 'All' 
    ? PROPERTIES 
    : PROPERTIES.filter(p => p.type === filterType);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-dark-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
          >
             <h1 className="font-display text-5xl md:text-6xl text-white mb-4">OUR <span className="text-gold-400">COLLECTION</span></h1>
             <p className="text-gray-400 font-sans tracking-wide max-w-lg">
               Explore our portfolio of exceptional homes designed for the modern connoisseur.
             </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 md:mt-0 flex flex-wrap gap-4"
          >
             <div className="flex items-center space-x-2 text-gold-400 mr-4">
               <Filter size={18} />
               <span className="uppercase text-xs tracking-widest">Filter By:</span>
             </div>
             {types.map(type => (
               <button
                 key={type}
                 onClick={() => setFilterType(type)}
                 className={`px-4 py-2 text-xs uppercase tracking-widest transition-all duration-300 border ${
                   filterType === type 
                     ? 'bg-gold-400 text-black border-gold-400' 
                     : 'bg-transparent text-gray-400 border-gray-700 hover:border-gold-400 hover:text-gold-400'
                 }`}
               >
                 {type}
               </button>
             ))}
          </motion.div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProperties.map((property) => (
             <PropertyCard key={property.id} property={property} />
          ))}
        </motion.div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 font-serif text-xl">No properties found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;