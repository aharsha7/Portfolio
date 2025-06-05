import React from "react";
import { Code, Download } from "lucide-react";
import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="py-20 bg-gray-800/50">
    <div className="max-w-6xl mx-auto px-4">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm a passionate full-stack developer with over 1 year of experience creating digital solutions. I love crafting exceptional user experiences.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Outside of coding, I explore new technologies, contribute to open-source. I believe in clean code and beautiful UI.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <span className="px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 border border-blue-500/30">Problem Solver</span>
            <span className="px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 border border-purple-500/30">Creative Thinker</span>
            <span className="px-4 py-2 bg-green-500/20 rounded-full text-green-300 border border-green-500/30">Team Player</span>
          </div>
          <a 
            href="/aharsha_full_stack.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >  
            <Download size={20} /> Download Resume
          </a>
        </motion.div>

        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Main profile image container */}
          <div className="relative group">
            {/* Animated background blur */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
            
            {/* Image container with perfect circle */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-purple-500 shadow-2xl group-hover:scale-105 transition-all duration-500">
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                  <img 
                    src="pics3.png" 
                    alt="Profile" 
                    className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-700 ease-out" 
                  />
                </div>
              </div>
              
              {/* Overlay gradient for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent rounded-full"></div>
            </div>
            
            {/* Floating code icon */}
            <motion.div 
              className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg border-2 border-gray-800 group-hover:rotate-12 transition-all duration-500"
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.95 }}
            >
              <Code size={28} className="text-white" />
            </motion.div>
            
            {/* Additional floating elements */}
            <motion.div 
              className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-80 blur-sm"
              animate={{ 
                y: [-10, 10, -10],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            
            <motion.div 
              className="absolute top-8 -right-8 w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-60 blur-sm"
              animate={{ 
                y: [10, -10, 10],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;