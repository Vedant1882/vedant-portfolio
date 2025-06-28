import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-indigo-50 dark:bg-indigo-900 text-gray-900 dark:text-white py-20 px-6 transition-colors duration-300"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-lg mx-auto text-center"
      >

        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-indigo-700 dark:text-teal-300">
            Get In Touch
          </h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Have a project or role in mind? Drop a message below!
          </p>

          <form
            action="https://formspree.io/f/mnqeylky"
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full p-3 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-400 dark:focus:ring-teal-400 outline-none transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full p-3 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-400 dark:focus:ring-teal-400 outline-none transition"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              required
              className="w-full p-3 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-400 dark:focus:ring-teal-400 outline-none transition"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-indigo-600 dark:bg-teal-600 hover:bg-indigo-500 dark:hover:bg-teal-500 text-white font-bold py-3 rounded shadow-md hover:shadow-lg transition"
            >
              Send Message
            </button>
          </form>

          <div className="mt-8 text-sm text-gray-800 dark:text-gray-300 space-y-1">
            <p>
              Email:{' '}
              <a
                href="mailto:shahvedant02@gmail.com"
                className="text-indigo-700 dark:text-teal-300 hover:underline"
              >
                shahvedant02@gmail.com
              </a>
            </p>
            <p>
              LinkedIn:{' '}
              <a
                href="https://linkedin.com/in/vedant-shah18"
                className="text-indigo-700 dark:text-teal-300 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/vedant-shah18
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
