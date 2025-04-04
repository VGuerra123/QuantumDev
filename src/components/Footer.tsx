import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Github, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', color: 'hover:text-blue-500' },
    { icon: Twitter, href: 'https://twitter.com', color: 'hover:text-blue-400' },
    { icon: Instagram, href: 'https://instagram.com', color: 'hover:text-pink-500' },
    { icon: Linkedin, href: 'https://linkedin.com', color: 'hover:text-blue-600' },
    { icon: Github, href: 'https://github.com', color: 'hover:text-gray-400' },
    { icon: Youtube, href: 'https://youtube.com', color: 'hover:text-red-500' }
  ];

  return (
    <footer className="bg-gradient-to-b from-black to-indigo-950/50 backdrop-blur-lg border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Logo />
            <p className="text-gray-400">
              Innovación digital que transforma empresas y crea experiencias extraordinarias.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 transition-colors ${social.color}`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Soluciones</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Desarrollo Web</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Apps Móviles</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Inteligencia Artificial</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cloud Computing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">DevOps</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Casos de Éxito</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentación</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Centro de Ayuda</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Status</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-gray-400">contacto@nexusforge.io</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-pink-400" />
                <span className="text-gray-400">San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm">
              © 2025 NexusForge. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Términos</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacidad</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;