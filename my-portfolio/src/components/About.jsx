// components/About.jsx
import React from "react";
import { Code, Download } from "lucide-react";

const About = () => (
  <section id="about" className="py-20 bg-gray-800/50">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
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
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">  
            <Download size={20} /> Download Resume
          </a>
        </div>

        <div className="relative">
          <div className="w-full h-106 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl overflow-hidden">
            <img src="pics3.png" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <Code size={32} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;