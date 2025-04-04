import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const AIIntegration = () => {
  const projects = [
    {
      title: "AI Vision System",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80",
      description: "Sistema de visión artificial para control de calidad",
      tech: ["TensorFlow", "OpenCV", "Python", "AWS"]
    },
    {
      title: "NLP Platform",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
      description: "Plataforma de procesamiento de lenguaje natural",
      tech: ["PyTorch", "BERT", "FastAPI", "Docker"]
    },
    {
      title: "Predictive Analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      description: "Sistema de análisis predictivo para negocios",
      tech: ["Scikit-learn", "React", "Python", "MongoDB"]
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-black via-violet-950 to-black">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-500">
            Integración con IA
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Potenciamos tu negocio con soluciones de Inteligencia Artificial
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Tecnologías de IA</h2>
            <ul className="space-y-4">
              {[
                "Machine Learning y Deep Learning",
                "Procesamiento de Lenguaje Natural",
                "Visión por Computadora",
                "Análisis Predictivo",
                "Sistemas de Recomendación"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <span className="w-2 h-2 bg-violet-500 rounded-full" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl blur-xl opacity-20" />
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
              alt="AI Integration"
              className="rounded-xl relative z-10"
            />
          </motion.div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">
            Proyectos Destacados
          </h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-violet-500/10 text-violet-400 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AIIntegration;