import { Code, LayoutDashboard, Database, Settings } from 'lucide-react';

const skills = [
  {
    category: 'Programming Languages',
    icon: <Code className="w-5 h-5 mr-2 text-teal-500 dark:text-teal-400" />,
    items: ['JavaScript', 'Java', 'SQL', 'C#', 'HTML', 'CSS'],
  },
  {
    category: 'Frontend',
    icon: <LayoutDashboard className="w-5 h-5 mr-2 text-teal-500 dark:text-teal-400" />,
    items: ['React', 'Angular', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    category: 'Backend & Databases',
    icon: <Database className="w-5 h-5 mr-2 text-teal-500 dark:text-teal-400" />,
    items: ['.NET', 'ASP.NET MVC', 'Entity Framework', 'SQL Server', 'MySQL'],
  },
  {
    category: 'Tools & Platforms',
    icon: <Settings className="w-5 h-5 mr-2 text-teal-500 dark:text-teal-400" />,
    items: ['Git', 'Postman', 'Firebase', 'Visual Studio', 'VS Code'],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-teal-600 dark:text-teal-400 mb-12 tracking-wide">
          Technical Skills
        </h2>

        <div className="space-y-10">
          {skills.map((section, index) => (
            <div key={index}>
              <h3 className="flex items-center text-xl font-semibold mb-4 text-teal-700 dark:text-teal-300">
                {section.icon}
                {section.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {section.items.map((item, i) => (
                  <span
                    key={i}
                    className="bg-white dark:bg-gray-800 border border-teal-300 dark:border-teal-600 text-sm text-gray-800 dark:text-white px-4 py-1.5 rounded-full hover:bg-teal-100 dark:hover:bg-teal-700 hover:scale-105 transition-all duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
