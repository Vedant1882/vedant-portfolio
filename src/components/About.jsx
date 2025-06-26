import { Typewriter } from 'react-simple-typewriter';

export default function About() {
  return (
    <section
      id="about"
      className="pt-32 px-6 py-20 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-black text-black dark:text-white"
    >
      <div className="max-w-4xl mx-auto text-center">

        {/* Profile Image */}
        <div className="w-56 h-56 sm:w-64 sm:h-64 mx-auto rounded-full border-4 border-teal-500 shadow-lg dark:shadow-teal-700/40 mb-6 overflow-hidden hover:scale-105 transition-transform duration-300">
          <img
            src="/vedant.jpg"
            alt="Vedant S Shah"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Name + Title */}
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-3 text-teal-500 dark:text-teal-400">
          Vedant S Shah
        </h2>
        <p className="text-teal-400 text-lg font-medium mb-4">
          <Typewriter
            words={['I build sleek and scalable web apps.', 'Turning ideas into code.', 'Clean. Fast. Modern.']}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-lg font-medium mb-6 tracking-wide">
          Full Stack Developer | Angular • React • .NET • SQL
        </p>

        {/* Bio */}
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed text-base sm:text-lg">
          I’m a passionate developer who thrives on building scalable, efficient web applications.
          I focus on writing clean, maintainable code and improving backend performance.
          Whether in a team or solo, I love solving real-world problems with smart, modern solutions.
        </p>
      </div>
    </section>
  );
}
