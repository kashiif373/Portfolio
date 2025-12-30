import React from "react";

export default function Projects() {
  const projects = [
    { name: "Portfolio Website", desc: "A personal portfolio in React with Tailwind CSS and Framer Motion animations", link: "#" },
    { name: "Food Online Delivery System", desc: "React + Node.js + MongoDB full stack app with payment integration", link: "https://food-online-delivery-system-frontend.onrender.com/" },
    { name: "Task Manager", desc: "MERN stack application for managing daily tasks with real-time updates", link: "#" },
    { name: "Travelling and Tourism", desc: " MERN  app with API integration for Travelling ", link: "https://github.com/kashiif373/Travelling_and_Tourism" },
    { name: "Blog Platform", desc: "Full-stack blogging platform with user authentication and rich text editor", link: "#" },
    { name: "Student Management System ", desc: "Build in Springboot where we manage all Students Activities ", link: "https://github.com/kashiif373/Student-Management" },
  ];

  return (
    <section id="projects" className="py-20 px-5 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white relative z-10">{p.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 relative z-10 leading-relaxed">{p.desc}</p>
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 relative z-10">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
