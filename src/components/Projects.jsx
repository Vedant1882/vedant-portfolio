import React from 'react';

export default function Projects() {
    return (
        <section
            id="projects"
            className="min-h-screen pt-32 pb-20 px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
        >
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-teal-600 dark:text-teal-400 mb-10">
                    Projects
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Project 1 */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition">
                        <h3 className="text-xl font-bold mb-2">Personal Portfolio Website</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                            A fully responsive and interactive portfolio website built using <strong>React</strong> and styled with <strong>Tailwind CSS</strong>. This project serves as both a personal showcase and a practical demonstration of key frontend development concepts including component-based architecture, routing, responsive design, and animations.
                            <br /><br />
                            It features smooth scrolling navigation, theme toggling (dark/light mode), animated loading screen, and a dynamic resume download section. Developed using React hooks like <strong>useState</strong> and <strong>useEffect</strong>, it handles state-driven interactions and user experience enhancements. Scrollspy integration dynamically updates active navigation based on scroll position.
                            <br /><br />
                            This project helped consolidate knowledge of React fundamentals, reusable UI components, custom hooks, responsive layouts, and real-world design patterns. It also includes performance considerations such as conditional rendering and code structure optimization.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition">
                        <h3 className="text-xl font-bold mb-2">Product Management System</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                            A full-stack web application built using <strong>Angular</strong> for the frontend and <strong>.NET Web API</strong> for the backend. This system enables users to manage a catalog of products with functionality to create, read, update, and delete (CRUD) product entries.
                            <br /><br />
                            It features advanced capabilities such as <strong>search, sorting, and filtering</strong> across large datasets, optimized for performance with efficient query handling on the backend. To ensure secure access, the app implements <strong>JWT-based authentication and authorization</strong>, controlling user permissions across modules.
                            <br /><br />
                            This project showcases practical experience in API integration, component-based UI design, token-based user management, and optimization strategies for scalable data-driven applications. It also reinforces strong understanding of Angular reactive forms, HTTP interceptors, and .NET middleware.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition">
                        <h3 className="text-xl font-bold mb-2">Cafeteria Management</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                            QR-based menu and ordering system for mobile users to streamline cafeteria operations. Built using Java and MySQL, this project enhanced real-time data handling, user sessions, and digital transformation in small-scale service environments.
                        </p>
                    </div>

                    {/* Project 2 */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition">
                        <h3 className="text-xl font-bold mb-2">Student Portal</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                            A registration and login system for managing student data. Built using Java and MySQL with secure authentication, session management, and form handling. This project reinforced backend development and JDBC concepts.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
