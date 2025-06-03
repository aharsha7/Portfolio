// components/Skills.jsx
import React from "react";
import { Code, Palette, Smartphone } from "lucide-react";

const skills = [
  { name: "React", level: 90, icon: Code },
  { name: "JavaScript", level: 85, icon: Code },
  { name: "TypeScript", level: 80, icon: Code },
  { name: "Node.js", level: 75, icon: Code },
  { name: "UI/UX Design", level: 85, icon: Palette },
  { name: "SQL", level: 80, icon: Code },
];

const Skills = () => (
  <section id="skills" className="py-20">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Skills & Expertise
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <div key={skill.name} className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <skill.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full" style={{ width: `${skill.level}%` }}></div>
            </div>
            <p className="text-gray-400 text-sm">{skill.level}% Proficiency</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;