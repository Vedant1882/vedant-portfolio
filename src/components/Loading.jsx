import React from 'react';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-gray-900 text-white flex items-center justify-center text-3xl font-bold z-[9999] animate-fade-out">
      <span className="animate-pulse text-teal-400">Loading Portfolio...</span>
    </div>
  );
}
