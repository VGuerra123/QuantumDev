import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const Logo = () => {
  return (
    <motion.div 
      className="flex items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-blue-500 to-violet-500 rounded-lg blur-lg"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <div className="relative bg-black p-2 rounded-lg">
          <Zap className="w-8 h-8 text-emerald-400" />
        </div>
      </div>
      <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-blue-500 to-violet-500">
        QuantumLeap
      </span>
    </motion.div>
  );
};

export default Logo;