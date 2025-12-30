import React from "react";

export default function Education() {
  return (
    <section id="education" className="py-20 px-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
          Education
        </h2>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>
          <div className="ml-16 relative">
            <div className="absolute -left-12 w-6 h-6 bg-purple-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">P.G Diploma in Advance Computing </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-1">Cdac Bangalore</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">2025</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>
          <div className="ml-16 relative">
            <div className="absolute -left-12 w-6 h-6 bg-purple-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">B.E in Computer Science</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-1">RKDF University</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">2019 - 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
