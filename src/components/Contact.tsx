import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-black py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">Comencemos Tu Proyecto</h2>
            <p className="text-xl text-gray-300">
              Estamos listos para convertir tu visión en realidad
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-blue-400" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Llámanos</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-purple-400" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <p className="text-gray-300">contacto@tuempresa.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <MessageSquare className="w-6 h-6 text-pink-400" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Chat</h3>
                  <p className="text-gray-300">Disponible 24/7</p>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <textarea
                placeholder="Mensaje"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Enviar Mensaje
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;