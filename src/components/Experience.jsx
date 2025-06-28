import React from 'react';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'TatvaSoft — Associate Software Engineer',
      date: 'Ahmedabad | Jun 2023 – Present',
      points: [
        'Built and enhanced a mission-critical Australian enterprise platform using AngularJS, Angular and .NET Web API, delivering a responsive UI and robust backend services.',
        'Architected reusable, modular .NET RESTful APIs, ensuring separation of concerns and future extensibility.',
        'Optimized SQL Server queries and indexes, improving data retrieval performance and reducing load times.',
        'Streamlined CI/CD pipeline, automating builds, tests and deployments to accelerate releases and reduce effort.',
        'Led peer code-review sessions and championed clean-architecture principles, elevating code quality and maintainability across the team.',
        'Collaborated closely with QA engineers and business analysts to translate requirements into technical solutions, ensuring on-time delivery and alignment with stakeholder goals.'
      ],
    },
    {
      title: 'TatvaSoft — Intern',
      date: 'Jan 2023 – Jun 2023',
      points: [
        'Developed a project using ASP.NET MVC and SQL Server, enabling smooth build and deployment workflows.',
        'Implemented secure authentication and order-management modules, strengthening system reliability.',
        'Optimized stored procedures and database indexes, boosting performance and stability under peak load.'

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
