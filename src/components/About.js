import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 px-5 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          About Me
        </motion.h2>
        <motion.img
          src="/DSC_0377.JPG"
          alt="Profile Picture"
          className="w-44 h-44 rounded-full object-cover mb-8 mx-auto shadow-lg hover:scale-105 transition-transform duration-300"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
        <motion.p
          className="text-xl leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Hi, I'm <strong className="text-blue-600 dark:text-blue-400">Kashif</strong>. I'm a passionate Full Stack Developer who
          loves building web applications and exploring new technologies. I enjoy creating innovative solutions and continuously learning in the ever-evolving tech landscape.
        </motion.p>
      </div>
    </motion.section>
  );
}
