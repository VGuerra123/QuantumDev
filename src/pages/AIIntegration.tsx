import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Bot, Cpu, Database, Network, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';

const AIIntegration = () => {
  const features = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Modelos personalizados para tu negocio"
    },
    {
      icon: Bot,
      title: "Chatbots IA",
      description: "Asistentes virtuales inteligentes"
    },
    {
      icon: Database,
      title: "Big Data",
      description: "Análisis de grandes volúmenes de datos"
    },
    {
      icon: Network,
      title: "Redes Neuronales",
      description: "Procesamiento de patrones complejos"
    },
    {
      icon: Cpu,
      title: "Automatización",
      description: "Procesos optimizados con IA"
    },
    {
      icon: Sparkles,
      title: "NLP",
      description: "Procesamiento de lenguaje natural"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-blue-900 via-black to-purple-900">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"
            />
          </div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Integración de Inteligencia Artificial
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Potencia tu negocio con soluciones avanzadas de IA y Machine Learning
            </p>
            <Button variant="gradient" size="lg">
              Explorar Soluciones
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-6 rounded-xl backdrop-blur-lg"
              >
                <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-b from-black to-blue-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Casos de Uso</h2>
            <p className="text-gray-300">
              Descubre cómo la IA puede transformar tu industria
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Análisis Predictivo",
                description: "Anticipa tendencias y comportamientos del mercado"
              },
              {
                title: "Reconocimiento de Imágenes",
                description: "Automatiza la clasificación y análisis visual"
              },
              {
                title: "Procesamiento de Texto",
                description: "Extrae información valiosa de documentos"
              },
              {
                title: "Optimización de Procesos",
                description: "Mejora la eficiencia operativa con IA"
              }
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8 rounded-xl backdrop-blur-lg border border-white/10"
              >
                <h3 className="text-2xl font-semibold mb-4">{useCase.title}</h3>
                <p className="text-gray-400">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIIntegration;