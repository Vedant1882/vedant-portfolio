import React from 'react';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'TatvaSoft — Associate Software Engineer',
      date: 'Ahmedabad | Jun 2023 – Present',
      points: [
        'Developed reusable Angular components and scalable .NET Web APIs.',
        'Enhanced SQL Server performance using query optimization and indexing.',
        'Improved CI/CD pipelines and collaborated with QA and BAs.',
        'Built modules for a case management system in the health domain.',
      ],
    },
    {
      title: 'TatvaSoft — Intern',
      date: 'Jan 2023 – Jun 2023',
      points: [
        'Created backend modules with ASP.NET MVC and LINQ.',
        'Worked with Razor Views and session handling.',
        'Optimized stored procedures for high-traffic data operations.',
        'Learned SDLC practices and improved debugging efficiency.',
      ],
    },
  ];

  return (
    <section id="experience" className="bg-white dark:bg-black text-black dark:text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-teal-500 mb-12">Experience</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg hover:ring hover:ring-teal-300/40 transition transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold mb-1 flex items-center">
                <Briefcase className="w-5 h-5 mr-2 text-teal-500" />
                {exp.title}
              </h3>
              <p className="text-sm text-teal-400 mb-3">{exp.date}</p>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
