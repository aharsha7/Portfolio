// components/Projects.jsx
import React from "react";
import { Github, ExternalLink } from "lucide-react";

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
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    github: "https://github.com/aharsha7/Using-Redux.git",
    live: "https://using-redux-final.vercel.app/",
  },
];

const Projects = () => (
  <section id="projects" className="py-20 bg-gray-800/50">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800/50 rounded-xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105 group"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                >
                  <Github size={16} /> Code
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg transition-all"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;