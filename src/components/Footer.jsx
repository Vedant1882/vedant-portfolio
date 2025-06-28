import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-[#0a0f1c] text-gray-700 dark:text-gray-300 text-center py-4">
      <p className="text-sm">
        © {new Date().getFullYear()} Vedant S. Shah • Built with React • Hosted on Vercel
      </p>
    </footer>
  );
}
