import React from 'react';

export default function Contact() {
    return (
        <section id="contact" className="bg-gradient-to-r from-purple-800 to-indigo-800 text-white py-20 px-6">
            <div className="max-w-lg mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
                <p className="mb-6">Have a project or role in mind? Drop a message below!</p>

                <form action="https://formspree.io/f/xjkrpdzk" method="POST" className="space-y-4">
                    <input type="text" name="name" placeholder="Name" required className="w-full p-3 rounded bg-white text-gray-900" />
                    <input type="email" name="email" placeholder="Email" required className="w-full p-3 rounded bg-white text-gray-900" />
                    <textarea name="message" rows="4" placeholder="Message" required className="w-full p-3 rounded bg-white text-gray-900"></textarea>
                    <button type="submit" className="w-full bg-teal-500 hover:bg-teal-400 text-white font-bold py-3 rounded shadow-md hover:shadow-lg transition">
                        Send Message
                    </button>
                </form>

                <div className="mt-8">
                    <p>Email: <a href="mailto:shahvedant02@gmail.com" className="text-teal-300 hover:underline">shahvedant02@gmail.com</a></p>
                    <p>LinkedIn: <a href="https://linkedin.com/in/vedant-shah18" className="text-teal-300 hover:underline" target="_blank" rel="noreferrer">linkedin.com/in/vedant-shah18</a></p>
                </div>
            </div>
        </section>
    );
}
