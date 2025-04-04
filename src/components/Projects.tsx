import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, description, image, tags, index }: any) => {
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
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
          <p className="text-gray-300 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag: string, i: number) => (
              <span
                key={i}
                className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white"
          >
            Ver Proyecto
            <ExternalLink className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Plataforma E-learning",
      description: "Sistema de aprendizaje en línea con IA adaptativa",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
      tags: ["React", "Node.js", "AI", "AWS"]
    },
    {
      title: "App Fintech",
      description: "Aplicación móvil para gestión financiera personal",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      tags: ["React Native", "Firebase", "FinTech"]
    },
    {
      title: "Dashboard IoT",
      description: "Panel de control para dispositivos conectados",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80",
      tags: ["Vue.js", "IoT", "Real-time"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-indigo-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explora algunos de nuestros casos de éxito más recientes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;