import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Employee Management System",
      description:
        "A React application to manage employees with CRUD operations and LocalStorage.",
      tech: ["React", "Tailwind", "JavaScript"],
      image: "https://picsum.photos/600/400?random=1",
      github: "#",
      live: "#",
    },
    {
      title: "Weather App",
      description:
        "Weather application using a public API with real-time weather updates.",
      tech: ["React", "API", "CSS"],
      image: "https://picsum.photos/600/400?random=2",
      github: "#",
      live: "#",
    },
    {
      title: "Todo App",
      description:
        "A clean task management app with add, edit, delete, and complete features.",
      tech: ["React", "Tailwind"],
      image: "https://picsum.photos/600/400?random=3",
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-widest">
            My Projects
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-4">
            A few projects that showcase my React and frontend development skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg hover:bg-slate-700 transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    className="flex items-center gap-2 bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600 transition"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;