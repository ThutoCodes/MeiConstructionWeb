import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


export default function HeroBanner() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-green-700 text-white py-24"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h1 
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Building Industrial Excellence
        </motion.h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Specialists in mining, engineering, and infrastructure construction
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/capabilities" 
            className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition"
          >
            Our Capabilities
          </Link>
          <Link 
            to="/contact" 
            className="border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </motion.section>
  );
}