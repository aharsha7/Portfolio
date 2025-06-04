import React from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const Hero = ({ scrollTo }) => (
  <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <motion.div
      className="relative z-10 text-center max-w-4xl mx-auto px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div className="mb-8" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1">
          <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-4xl font-bold">AV</div>
        </div>
      </motion.div>

      <motion.h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent" initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 1 }}>
        Aharsha Vhardhan
      </motion.h1>
      <motion.p className="text-xl md:text-2xl text-gray-300 mb-8" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
        Full Stack Developer
      </motion.p>
      <motion.p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
        I craft beautiful digital experiences with modern technologies. Passionate about clean code, stunning designs, and innovative solutions.
      </motion.p>

      <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.8 }}>
        <button
          onClick={() => scrollTo("projects")}
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
        >
          View My Work
        </button>
      </motion.div>

      <motion.div className="flex justify-center mt-8" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
        <ChevronDown size={32} className="text-gray-400" />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;