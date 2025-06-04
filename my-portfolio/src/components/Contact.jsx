import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => (
  <section id="contact" className="py-20">
    <div className="max-w-4xl mx-auto px-4">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Let's Work Together
      </motion.h2>

      <div className="flex justify-center">
        <motion.div
          className="max-w-md w-full space-y-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm always open to new opportunities or a chat about tech. Let's build something amazing!
            </p>
          </div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="mailto:aharsha7na@gmail.com"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition"
            >
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-400">aharsha7na@gmail.com</p>
              </div>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/aharsha-vhardhan-s-/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition"
            >
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <Linkedin size={24} />
              </div>
              <div>
                <h4 className="font-semibold">LinkedIn</h4>
                <p className="text-gray-400">linkedin.com/in/aharsha-vhardhan</p>
              </div>
            </motion.a>

            <motion.a
              href="https://github.com/aharsha7"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition"
            >
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <Github size={24} />
              </div>
              <div>
                <h4 className="font-semibold">GitHub</h4>
                <p className="text-gray-400">github.com/aharsha7</p>
              </div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Contact;