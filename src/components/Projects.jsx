import React from 'react';

export default function Projects() {
    const projects = [
        {
            title: 'Personal Portfolio Website',
            description: `
        A fully responsive and interactive portfolio built using React and Tailwind CSS. 
        It features dark/light mode toggle, smooth scrolling, animated sections, and a scrollspy header. 
        Built with reusable components and custom hooks, showcasing frontend and UX skills.`,
            badges: ['React', 'Tailwind CSS', 'Scrollspy', 'Dark Mode'],
        },
        {
            title: 'Product Management System',
            description: `
        A full-stack web app using Angular (frontend) and .NET Web API (backend) with JWT-based auth. 
        Implements CRUD, search, sort, filter, and optimized data handling. Designed for scalable, secure enterprise product management.`,
            badges: ['Angular', '.NET Web API', 'JWT', 'SQL Server'],
        },
        {
            title: 'Cafeteria Management',
            description: `
        QR-based ordering system for mobile users. Built using Java and MySQL to handle user sessions, live order processing, and digital transformation in food services.`,
            badges: ['Java', 'MySQL', 'QR Scanner'],
        },
        {
            title: 'Student Portal',
            description: `
        Registration and login system with authentication and data handling using Java and MySQL. 
        Covers core backend logic, JDBC, session handling, and secure form validation.`,
            badges: ['Java', 'MySQL', 'JDBC'],
        },
        {
            title: 'Password Generator',
            description: `
        A PHP-based random password generator that supports symbol, number, and length configurations. 
        Created for academic learning of string manipulation, form handling, and UI with HTML/CSS.`,
            badges: ['PHP', 'HTML', 'CSS'],
        },
        {
            title: 'OpenCV Image Processing Tool',
            description: `
        Python-based app using OpenCV to perform grayscale conversion, blurring, edge detection, and face recognition (Haar Cascades). 
        Designed with CLI and live webcam support for real-time image manipulation.`,
            badges: ['Python', 'OpenCV', 'Face Detection'],
        },
    ];

    return (
        <section
            id="projects"
            className="min-h-screen pt-32 pb-20 px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
        >
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-teal-600 dark:text-teal-400 mb-12">
                    Projects
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-2 hover:border-teal-500"
                        >
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                                {project.description.trim()}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.badges.map((badge, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-xs font-semibold bg-teal-100 text-teal-800 dark:bg-teal-700 dark:text-white rounded-full"
                                    >
                                        {badge}
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
