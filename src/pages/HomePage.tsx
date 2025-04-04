import { motion } from 'framer-motion';
import { Brain, Code, Rocket, Smartphone, Wand2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ParticlesBackground } from '../components/ParticlesBackground';
import { ServiceCard } from '../components/ServiceCard';
import { PricingCard } from '../components/PricingCard';
import { Button } from '../components/ui/button';
import Methodology from '../components/Methodology';

function HomePage() {
  const services = [
    {
      title: "Desarrollo Web",
      description: "Creamos sitios web modernos y responsivos utilizando las últimas tecnologías.",
      Icon: Code,
      link: "/web-development"
    },
    {
      title: "Desarrollo Móvil",
      description: "Aplicaciones nativas y multiplataforma para iOS y Android.",
      Icon: Smartphone,
      link: "/mobile-apps"
    },
    {
      title: "Inteligencia Artificial",
      description: "Integración de IA y Machine Learning en tus productos.",
      Icon: Brain,
      link: "/ai-integration"
    }
  ];

  const pricingPlans = [
    {
      title: "Startup",
      price: "CLP 990.000",
      features: [
        "Desarrollo web básico",
        "3 revisiones",
        "Soporte por email",
        "Hosting incluido"
      ]
    },
    {
      title: "Business",
      price: "CLP 2.490.000",
      features: [
        "Desarrollo web avanzado",
        "Integración con IA",
        "Soporte prioritario",
        "SEO optimizado",
        "Analytics avanzado"
      ],
      popular: true
    },
    {
      title: "Enterprise",
      price: "CLP 4.990.000",
      features: [
        "Solución personalizada",
        "Desarrollo multiplataforma",
        "Soporte 24/7",
        "Consultoría estratégica",
        "Seguridad avanzada"
      ]
    }
  ];

  return (
    <div className="relative overflow-hidden">
      <ParticlesBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 text-center">
  <motion.h1
    initial={{ opacity: 0, y: -40 }}
    animate={{ 
      opacity: 1, 
      y: 0,
      textShadow: "0px 0px 20px rgba(124, 58, 237, 0.8)" 
    }}
    transition={{ duration: 1 }}
    className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 drop-shadow-lg"
  >
    Transformamos Ideas en Realidad Digital
  </motion.h1>
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: 1,
      filter: "drop-shadow(0 0 10px rgba(255,255,255,0.3))" 
    }}
    transition={{ delay: 0.3, duration: 1 }}
    className="text-xl md:text-2xl text-gray-300 mb-8"
  >
    Expertos en desarrollo de software, IA y soluciones digitales innovadoras
  </motion.p>
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6 }}
    className="flex gap-4 justify-center"
  >
    <Button 
      variant="gradient" 
      size="lg" 
      className="shadow-2xl hover:scale-105 transition-transform duration-300"
    >
      Iniciar Proyecto
    </Button>
    <Button 
      variant="outline" 
      size="lg" 
      className="border-white hover:bg-white/10 transition-colors duration-300"
    >
      Planes y precios
    </Button>
  </motion.div>
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1 }}
    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
  >
    <Rocket className="w-8 h-8 animate-bounce text-indigo-400 drop-shadow-lg" />
  </motion.div>
</section>


      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 drop-shadow-md">Nuestros Servicios</h2>
            <p className="text-gray-400">Soluciones tecnológicas adaptadas a tus necesidades</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                transition={{ duration: 0.3 }}
              >
                <Link to={service.link}>
                  <ServiceCard {...service} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <Methodology />

      {/* Pricing Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 drop-shadow-md">Planes y Precios</h2>
            <p className="text-gray-400">Soluciones adaptadas a tu presupuesto</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                transition={{ duration: 0.3 }}
              >
                <PricingCard {...plan} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 shadow-2xl hover:shadow-3xl transition-shadow duration-300"
          >
            <Wand2 className="w-16 h-16 mx-auto mb-6 text-white drop-shadow-xl" />
            <h2 className="text-4xl font-bold mb-4 drop-shadow-md">¿Listo para comenzar?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Transformemos tu visión en una solución digital innovadora
            </p>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 text-white border-white hover:bg-white/20 transition-colors duration-300"
            >
              Contactar ahora
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
