import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ClipboardList, Code2, Settings } from 'lucide-react';

const MethodologyStep = ({ icon: Icon, title, description, index }: any) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="flex gap-6 items-start bg-white/5 backdrop-blur-lg p-8 rounded-xl"
    >
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const Methodology = () => {
  return (
    <div className="bg-gradient-to-b from-black to-indigo-900 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">Nuestra Metodología</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Un proceso probado para entregar soluciones tecnológicas excepcionales
          </p>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          <MethodologyStep
            icon={ClipboardList}
            title="1. Levantamiento de Requerimientos Iniciales"
            description="Levantamos y analizamos junto a nuestros clientes sus necesidades y problemáticas para proponer las soluciones tecnológicas que mejor se adapten a estas."
            index={0}
          />
          
          <MethodologyStep
            icon={Code2}
            title="2. Levantamiento Funcional, Diseño y Desarrollo"
            description="Analizamos y diseñamos la creación de las soluciones a desarrollar, poniendo foco en la calidad y escalabilidad. Utilizamos metodologías híbridas, combinando enfoques ágiles y cascada, basándonos en procesos de desarrollo iterativos."
            index={1}
          />
          
          <MethodologyStep
            icon={Settings}
            title="3. Plan Piloto y Continuidad Operacional"
            description="Acompañamos al cliente en la implementación del software, asegurando su correcto funcionamiento, orientando a los usuarios y ajustando detalles según las necesidades detectadas. Ofrecemos planes que garantizan la continuidad operacional y mejora continua."
            index={2}
          />
        </div>
      </div>
    </div>
  );
};

export default Methodology;