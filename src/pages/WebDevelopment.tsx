import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';
import { Code, Layout, Zap, Shield, Search, BarChart } from 'lucide-react';
import { Button } from '../components/ui/button';

function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Box args={[1, 1, 1]}>
          <meshStandardMaterial color="#6366f1" />
        </Box>
      </Suspense>
      <OrbitControls autoRotate />
    </Canvas>
  );
}

const WebDevelopment = () => {
  const features = [
    {
      icon: Layout,
      title: "Diseño Responsivo",
      description: "Interfaces adaptables a cualquier dispositivo"
    },
    {
      icon: Zap,
      title: "Alto Rendimiento",
      description: "Optimización para velocidad y eficiencia"
    },
    {
      icon: Shield,
      title: "Seguridad Avanzada",
      description: "Protección contra vulnerabilidades"
    },
    {
      icon: Search,
      title: "SEO Optimizado",
      description: "Mejor visibilidad en buscadores"
    },
    {
      icon: Code,
      title: "Código Limpio",
      description: "Desarrollo mantenible y escalable"
    },
    {
      icon: BarChart,
      title: "Analytics",
      description: "Métricas y análisis detallado"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full" style={{ background: 'linear-gradient(to right, #000000, #130F40)' }}>
            <div className="absolute inset-0" style={{ height: '400px' }}>
              <Scene />
            </div>
          </div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Desarrollo Web Profesional
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Creamos experiencias web excepcionales utilizando las últimas tecnologías y mejores prácticas
            </p>
            <Button variant="gradient" size="lg">
              Solicitar Cotización
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
                className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-6 rounded-xl backdrop-blur-lg"
              >
                <feature.icon className="w-12 h-12 text-indigo-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-b from-black to-indigo-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Tecnologías que Utilizamos</h2>
            <p className="text-gray-300">
              Trabajamos con las herramientas más modernas y eficientes del mercado
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['React', 'Vue', 'Node.js', 'TypeScript', 'Next.js', 'TailwindCSS', 'GraphQL', 'AWS'].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-lg rounded-lg p-6 text-center"
              >
                <p className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  {tech}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;