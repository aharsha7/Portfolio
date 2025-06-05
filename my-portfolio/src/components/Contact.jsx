import React, { useState } from "react";
import { Mail, Github, Linkedin, Send, ArrowRight, Star } from "lucide-react";

const Contact = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);
    setError("");

    if (!formData.email || !formData.message) {
      setError("Please fill in all fields");
      return;
    }

    // Simulate email sending (replace with actual emailjs implementation)
    setTimeout(() => {
      setSuccess(true);
      setFormData({ email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Star
            key={i}
            className="absolute text-purple-400/20 animate-pulse"
            size={Math.random() * 16 + 8}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Enhanced title with more complex animations */}
        <div className="text-center mb-16 space-y-4">
          <div className="overflow-hidden">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-size-200 animate-gradient-x leading-tight">
              Let's Create Magic
            </h2>
          </div>
          
          <div className="overflow-hidden">
            <p className="text-xl text-gray-300 animate-fade-in-up opacity-0" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
              Together
            </p>
          </div>

          {/* Animated underline */}
          <div className="flex justify-center mt-8">
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse-glow"></div>
          </div>
        </div>

        {/* Main content - Left and Right layout */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Side - Get in Touch Info & Social Links */}
          <div className="flex-1 space-y-8">
            {/* Glass morphism info container */}
            <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/10 shadow-2xl animate-float">
              <div className="space-y-2">
                <div className="relative">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Get In Touch
                  </h3>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-bounce opacity-60"></div>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed animate-fade-in opacity-0" style={{animationDelay: '1s', animationFillMode: 'forwards'}}>
                  Have a question, suggestion, or just want to say hello? I'd love to hear from you. 
                </p>

                <div className="space-y-2 text-gray-300 animate-fade-in opacity-0" style={{animationDelay: '1.2s', animationFillMode: 'forwards'}}>
                  <div className="flex items-center gap-3">
                  
                  </div>
                  <div className="flex items-center gap-3">
                    
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced contact cards */}
            <div className="space-y-4">
              {[
                { 
                  icon: Mail, 
                  title: "Email", 
                  subtitle: "aharsha7na@gmail.com", 
                  href: "mailto:aharsha7na@gmail.com",
                  gradient: "from-red-500 to-pink-500",
                  delay: "0.2s"
                },
                { 
                  icon: Linkedin, 
                  title: "LinkedIn", 
                  subtitle: "Connect professionally", 
                  href: "https://www.linkedin.com/in/aharsha-vhardhan-s-/",
                  gradient: "from-blue-500 to-cyan-500",
                  delay: "0.4s"
                },
                { 
                  icon: Github, 
                  title: "GitHub", 
                  subtitle: "Check out my code", 
                  href: "https://github.com/aharsha7",
                  gradient: "from-gray-600 to-gray-800",
                  delay: "0.6s"
                }
              ].map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith('mailto:') ? '_self' : '_blank'}
                    rel={contact.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                    className="group block animate-slide-in-right opacity-0"
                    style={{animationDelay: contact.delay, animationFillMode: 'forwards'}}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 p-6 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:border-white/40">
                      {/* Animated background gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${contact.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                      
                      {/* Ripple effect */}
                      {hoveredCard === index && (
                        <div className="absolute inset-0 bg-white/10 rounded-2xl animate-ping"></div>
                      )}

                      <div className="relative flex items-center gap-4">
                        {/* Enhanced icon container */}
                        <div className={`relative p-4 bg-gradient-to-r ${contact.gradient} rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <Icon size={24} className="text-white relative z-10" />
                          <div className="absolute inset-0 bg-white/20 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="font-bold text-lg text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                            {contact.title}
                          </h4>
                          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            {contact.subtitle}
                          </p>
                        </div>
                        
                        {/* Animated arrow */}
                        <ArrowRight 
                          size={20} 
                          className="text-gray-400 group-hover:text-white group-hover:translate-x-2 transition-all duration-300" 
                        />
                      </div>

                      {/* Bottom border animation */}
                      <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${contact.gradient} w-0 group-hover:w-full transition-all duration-500 rounded-full`}></div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="flex-1 w-full">
            <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/10 shadow-2xl animate-float" style={{animationDelay: '0.5s'}}>
              <div className="relative mb-16">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Send Message
                </h3>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-bounce opacity-60"></div>
              </div>

              <div className="space-y-6">
                <div className="animate-fade-in opacity-0" style={{animationDelay: '1.4s', animationFillMode: 'forwards'}}>
                  <label className="block text-gray-300 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
                  />
                </div>

                <div className="animate-fade-in opacity-0" style={{animationDelay: '1.6s', animationFillMode: 'forwards'}}>
                  <label className="block text-gray-300 font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    placeholder="Type your message..."
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none backdrop-blur-sm transition-all duration-300 hover:bg-white/15 resize-none"
                  ></textarea>
                </div>

                <div className="animate-fade-in opacity-0" style={{animationDelay: '1.8s', animationFillMode: 'forwards'}}>
                  <button
                    onClick={handleSubmit}
                    className="group w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <Send size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                    <span className="relative z-10">Send Message</span>
                  </button>
                </div>

                {success && (
                  <div className="text-center">
                    <p className="text-green-400 text-sm bg-green-500/10 border border-green-500/20 rounded-lg p-3 backdrop-blur-sm">
                      ✅ Message sent successfully!
                    </p>
                  </div>
                )}
                {error && (
                  <div className="text-center">
                    <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg p-3 backdrop-blur-sm">
                      ❌ {error}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            opacity: 1;
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.4);
          }
          50% { 
            opacity: 0.7;
            box-shadow: 0 0 40px rgba(168, 85, 247, 0.8);
          }
        }
        
        .bg-size-200 { background-size: 200% 200%; }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Contact;