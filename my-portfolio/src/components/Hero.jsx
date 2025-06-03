// components/Hero.jsx
import React from "react";
import { ChevronDown } from "lucide-react";

const Hero = ({ scrollTo }) => (
  <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
      <div className="mb-8 animate-fade-in">
        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1">
          <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-4xl font-bold">AV</div>
        </div>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-fade-in-up delay-200">
        Aharsha Vhardhan
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up delay-400">
        Full Stack Developer
      </p>
      <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-up delay-600">
        I craft beautiful digital experiences with modern technologies. Passionate about clean code, stunning designs, and innovative solutions.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-800">
        <button
          onClick={() => scrollTo("projects")}
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
        >
          View My Work
        </button>
      </div>

      <div className="flex justify-center mt-8">
        <ChevronDown size={32} className="text-gray-400 animate-bounce" />
      </div>
    </div>
  </section>
);

export default Hero;