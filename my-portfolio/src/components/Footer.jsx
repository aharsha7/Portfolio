import React, { useState } from "react";
import { Heart, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-3 bg-gradient-to-b from-gray-900/50 to-black/80 border-t border-gray-700/50 overflow-hidden animate-fade-in">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-20 bg-gradient-to-t from-blue-500/8 to-transparent blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative text-center">
        {/* Main Content - Centered Layout */}
        <div className="flex flex-col items-center justify-center gap-2">
          
          {/* Brand Section */}
          <div className="animate-slide-in-left">
            <div className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-size-200 animate-gradient-x hover:scale-105 transition-transform duration-300 cursor-pointer">
              Portfolio
            </div>
          </div>

          {/* Description - Center */}
          <div className="flex items-center gap-2 text-gray-400 text-xs md:text-sm animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <span>Built with</span>
            <Heart size={14} fill="currentColor" className="text-red-400 animate-pulse-heart" />
            <span>using React & Tailwind</span>
          </div>
        </div>

        {/* Bottom Divider and Copyright */}
        <div className="mt-2 pt-2 border-t border-gray-700/30 animate-fade-in" style={{animationDelay: '0.4s'}}>
          <div className="flex flex-col items-center justify-center gap-1 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Code size={12} />
              <span>Clean Code • Modern Design</span>
            </div>
            <div>
              Made with passion for great experiences ✨
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-60 animate-pulse-glow"></div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes pulse-heart {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.8; }
        }
        
        .bg-size-200 { background-size: 200% 200%; }
        .animate-fade-in { animation: fade-in 0.8s ease-out both; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out both; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out both; }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; }
        .animate-pulse-heart { animation: pulse-heart 2s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
      `}</style>
    </footer>
  );
};

export default Footer;