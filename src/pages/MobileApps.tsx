import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MobileApps = () => {
  const projects = [
    {
      title: "Fitness & Health App",
      image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&q=80",
      description: "Aplicación de seguimiento de salud y fitness con IA",
      tech: ["React Native", "Firebase", "TensorFlow"]
    },
    {
      title: "Delivery Platform",
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80",
      description: "Plataforma de delivery con tracking en tiempo real",
      tech: ["Flutter", "Node.js", "Google Maps"]
    },
    {
      title: "Social Network",
      image: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&q=80",
      description: "Red social con funciones de AR y streaming",
      tech: ["Swift", "Kotlin", "WebRTC"]
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-black via-blue-950 to-black">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
            Apps Móviles
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Desarrollamos aplicaciones móviles que destacan en el mercado
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Tecnologías Mobile</h2>
            <ul className="space-y-4">
              {[
                "React Native para desarrollo multiplataforma",
                "Swift y SwiftUI para iOS nativo",
                "Kotlin y Jetpack Compose para Android",
                "Flutter para apps híbridas",
                "Firebase y servicios cloud mobile"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
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
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 rounded-xl blur-xl opacity-20" />
            <img
              src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80"
              alt="Mobile Development"
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
                          className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
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

export default MobileApps;