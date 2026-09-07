import {
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-slate-900 text-white py-24 px-6 overflow-hidden"
    >
      <div className="absolute top-10 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center max-w-2xl mx-auto mb-16">

          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
            Contact Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Let's Work{" "}
            <span className="text-cyan-400">Together</span>
          </h2>

          <p className="text-gray-400 mt-5 leading-7">
            Have a project, opportunity or just want to connect?
            Feel free to reach out.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div className="contact-left">

            <p className="text-cyan-400 text-sm uppercase tracking-widest mb-3">
              Get In Touch
            </p>

            <h3 className="text-3xl md:text-4xl font-bold mb-5">
              Let's build something{" "}
              <span className="text-cyan-400">great.</span>
            </h3>

            <p className="text-gray-400 leading-8 mb-8 max-w-xl">
              I'm currently looking for internship and frontend
              developer opportunities. If you have an interesting
              project or opportunity, I'd love to hear from you.
            </p>

            <div className="space-y-4">

              <a
                href="mailto:akashyap1592@gmail.com"
                className="contact-info-card"
              >
                <div className="contact-icon text-cyan-400">
                  <FaEnvelope />
                </div>

                <div>
                  <span>Email</span>
                  <p>akashyap1592@gmail.com</p>
                </div>
              </a>

              <a
                href="https://github.com/amitCodes1"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-card"
              >
                <div className="contact-icon text-white">
                  <FaGithub />
                </div>

                <div>
                  <span>GitHub</span>
                  <p>github.com/amitCodes1</p>
                </div>
              </a>

              <a
                href="https://www.naukri.com/mnjuser/profile"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-card"
              >
                <div className="contact-icon">
                  <span className="text-sm font-bold">N</span>
                </div>

                <div>
                  <span>Naukri</span>
                  <p>My Naukri Profile</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/amit_kashyap_429/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-card"
              >
                <div className="contact-icon text-pink-500">
                  <FaInstagram />
                </div>

                <div>
                  <span>Instagram</span>
                  <p>@amit_kashyap_429</p>
                </div>
              </a>

            </div>

          </div>

          <div className="contact-form-wrapper">

            <form className="contact-form">

              <div className="contact-form-glow"></div>

              <div className="relative z-10">

                <div className="flex items-center gap-3 mb-7">

                  <div className="w-10 h-10 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400">
                    <FaPaperPlane />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">
                      Send a Message
                    </h3>

                    <p className="text-gray-500 text-sm">
                      I'll get back to you soon.
                    </p>
                  </div>

                </div>

                <div className="space-y-5">

                  <div>
                    <label className="contact-label">
                      Your Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="contact-input"
                    />
                  </div>

                  <div>
                    <label className="contact-label">
                      Your Email
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="contact-input"
                    />
                  </div>

                  <div>
                    <label className="contact-label">
                      Your Message
                    </label>

                    <textarea
                      rows="5"
                      placeholder="Write your message..."
                      className="contact-input resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="contact-submit"
                  >
                    Send Message
                    <FaPaperPlane />
                  </button>

                </div>

              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;