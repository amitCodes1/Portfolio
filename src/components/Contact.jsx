import {
  FaGithub,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="bg-slate-900 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-widest">
            Contact Me
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Let's Work Together
          </h2>

          <p className="text-gray-400 mt-4">
            Have a project or an opportunity? Feel free to contact me.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <div>

            <h3 className="text-3xl font-bold mb-5">
              Get In Touch
            </h3>

            <p className="text-gray-400 leading-8 mb-8">
              I'm currently looking for internship and frontend developer
              opportunities. Feel free to connect with me.
            </p>

            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400 text-2xl" />
                <span>akashyap1592@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <FaGithub className="text-2xl" />
                <a href="https://github.com/amitCodes1" className="hover:text-cyan-400">
                  GitHub
                </a>
              </div>

              <div className="flex items-center gap-4">
                <a href="https://www.naukri.com/mnjuser/profile" >
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJOB0xKwF0RyvOWxHS9Rc2TsAPweCqHnn5tww_FVO71g&s=10" alt="" className="h-7 w-7 rounded" /> Naukri
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaInstagram className="text-pink-500 text-2xl" />
                <a href="#" className="hover:text-cyan-400">
                  Instagram
                </a>
              </div>

            </div>

          </div>

          {/* Right Side */}
          <form className="bg-slate-800 p-8 rounded-2xl border border-slate-700">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-slate-700 outline-none mb-5"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-slate-700 outline-none mb-5"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full p-4 rounded-lg bg-slate-700 outline-none mb-5"
            ></textarea>

            <button
              className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-lg font-semibold transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;