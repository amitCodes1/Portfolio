import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { RiTailwindCssFill } from "react-icons/ri";

function Skills() {
  const skills = [
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-orange-500 text-5xl" />,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-blue-500 text-5xl" />,
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-400 text-5xl" />,
    },
    {
      name: "React",
      icon: <FaReact className="text-cyan-400 text-5xl" />,
    },
    {
      name: "Tailwind CSS",
      icon: <RiTailwindCssFill className="text-sky-400 text-5xl" />,
    },
    {
      name: "Git",
      icon: <FaGitAlt className="text-red-500 text-5xl" />,
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-white text-5xl" />,
    },
  ];

  return (
    <section id="skills" className="bg-slate-900 py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-widest">
            My Skills
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Technologies I Use
          </h2>

          <p className="text-gray-400 mt-4">
            Tools and technologies I use to build modern web applications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-8 text-center
              hover:-translate-y-3 hover:border-cyan-400 hover:shadow-[0_0_25px_#22d3ee]
              transition-all duration-300 cursor-pointer"
            >
              <div className="flex justify-center mb-5">
                {skill.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;