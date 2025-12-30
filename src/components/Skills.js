import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = ["React", "JavaScript", "Node.js", "MongoDB", "CSS", "Git", "Springboot", "Express.js", "Java", "C++", "C#", "Python",  "MySQL", "Servlet",  "RestApi", "Tailwind CSS"];

  return (
    <motion.section
      id="skills"
      className="py-20 px-5 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Skills
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
