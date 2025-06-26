import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import Scrollspy from 'react-scrollspy';
import useDarkMode from '../hooks/useDarkMode';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef();
  const [darkMode, setDarkMode] = useDarkMode();
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skill' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = (
    <Scrollspy
      items={navItems.map(item => item.id)}
      currentClassName="text-teal-400"
      offset={-100}
      className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6"
    >
      {navItems.map(item => (
        <li key={item.id}>
          <a href={`#${item.id}`} className="hover:text-teal-400 transition">
            {item.label}
          </a>
        </li>
      ))}
    </Scrollspy>
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
    };
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg py-2' : 'py-4'
      } bg-white dark:bg-gray-900 text-black dark:text-white`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 relative">
        {/* Left: Theme Toggle */}
        <div className="flex items-center z-10">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-300" />
            ) : (
              <Moon className="w-5 h-5 text-gray-900" />
            )}
          </button>
        </div>

        {/* Center: Resume Button - normal & icon */}
        <div className="absolute left-1/2 transform -translate-x-1/2 z-0">
          {/* Desktop */}
          <a
            href="/Vedant_S_Shah_Resume.pdf"
            download
            className="hidden sm:inline-block bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold px-7 py-2.5 rounded-full shadow-md transition-all"
          >
            📄 Download Resume
          </a>

          {/* Mobile (icon) */}
          <a
            href="/Vedant_S_Shah_Resume.pdf"
            download
            className="inline-block sm:hidden bg-gradient-to-r from-teal-500 to-cyan-500 p-2 rounded-full shadow-md transition hover:scale-110"
            title="Download Resume"
          >
            📄
          </a>
        </div>

        {/* Right: Nav (desktop) + Hamburger (mobile) */}
        <div className="flex items-center space-x-4 z-10">
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">{navLinks}</nav>

          {/* Mobile Hamburger */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-2/3 sm:w-1/2 bg-gray-100 dark:bg-gray-800 shadow-xl z-50 p-6 transition-transform transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end">
          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>
        <nav
          className="flex flex-col space-y-6 mt-10 text-lg"
          onClick={() => setIsOpen(false)}
        >
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="hover:text-teal-500">
              {item.label}
            </a>
          ))}
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
