import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = (
    <>
      <a href="#about" className="hover:text-teal-400">About</a>
      <a href="#experience" className="hover:text-teal-400">Experience</a>
      <a href="#projects" className="hover:text-teal-400">Projects</a>
      <a href="#contact" className="hover:text-teal-400">Contact</a>
    </>
  );

  return (
    <header className="bg-gray-900 text-white fixed top-0 w-full z-50 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">
        <h1 className="text-2xl font-bold text-teal-400">Vedant S Shah</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          {navLinks}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 sm:w-1/2 bg-gray-800 shadow-xl z-50 p-6 transition-transform transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end">
          <button onClick={() => setIsOpen(false)}>
            <X size={28} className="text-white" />
          </button>
        </div>
        <nav className="flex flex-col space-y-6 mt-10 text-lg text-white">
          {navLinks}
        </nav>
      </div>
    </header>
  );
}
