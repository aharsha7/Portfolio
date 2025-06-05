import React from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ isMenuOpen, setIsMenuOpen, activeSection, scrollTo }) => {
  const menuItems = ["home", "about", "skills", "projects", "contact"];

  return (
    <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-800/50 transition-all duration-300 animate-slide-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Enhanced Logo */}
          <div className="group cursor-pointer">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent bg-size-200 animate-gradient-x group-hover:scale-105 transition-transform duration-300">
              Portfolio
            </div>
            <div className="h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-purple-600 group-hover:w-full transition-all duration-300 rounded-full"></div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {menuItems.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`relative px-4 py-2 capitalize font-medium transition-all duration-300 rounded-lg group animate-fade-in ${
                  activeSection === item 
                    ? "text-cyan-400 bg-cyan-400/10" 
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item}
                
                {/* Active indicator */}
                {activeSection === item && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                )}
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-blue-500/0 to-purple-600/0 group-hover:from-cyan-400/5 group-hover:via-blue-500/5 group-hover:to-purple-600/5 rounded-lg transition-all duration-300"></div>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            <div className="relative">
              {isMenuOpen ? (
                <X size={24} className="rotate-90 transition-transform duration-300" />
              ) : (
                <Menu size={24} className="group-hover:scale-110 transition-transform duration-300" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-gray-800/50 space-y-1">
            {menuItems.map((item, index) => (
              <button
                key={item}
                onClick={() => {
                  scrollTo(item);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 capitalize font-medium transition-all duration-300 rounded-lg animate-slide-in-left ${
                  activeSection === item 
                    ? "text-cyan-400 bg-cyan-400/10 border-l-2 border-cyan-400" 
                    : "text-gray-300 hover:text-white hover:bg-white/5 hover:translate-x-2"
                }`}
                style={{ 
                  animationDelay: isMenuOpen ? `${index * 0.1}s` : '0s',
                  animationFillMode: 'both'
                }}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeSection === item ? 'bg-cyan-400' : 'bg-gray-600'
                  }`}></div>
                  {item}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-down {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .bg-size-200 { background-size: 200% 200%; }
        .animate-slide-down { animation: slide-down 0.6s ease-out; }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; }
        .animate-fade-in { animation: fade-in 0.6s ease-out both; }
        .animate-slide-in-left { animation: slide-in-left 0.4s ease-out; }
      `}</style>
    </nav>
  );
};

export default Navbar;