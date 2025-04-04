import { motion } from 'framer-motion';
import { Smartphone, Zap, Globe, Shield, Cloud, Cpu } from 'lucide-react';
import { Button } from '../components/ui/button';

const MobileApps = () => {
  const features = [
    {
      icon: Globe,
      title: "Multiplataforma",
      description: "Desarrollo para iOS y Android con una única base de código"
    },
    {
      icon: Zap,
      title: "Alto Rendimiento",
      description: "Optimización para velocidad y eficiencia en dispositivos móviles"
    },
    {
      icon: Shield,
      title: "Seguridad",
      description: "Protección de datos y privacidad del usuario"
    },
    {
      icon: Cloud,
      title: "Sincronización",
      description: "Integración con servicios en la nube"
    },
    {
      icon: Smartphone,
      title: "UI/UX Nativo",
      description: "Interfaces que siguen las guías de diseño de cada plataforma"
    },
    {
      icon: Cpu,
      title: "Offline First",
      description: "Funcionalidad sin conexión a internet"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-purple-900 via-black to-indigo-900">
            <motion.div
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
                opacity: [0.3, 0.6]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent bg-[length:400%_400%]"
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
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Desarrollo de Apps Móviles
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Creamos aplicaciones móviles innovadoras que transforman la experiencia del usuario
            </p>
            <Button variant="gradient" size="lg">
              Comenzar Proyecto
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
                className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-6 rounded-xl backdrop-blur-lg"
              >
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Nuestro Proceso</h2>
            <p className="text-gray-300">
              Desarrollo ágil y eficiente para llevar tu app al mercado
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Diseño UX/UI" },
              { step: "02", title: "Desarrollo" },
              { step: "03", title: "Testing" },
              { step: "04", title: "Publicación" }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative"
              >
                <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6">
                  <span className="text-6xl font-bold text-purple-500/20">{phase.step}</span>
                  <h3 className="text-xl font-semibold mt-4">{phase.title}</h3>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-gradient-to-r from-purple-500/20 to-transparent transform translate-x-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileApps;