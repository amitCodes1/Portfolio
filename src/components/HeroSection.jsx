import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>

          <span className="text-cyan-400 font-semibold tracking-widest">
            FRONTEND DEVELOPER
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold mt-4 leading-tight">
            Hi, I'm
            <br />
            <span className="text-cyan-400">Amit Kashyap</span>
          </h1>

          <p className="mt-8 text-gray-400 text-lg leading-8 max-w-xl">
            I create modern, responsive and interactive web applications
            using React.js, JavaScript and Tailwind CSS with clean code
            and beautiful user interfaces.
          </p>

          <div className="flex gap-5 mt-10">

            <a
              href="#projects"
              className="bg-cyan-500 hover:bg-cyan-600 px-7 py-4 rounded-xl font-semibold flex items-center gap-2 transition"
            >
              View Projects
              <FaArrowRight />
            </a>

            <a
              href="#contact"
              className="border border-cyan-500 px-7 py-4 rounded-xl hover:bg-cyan-500 transition"
            >
              Contact
            </a>

          </div>

          <div className="flex gap-6 mt-10 text-3xl">

            <FaGithub className="hover:text-cyan-400 cursor-pointer duration-300" />

            <FaLinkedin className="hover:text-cyan-400 cursor-pointer duration-300" />

          </div>

        </div>

        {/* Right Side */}

        <div className="flex justify-center">

          <div className="bg-slate-900 rounded-3xl border border-slate-700 p-6 shadow-2xl w-full max-w-md">

            <div className="flex gap-2 mb-5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            <pre className="text-sm text-gray-300 overflow-x-auto">
{`const developer = {
  name: "Amit Kashyap",
  role: "React Developer",
  skills: [
    "React",
    "JavaScript",
    "Tailwind",
    "HTML",
    "CSS"
  ],
  available: true
};`}
            </pre>

          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroSection;