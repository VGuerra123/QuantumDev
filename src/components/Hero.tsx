import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Smartphone, ArrowRight } from 'lucide-react';
import backgroundHero from '../assets/backgroundHero.gif';

const Hero = () => {
  const title = "Forjando el Futuro Digital".split(" ");
  
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-indigo-900 to-purple-900 text-white overflow-hidden pt-32">
      {/* Fondo dinámico con GIF */}
      <div className="absolute inset-0">
        <img 
          src={backgroundHero} 
          alt="Background Hero" 
          className="w-full h-full object-cover opacity-20 transform scale-110"
        />
        <div className="absolute inset-0 bg-black opacity-50 mix-blend-overlay"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {}
          }}
          className="text-center max-w-6xl mx-auto"
        >
          {/* Título animado */}
          <div className="flex flex-wrap justify-center mb-6 overflow-hidden">
            {title.map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { y: 100, opacity: 0 },
                  visible: { y: 0, opacity: 1 }
                }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mx-2 my-1 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                {word}
              </motion.span>
            ))}
          </div>
          
          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto drop-shadow-md"
          >
            Transformamos visiones empresariales en soluciones digitales innovadoras
          </motion.p>

          {/* Botones CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-6 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0, 255, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold flex items-center gap-2 transition-all duration-300"
            >
              Iniciar Proyecto
              <ArrowRight className="w-5 h-5 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-purple-500/30 rounded-full text-white font-semibold hover:bg-purple-500/10 transition-colors duration-300"
            >
              Ver Portafolio
            </motion.button>
          </motion.div>
          
          {/* Tarjetas de Servicio */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <motion.div
              whileHover={{ scale: 1.03, y: -5, filter: "brightness(1.2)" }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-lg p-6 rounded-2xl border border-white/10"
            >
              <Code className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Desarrollo Web</h3>
              <p className="text-gray-300">Aplicaciones web modernas y escalables con las últimas tecnologías</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.03, y: -5, filter: "brightness(1.2)" }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-lg p-6 rounded-2xl border border-white/10"
            >
              <Smartphone className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Apps Móviles</h3>
              <p className="text-gray-300">Experiencias móviles nativas y multiplataforma de alto rendimiento</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.03, y: -5, filter: "brightness(1.2)" }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-lg p-6 rounded-2xl border border-white/10"
            >
              <Brain className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Integración IA</h3>
              <p className="text-gray-300">Potencia tu negocio con soluciones de IA personalizadas</p>
            </motion.div>
          </div>

          {/* Tecnologías */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-16 flex flex-col items-center gap-4"
          >
            <p className="text-gray-400 text-lg">Tecnologías que dominamos:</p>
            <div className="flex gap-4 flex-wrap justify-center">
              {['React', 'Node.js', 'Python', 'AWS', 'Flutter', 'TensorFlow'].map((tech, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 transition-transform duration-200"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
