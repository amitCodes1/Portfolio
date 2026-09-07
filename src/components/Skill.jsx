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
      icon: <FaHtml5 />,
      color: "text-orange-500",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      color: "text-blue-500",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      color: "text-yellow-400",
    },
    {
      name: "React.js",
      icon: <FaReact />,
      color: "text-cyan-400",
    },
    {
      name: "Tailwind CSS",
      icon: <RiTailwindCssFill />,
      color: "text-sky-400",
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      color: "text-red-500",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      color: "text-white",
    },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-slate-950 text-white py-24 px-6 overflow-hidden"
    >
      <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl top-20 -left-40"></div>

      <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-10 -right-40"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center mb-20">

          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
            My Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Technologies I{" "}
            <span className="text-cyan-400">Use</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-7">
            Technologies and tools I use to build modern,
            responsive and interactive web applications.
          </p>

        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 perspective">

          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-3d-wrapper"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >

              <div className="skill-3d-card">

                <div className="skill-card-light"></div>

                <div className={`skill-3d-icon ${skill.color}`}>
                  {skill.icon}
                </div>

                <h3 className="text-xl font-semibold mt-6">
                  {skill.name}
                </h3>

                <div className="skill-line"></div>

                <div className="skill-card-number">
                  0{index + 1}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;