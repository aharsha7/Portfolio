import React, { useState } from "react";
import { Github, Linkedin, Mail, Heart, Code } from "lucide-react";

const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const socialLinks = [
    {
      id: 'github',
      icon: Github,
      href: 'https://github.com/aharsha7',
      label: 'GitHub',
      color: 'from-gray-600 to-gray-800'
    },
    {
      id: 'linkedin',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/aharsha-vhardhan-s-/',
      label: 'LinkedIn',
      color: 'from-blue-600 to-blue-800'
    },
    {
      id: 'email',
      icon: Mail,
      href: 'mailto:aharsha7na@gmail.com',
      label: 'Email',
      color: 'from-red-600 to-red-800'
    }
  ];

  return (
    <div
      className="relative py-16 bg-gradient-to-b from-gray-900/50 to-black/80 border-t border-gray-700/50 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-t from-blue-500/10 to-transparent blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 text-center relative">
        {/* Brand Section */}
        <div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
           Portfolio
          </div>
        </div>

        {/* Description */}
        <div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 text-gray-400 text-lg mb-2">
            <span>Built with</span>
            <div 
              className="text-red-400"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart size={18} fill="currentColor" />
            </div>
            <span>using React & Tailwind CSS</span>
          </div>
          
          <div className="flex items-center justify-center gap-3 text-gray-500 text-sm">
            <div className="flex items-center gap-1">
              <Code size={16} />
              <span>Clean Code • Modern Design</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6"></div>
          
          <div className="text-gray-500 text-sm">
            <div className="text-xs text-gray-600">
              Made with passion for great user experiences ✨
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-60"></div>
    </div>
  );
};

export default Footer;