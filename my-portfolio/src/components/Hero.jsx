import React from "react";
import { ChevronDown, Code2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Hero = ({ scrollTo }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-24"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-pink-500/8 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Profile Avatar */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto mb-8 group">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1 hover:scale-110 hover:rotate-6 transition-all duration-500">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-4xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:scale-125 transition-transform duration-300">
                  AV
                </span>
              </div>
            </div>

            {/* Floating icons */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-500/30 hover:scale-125 hover:rotate-12 transition-all duration-300">
              <Code2 size={16} className="text-blue-400" />
            </div>

            <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-500/30 hover:scale-125 hover:-rotate-12 transition-all duration-300">
              <Sparkles size={16} className="text-purple-400" />
            </div>
          </div>
        </motion.div>

        {/* Name with letter hover effects */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          {"Aharsha Vhardhan".split("").map((char, index) => (
            <span
              key={index}
              className="inline-block hover:text-blue-400 hover:scale-125 hover:-translate-y-2 transition-all duration-300 cursor-default"
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </motion.h1>

        {/* Role title */}
        <motion.div
          className="relative mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-xl md:text-2xl text-gray-300 hover:text-blue-300 transition-colors duration-300">
            Full Stack Developer
          </p>
        </motion.div>

        {/* Description with highlighted words */}
        <motion.p
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          I craft beautiful digital experiences with modern technologies.
          Passionate about{" "}
          <span className="text-blue-400 font-semibold hover:scale-110 hover:text-blue-300 inline-block transition-all duration-300">
            clean code
          </span>
          {", "}
          <span className="text-purple-400 font-semibold hover:scale-110 hover:text-purple-300 inline-block transition-all duration-300">
            stunning designs
          </span>
          {", and "}
          <span className="text-pink-400 font-semibold hover:scale-110 hover:text-pink-300 inline-block transition-all duration-300">
            innovative solutions
          </span>
          .
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <button
            onClick={() => scrollTo("projects")}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform active:scale-95"
          >
            View My Work
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="px-8 py-4 border-2 border-gray-600 rounded-full font-semibold hover:border-blue-400 hover:text-blue-400 hover:scale-105 hover:shadow-lg hover:bg-blue-400/5 transition-all duration-300 transform active:scale-95"
          >
            Get In Touch
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center mt-4"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div
            className="flex flex-col items-center cursor-pointer group"
            onClick={() => scrollTo("about")}
          >
            <span className="text-sm text-gray-500 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Scroll to explore
            </span>
            <ChevronDown
              size={32}
              className="text-gray-400 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
