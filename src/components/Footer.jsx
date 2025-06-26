import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-6 mt-20">
      © {new Date().getFullYear()} Vedant S. Shah • Built with React • Hosted on Vercel
    </footer>
  );
}