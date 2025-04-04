import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Smartphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const title = "Forjando el Futuro Digital".split(" ");

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white overflow-hidden pt-32">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-6xl mx-auto"
        >
          <div className="flex flex-wrap justify-center mb-6 overflow-hidden">
            {title.map((word, i) => (
              <motion.span
                key={i}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mx-2 my-1 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
              >
                {word}
              </motion.span>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto"
          >
            Transformamos visiones empresariales en soluciones digitales innovadoras
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold flex items-center gap-2 group"
            >
              Iniciar Proyecto
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-purple-500/30 rounded-full text-white font-semibold hover:bg-purple-500/10 transition-colors"
            >
              Ver Portafolio
            </motion.button>
          </motion.div>

          {/* TARJETAS DE SERVICIOS CON LINK */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Web */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link
                to="/WebDevelopment"
                className="block bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 group"
              >
                <Code className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-2 text-center">Desarrollo Web</h3>
                <p className="text-gray-300 text-center">Aplicaciones web modernas y escalables con las últimas tecnologías</p>
              </Link>
            </motion.div>

            {/* Apps */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Link
                to="/MobileApps"
                className="block bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:border-purple-400 transition-all duration-300 shadow-lg hover:shadow-purple-500/20 group"
              >
                <Smartphone className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-2 text-center">Apps Móviles</h3>
                <p className="text-gray-300 text-center">Experiencias móviles nativas y multiplataforma de alto rendimiento</p>
              </Link>
            </motion.div>

            {/* IA */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Link
                to="/AIIntegration"
                className="block bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:border-pink-400 transition-all duration-300 shadow-lg hover:shadow-pink-500/20 group"
              >
                <Brain className="w-12 h-12 text-pink-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-2 text-center">Integración IA</h3>
                <p className="text-gray-300 text-center">Potencia tu negocio con soluciones de IA personalizadas</p>
              </Link>
            </motion.div>
          </div>

          {/* Tecnologías */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-16 flex justify-center items-center gap-8 flex-wrap"
          >
            <p className="text-gray-400">Tecnologías que dominamos:</p>
            <div className="flex gap-6 items-center flex-wrap justify-center">
              {['React', 'Node.js', 'Python', 'AWS', 'Flutter', 'TensorFlow'].map((tech, i) => (
                <motion.span
                  key={i}
                  className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300"
                  whileHover={{ scale: 1.1 }}
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
