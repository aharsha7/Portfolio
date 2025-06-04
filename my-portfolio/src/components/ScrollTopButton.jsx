import React from "react";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const ScrollTopButton = ({ onClick }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 z-40"
  >
    <ArrowUp size={24} />
  </motion.button>
);

export default ScrollTopButton;