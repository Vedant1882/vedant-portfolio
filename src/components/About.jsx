// About.jsx
import React from 'react';

export default function About() {
    return (
        <section id="about" className="pt-32 bg-gradient-to-b from-gray-900 to-black text-white px-6 py-20">
            <div className="max-w-4xl mx-auto text-center">

                {/* Profile Image */}
                <div className="w-56 h-56 sm:w-64 sm:h-64 mx-auto rounded-full border-4 border-teal-500 shadow-xl mb-6 overflow-hidden">
                    <img
                        src="/vedant.jpg"
                        alt="Vedant S Shah"
                        className="w-full h-full object-cover object-top translate-y-0"
                    />
                </div>

                {/* Name + Intro */}
                <h2 className="text-4xl font-extrabold mb-2 text-teal-400">Vedant S Shah</h2>
                <p className="text-gray-300 text-lg mb-4">
                    Full Stack Developer | Angular • React • .NET • SQL
                </p>
                <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    I’m a passionate developer who enjoys building scalable web apps, writing clean code,
                    and delivering high-performance solutions for real-world business needs.
                </p>

                {/* Optional Resume Button */}
                <div className="mt-8">
                    <a
                        href="/Vedant_S_Shah_Resume.pdf"
                        download
                        className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded shadow transition"
                    >
                        📄 Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}