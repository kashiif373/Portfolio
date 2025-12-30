import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="py-8 px-5 bg-gray-900 text-white text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <div className="max-w-4xl mx-auto">
        <p className="mb-4">&copy; 2024 Kashif. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/kashiif373" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/md-kashif-mukhtar-aa7331201/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            LinkedIn
          </a>
          <a href="https://www.instagram.com/kas_hiif" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            Instagram 
          </a>
          <a href="kashif.mukhtar950@gmail.com"  target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            Email
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
