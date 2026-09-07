import {
  FaReact,
  FaCode,
  FaLaptopCode,
  FaDownload,
} from "react-icons/fa";

import profile from "../assets/profile.png";

function About() {
  return (
    <section
      id="about"
      className="about-section bg-slate-950 text-white py-24 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        <div className="about-heading">

          <p className="about-label">
            ABOUT ME
          </p>

          <h2 className="about-title">
            Turning Ideas Into
            <span> Modern Web Experiences</span>
          </h2>

          <p className="about-intro">
            I'm a frontend developer passionate about building clean,
            responsive and interactive web applications.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-16">

          <div className="about-visual">

            <div className="profile-glow"></div>

            <div className="profile-card">

              <div className="profile-image-wrapper">

                <img
                  src={profile}
                  alt="Amit Kashyap"
                  className="profile-image"
                />

              </div>

              <div className="profile-info">

                <div>
                  <h3>Amit Kashyap</h3>
                  <p>Frontend Developer</p>
                </div>

                <div className="profile-status">
                  <span></span>
                  Available
                </div>

              </div>

            </div>

            <div className="profile-tech react-tech">
              <FaReact />
            </div>

            <div className="profile-tech code-tech">
              <FaCode />
            </div>

            <div className="profile-tech laptop-tech">
              <FaLaptopCode />
            </div>

          </div>

          <div className="about-content">

            <p className="about-small-title">
              WHO I AM
            </p>

            <h2>
              Passionate about creating
              <span> useful digital experiences.</span>
            </h2>

            <p>
              I'm a frontend developer who enjoys creating fast,
              responsive and visually appealing web applications
              using React.js, JavaScript and Tailwind CSS.
            </p>

            <p>
              I focus on writing clean and reusable code, building
              component-based interfaces and creating experiences
              that work smoothly across different screen sizes.
            </p>

            <div className="about-stats">

              <div className="stat-card">
                <strong>1+</strong>
                <span>Years Learning</span>
              </div>

              <div className="stat-card">
                <strong>10+</strong>
                <span>Projects Built</span>
              </div>

              <div className="stat-card">
                <strong>100%</strong>
                <span>Responsive</span>
              </div>

              <div className="stat-card">
                <strong>React</strong>
                <span>Specialized</span>
              </div>

            </div>

            <a
              href="/Amit_Kashyap_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button"
            >
              <FaDownload />
              View Resume
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;