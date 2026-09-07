import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaReact,
  FaJsSquare,
  FaCode,
} from "react-icons/fa";

function HeroSection() {
  return (
    <section
      id="home"
      className="hero-section min-h-screen bg-slate-950 text-white flex items-center overflow-hidden"
    >
      <div className="hero-background"></div>

      <div className="max-w-7xl mx-auto w-full px-6 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="hero-text">

            <div className="availability-badge">
              <span></span>
              Available for Frontend Opportunities
            </div>

            <p className="developer-label">
              FRONTEND DEVELOPER
            </p>

            <h1 className="hero-title">
              Hi, I'm
              <br />
              <span>Amit Kashyap</span>
            </h1>

            <p className="hero-description">
              I build modern, responsive and interactive web applications
              using React.js, JavaScript and Tailwind CSS with a strong
              focus on clean UI and user experience.
            </p>

            <div className="hero-buttons">

              <a
                href="#projects"
                className="primary-button"
              >
                View Projects
                <FaArrowRight />
              </a>

              <a
                href="#contact"
                className="secondary-button"
              >
                Contact Me
              </a>

            </div>

            <div className="hero-social">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>

              <div className="social-line"></div>

              <div>
                <strong>React.js</strong>
                <small>Primary Technology</small>
              </div>

            </div>

          </div>

          <div className="hero-visual">

            <div className="glow-circle"></div>

            <div className="floating-icon react-icon">
              <FaReact />
            </div>

            <div className="floating-icon js-icon">
              <FaJsSquare />
            </div>

            <div className="floating-icon code-icon">
              <FaCode />
            </div>

            <div className="hero-card-wrapper">

              <div className="hero-card">

                <div className="card-header">

                  <div className="window-buttons">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <span className="file-name">
                    developer.js
                  </span>

                </div>

                <div className="code-content">

                  <p>
                    <span className="purple">const</span>{" "}
                    <span className="blue">developer</span> = {"{"}
                  </p>

                  <p className="indent">
                    <span className="green">name</span>:{" "}
                    <span className="orange">
                      "Amit Kashyap"
                    </span>,
                  </p>

                  <p className="indent">
                    <span className="green">role</span>:{" "}
                    <span className="orange">
                      "Frontend Developer"
                    </span>,
                  </p>

                  <p className="indent">
                    <span className="green">skills</span>: [
                  </p>

                  <p className="indent-more">
                    <span className="orange">
                      "React.js"
                    </span>,
                  </p>

                  <p className="indent-more">
                    <span className="orange">
                      "JavaScript"
                    </span>,
                  </p>

                  <p className="indent-more">
                    <span className="orange">
                      "Tailwind CSS"
                    </span>
                  </p>

                  <p className="indent">],</p>

                  <p className="indent">
                    <span className="green">
                      available
                    </span>
                    :{" "}
                    <span className="blue">
                      true
                    </span>
                  </p>

                  <p>{"};"}</p>

                </div>

                <div className="terminal">

                  <span className="terminal-arrow">
                    $
                  </span>

                  <span>
                    npm run build
                  </span>

                  <span className="typing-cursor"></span>

                </div>

              </div>

            </div>

            <div className="currently-building">

              <span className="building-dot"></span>

              <div>
                <small>Currently Building</small>
                <p>Modern React Applications</p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;