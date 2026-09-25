import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

function Projects() {
  const projects = [

     {
      title: "Job Portal — Full Stack Web Application",
      description:
        "A full-stack job portal web application that connects job seekers and recruiters. Job seekers can create profiles, search and filter jobs, save jobs, apply for jobs, upload resumes, and track applications. Recruiters can create, edit, and delete job listings, manage their posted jobs, view applicants, and update application statuses.",
      tech: ["React.js, TypeScript, Node.js, Express.js, MongoDB, Mongoose, Redux Toolkit, Axios, JWT, REST API, Tailwind CSS, React Router, React Hook Form, Multer, Vercel"],
      image: "https://picsum.photos/600/400?random=1",
      github: "https://github.com/amitCodes1/MyJobPortal",
      live: "https://my-job-portal-rue9.vercel.app/",
    },
    {
      title: "Employee Management System",
      description:
        "A modern employee management application with secure login, task tracking, and responsive user interface.",
      tech: ["React", "Tailwind", "JavaScript"],
      image: "https://picsum.photos/600/400?random=1",
      github: "https://github.com/amitCodes1/Employee-management-system",
      live: "https://employee-management-system-yeac.vercel.app/",
    },
    {
      title: "E-Commerce Website",
      description:
        "Responsive e-commerce web application built with React.js, Tailwind CSS, Axios and React Router.",
      tech: ["React", "API", "Axios"],
      image: "https://picsum.photos/600/400?random=2",
      github: "https://github.com/amitCodes1/E-Commerce-site",
      live: "https://e-commerce-site-6mj5.vercel.app/",
    },
    {
      title: "React API Gallery",
      description:
        "A responsive gallery application built with React.js and Tailwind CSS using API data.",
      tech: ["React", "Tailwind", "API"],
      image: "https://picsum.photos/600/400?random=3",
      github: "https://github.com/amitCodes1/react-api-gallery",
      live: "https://react-api-gallery-ego1.vercel.app/",
    },
    {
      title: "ShowVerse",
      description:
        "A movie discovery application built with React.js and React Router DOM.",
      tech: ["React.js", "React Router"],
      image: "https://picsum.photos/600/400?random=4",
      github: "https://github.com/amitCodes1/movie-Gallery",
      live: "https://movie-gallery-black.vercel.app/",
    },
    {
      title: "To-Do List",
      description:
        "A simple and responsive To-Do application built with JavaScript and LocalStorage.",
      tech: ["JavaScript", "LocalStorage", "HTML5"],
      image: "https://picsum.photos/600/400?random=5",
      github: "https://github.com/amitCodes1/To-do-List",
      live: "https://to-do-list-eight-virid-12.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="relative bg-slate-950 text-white py-24 px-6 overflow-hidden"
    >
      <div className="absolute top-20 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-20 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center max-w-2xl mx-auto mb-16">

          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
            My Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Featured{" "}
            <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="text-gray-400 mt-5 leading-7">
            A collection of projects that showcase my frontend,
            React.js and problem-solving skills.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 project-perspective">

          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-wrapper"
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >

              <div className="project-card">

                <div className="project-image-container">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />

                  <div className="project-image-overlay"></div>

                  <span className="project-number">
                    0{index + 1}
                  </span>

                </div>

                <div className="p-6">

                  <h3 className="text-2xl font-bold mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-7 mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">

                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 px-3 py-1 rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}

                  </div>

                  <div className="flex gap-3">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-github flex items-center gap-2 px-4 py-2.5 rounded-lg"
                    >
                      <FaGithub />
                      GitHub
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-live flex items-center gap-2 px-4 py-2.5 rounded-lg"
                    >
                      Live Demo
                      <FaExternalLinkAlt className="text-xs" />
                    </a>

                  </div>

                </div>

                <div className="project-card-glow"></div>

              </div>

            </div>
          ))}

        </div>

        <div className="flex justify-center mt-14">

          <a
            href="https://github.com/amitCodes1"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 border border-slate-700 hover:border-cyan-400 px-6 py-3 rounded-xl transition-all duration-300"
          >
            View More Projects
            <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Projects;