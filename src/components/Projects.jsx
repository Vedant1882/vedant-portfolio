import React from 'react';

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-teal-400 mb-10">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition">
            <h3 className="text-xl font-bold text-white mb-2">Cafeteria Management</h3>
            <p className="text-gray-300">
              QR-based menu and ordering system for mobile phones. Users scan QR codes, view items, and place orders digitally.
            </p>
            <p className="text-sm text-teal-300 mt-2 italic">Built with: Java, MySQL</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition">
            <h3 className="text-xl font-bold text-white mb-2">Student Portal</h3>
            <p className="text-gray-300">
              Registration and login system for storing students' personal and academic data. Created as a self-learning project.
            </p>
            <p className="text-sm text-teal-300 mt-2 italic">Built with: Java, MySQL</p>
          </div>
        </div>
      </div>
    </section>
  );
}