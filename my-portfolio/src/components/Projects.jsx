import React from "react";
import { Github, ExternalLink, Star, Eye } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Quiz App",
    description:
      "Full-stack quiz application with authentication, real-time updates, and admin dashboard.",
    image: "quizz.jpeg",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/aharsha7/frontend-quiz.git",
    live: "https://frontend-quiz-rnhp.vercel.app/login",
  },
  {
    title: "Budget Management App",
    description:
      "Collaborative budget app with real-time charts and financial insights.",
    image: "budget2.jpeg",
    tech: ["React", "Flask", "SQLAlchemy", "Python"],
    github: "https://github.com/aharsha7/frontend-budget.git",
    live: "https://frontend-budget.vercel.app/",
  },
  {
    title: "Notes Dashboard",
    description:
      "Note-taking app with full CRUD, filters, and responsive UI.",
    image: "notes.jpeg",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/aharsha7/Using-Redux.git",
    live: "https://using-redux-final.vercel.app/",
  },
];

const Projects = () => (
  <section id="projects" className="py-20 bg-gray-800/50 relative overflow-hidden">
    {/* Background elements */}
    <div className="absolute inset-0">
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-500/5 rounded-full blur-xl animate-pulse delay-1000"></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {"Featured Projects".split("").map((char, index) => (
          <span
            key={index}
            className="inline-block hover:text-blue-400 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default"
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800/50 rounded-xl overflow-hidden hover:bg-gray-800/70 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 group backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Image section with enhanced effects */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Floating action buttons */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300">
                  <Star size={14} className="text-yellow-400" />
                </div>
                <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300">
                  <Eye size={14} className="text-blue-400" />
                </div>
              </div>

              {/* Project number badge */}
              <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-sm font-bold opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                {index + 1}
              </div>
            </div>

            {/* Content section */}
            <div className="p-6">
              {/* Title with hover effect */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300 cursor-default">
                {project.title.split("").map((char, i) => (
                  <span
                    key={i}
                    className="inline-block hover:scale-110 hover:-translate-y-1 transition-all duration-200"
                    style={{ transitionDelay: `${i * 20}ms` }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-4 line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
                {project.description}
              </p>

              {/* Tech stack with enhanced styling */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 hover:bg-blue-500/30 hover:border-blue-400/50 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action buttons with enhanced effects */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg group/btn"
                >
                  <Github size={16} className="group-hover/btn:rotate-12 transition-transform duration-300" /> 
                  <span>Code</span>
                </a>
                
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25 group/btn relative overflow-hidden"
                >
                  <ExternalLink size={16} className="group-hover/btn:rotate-12 transition-transform duration-300" /> 
                  <span>Live Demo</span>
                  
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover/btn:translate-x-[200%] transition-transform duration-700"></div>
                </a>
              </div>
            </div>

            {/* Bottom accent line */}
            <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;