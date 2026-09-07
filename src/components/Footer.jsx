import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-slate-950 text-white border-t border-slate-800 py-12 px-6 overflow-hidden">

      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="footer-content">

          <div className="text-center">

            <div className="footer-logo">
              Amit <span>Kashyap</span>
            </div>

            <p className="text-gray-400 mt-3">
              Frontend Developer • React.js • JavaScript
            </p>

          </div>

          <div className="flex justify-center gap-4 mt-8">

            <a
              href="https://github.com/amitCodes1"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/amit_kashyap_429/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

          </div>

          <div className="flex justify-center mt-8">

            <a
              href="#home"
              className="back-to-top"
              aria-label="Back to top"
            >
              <FaArrowUp />
            </a>

          </div>

          <div className="border-t border-slate-800 mt-10 pt-6 text-center">

            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Amit Kashyap. All Rights Reserved.
            </p>

            <p className="text-gray-600 text-xs mt-2">
              Built with React.js & Tailwind CSS
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;