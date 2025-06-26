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

                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition">
                        <h3 className="text-xl font-bold mb-2">Password Generator</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                            A web-based tool developed using <strong>HTML, CSS, and PHP</strong> that generates secure, randomized passwords based on customizable user inputs. Users can define password length, include/exclude symbols, numbers, and uppercase letters to meet specific security criteria. This project was built for academic purposes and served as a hands-on introduction to basic backend scripting and form processing in PHP.
                            <br /><br />
                            It reinforced understanding of client-server interactions, input validation, and string manipulation while focusing on user-friendly UI/UX practices.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition">
                        <h3 className="text-xl font-bold mb-2">OpenCV Image Processing Tool</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                            A Python-based application using the <strong>OpenCV library</strong> to perform various image processing tasks such as grayscale conversion, blurring, edge detection (Canny), and face recognition using Haar cascades. Built as a learning project, it features a simple CLI and GUI interface (using `cv2.imshow`) for live webcam input and still image analysis.
                            <br /><br />
                            Through this project, I explored foundational concepts in computer vision, including filters, object detection, and contour mapping. It served as a practical exercise to understand real-time image manipulation and frame-by-frame analysis using Python.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
