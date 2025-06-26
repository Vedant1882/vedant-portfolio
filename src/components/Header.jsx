// Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef();

  const navLinks = (
    <>
      <a href="#about" className="hover:text-teal-400">About</a>
      <a href="#experience" className="hover:text-teal-400">Experience</a>
      <a href="#projects" className="hover:text-teal-400">Projects</a>
      <a href="#contact" className="hover:text-teal-400">Contact</a>
    </>
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="bg-gray-900 text-white fixed top-0 w-full z-50 shadow-lg">
      <div className="max-w-6xl mx-auto grid grid-cols-3 items-center px-4 py-4">
        {/* Left: Download Button */}
        <div className="flex justify-start">
          <a
            href="/Vedant_S_Shah_Resume.pdf"
            download
            className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded text-sm shadow-md transition"
          >
            📄 Resume
          </a>
        </div>

        {/* Right: Hamburger Menu (mobile) */}
        <div className="flex justify-end md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex justify-end col-span-1 space-x-6 text-sm font-medium">
          {navLinks}
        </nav>
      </div>

      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-2/3 sm:w-1/2 bg-gray-800 shadow-xl z-50 p-6 transition-transform transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end">
          <button onClick={() => setIsOpen(false)}>
            <X size={28} className="text-white" />
          </button>
        </div>
        <nav className="flex flex-col space-y-6 mt-10 text-lg text-white" onClick={() => setIsOpen(false)}>
          {navLinks}
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}