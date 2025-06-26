import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-teal-400 mb-10">Experience</h2>

        <div className="space-y-8">
          <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-white">TatvaSoft — Associate Software Engineer</h3>
            <p className="text-sm text-teal-300">Ahmedabad | Jun 2023 – Present</p>
            <ul className="mt-3 text-gray-300 list-disc list-inside space-y-1">
              <li>Worked on AngularJS/Angular, .NET Web API, SQL Server.</li>
              <li>Built scalable APIs & reusable frontend components.</li>
              <li>Enhanced CI/CD pipelines and optimized performance.</li>
              <li>Collaborated with QA and BAs to ensure timely delivery.</li>
            </ul>
          </div>

          <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-white">TatvaSoft — Intern</h3>
            <p className="text-sm text-teal-300">Jan 2023 – Jun 2023</p>
            <ul className="mt-3 text-gray-300 list-disc list-inside space-y-1">
              <li>Developed backend modules using ASP.NET MVC.</li>
              <li>Optimized stored procedures for high traffic handling.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
