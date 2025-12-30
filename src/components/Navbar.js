import React from "react";

export default function Navbar({ darkMode, toggleDarkMode }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center p-5 bg-white dark:bg-gray-900 shadow-lg backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">MD KASHIF MUKHTAR </h2>
      <div className="flex items-center space-x-6">
        <button
          onClick={() => scrollToSection("about")}
          className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("skills")}
          className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Skills
        </button>
        <button
          onClick={() => scrollToSection("education")}
          className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Education
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Contact
        </button>
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center gap-2"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </nav>
  );
}
