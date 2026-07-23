import profile from "../assets/profile.png"
import resume from "../assets/Amit_Kashyap_Resume.pdf";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* Left */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 rounded-3xl bg-cyan-500 rotate-6"></div>

            <img
              src={profile}
              alt="Amit Kashyap"
              className="w-80 h-80 object-cover rounded-3xl absolute top-0 left-0 -rotate-6 border-4 border-white shadow-2xl"
            />
          </div>
        </div>

        {/* Right */}
        <div>

          <p className="text-cyan-400 uppercase tracking-widest mb-2">
            About Me
          </p>

          <h2 className="text-5xl font-bold leading-tight mb-6">
            Passionate React Developer <br />
            Building Modern Websites
          </h2>

          <p className="text-gray-400 text-lg leading-8 mb-6">
            I'm a frontend developer who enjoys creating fast, responsive,
            and visually appealing web applications using React.js,
            JavaScript, and Tailwind CSS.
          </p>

          <p className="text-gray-400 leading-8 mb-8">
            My focus is writing clean code, building reusable components,
            and delivering smooth user experiences across all devices.
          </p>

          <div className="grid grid-cols-2 gap-5 mb-8">

            <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
              <h3 className="text-cyan-400 text-3xl font-bold">1+</h3>
              <p className="text-gray-400">Years Learning</p>
            </div>

            <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
              <h3 className="text-cyan-400 text-3xl font-bold">10+</h3>
              <p className="text-gray-400">Projects</p>
            </div>

            <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
              <h3 className="text-cyan-400 text-3xl font-bold">100%</h3>
              <p className="text-gray-400">Responsive</p>
            </div>

            <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
              <h3 className="text-cyan-400 text-3xl font-bold">React</h3>
              <p className="text-gray-400">Specialized</p>
            </div>

          </div>
          <a
            href="/Amit_Kashyap_Resume.pdf"
            download
            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold transition"
          >
            Download Resume
          </a>
        </div>

      </div>
    </section>
  );
}

export default About;