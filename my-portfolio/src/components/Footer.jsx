import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => (
  <motion.footer
    className="py-12 bg-gray-800/50 border-t border-gray-800"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="max-w-6xl mx-auto px-4 text-center">
      <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
        Portfolio
      </div>
      <p className="text-gray-400 mb-6">Built with React & Tailwind CSS.</p>
      <div className="flex justify-center space-x-6">
        <motion.a
          href="https://github.com/aharsha7"
          className="text-gray-400 hover:text-white transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          <Github size={24} />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/aharsha-vhardhan-s-/"
          className="text-gray-400 hover:text-white transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          <Linkedin size={24} />
        </motion.a>
        <motion.a
          href="mailto:aharsha7na@gmail.com"
          className="text-gray-400 hover:text-white transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          <Mail size={24} />
        </motion.a>
      </div>
    </div>
  </motion.footer>
);

export default Footer;