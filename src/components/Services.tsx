import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Smartphone, 
  Brain, 
  Cloud, 
  Shield, 
  BarChart 
} from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, index }: any) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 hover:from-white/10 hover:to-white/15 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Desarrollo Web",
      description: "Creamos aplicaciones web modernas y escalables utilizando las últimas tecnologías y frameworks."
    },
    {
      icon: Smartphone,
      title: "Apps Móviles",
      description: "Desarrollamos aplicaciones móviles nativas y multiplataforma para iOS y Android."
    },
    {
      icon: Brain,
      title: "Inteligencia Artificial",
      description: "Implementamos soluciones de IA y aprendizaje automático para optimizar procesos."
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "Ofrecemos servicios de arquitectura y desarrollo en la nube con las principales plataformas."
    },
    {
      icon: Shield,
      title: "Ciberseguridad",
      description: "Protegemos tu negocio con las mejores prácticas y herramientas de seguridad."
    },
    {
      icon: BarChart,
      title: "Analítica de Datos",
      description: "Transformamos datos en insights accionables para tu negocio."
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ofrecemos soluciones tecnológicas integrales para impulsar tu negocio hacia el futuro
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;