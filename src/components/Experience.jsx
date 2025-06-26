import React from 'react';

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-gray-100 dark:bg-black text-gray-900 dark:text-white py-20 px-6 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-teal-600 dark:text-teal-400 mb-10">
          Experience
        </h2>

        <div className="space-y-8">
          {/* Full-time */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              TatvaSoft — Associate Software Engineer
            </h3>
            <p className="text-sm text-teal-600 dark:text-teal-300">
              Ahmedabad | Jun 2023 – Present
            </p>
            <ul className="mt-3 text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1 text-sm leading-relaxed">
              <li>Worked on AngularJS/Angular, .NET Web API, SQL Server.</li>
              <li>Built scalable APIs & reusable frontend components.</li>
              <li>Enhanced CI/CD pipelines and optimized performance.</li>
              <li>Collaborated with QA and BAs to ensure timely delivery.</li>
              <li>Improved SQL performance by optimizing queries and applying indexing strategies.</li>
              <li>Contributed to a case management system in the health & injury domain.</li>
            </ul>
          </div>

          {/* Internship */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              TatvaSoft — Intern
            </h3>
            <p className="text-sm text-teal-600 dark:text-teal-300">
              Jan 2023 – Jun 2023
            </p>
            <ul className="mt-3 text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1 text-sm leading-relaxed">
              <li>Developed backend modules using ASP.NET MVC for enterprise apps.</li>
              <li>Optimized stored procedures & backend logic for performance.</li>
              <li>Worked with MVC routing, controllers, model binding & Razor views.</li>
              <li>Learned .NET concepts: DI, validation, session management.</li>
              <li>Collaborated with seniors to understand SDLC & QA processes.</li>
              <li>Enhanced debugging skills and worked with SQL Server & LINQ.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
