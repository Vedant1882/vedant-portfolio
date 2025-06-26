import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-teal-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Page Not Found</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded shadow transition"
      >
        Go Home
      </Link>
    </div>
  );
}
