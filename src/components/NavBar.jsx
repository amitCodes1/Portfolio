import { useState } from "react";

import {
  HiBars3,
  HiXMark,
} from "react-icons/hi2";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      <nav className="navbar-wrapper">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <a
            href="#home"
            className="navbar-logo"
          >
            Amit<span>.</span>
          </a>

          <ul className="hidden md:flex items-center gap-8">

            {navItems.map((item, index) => (
              <li
                key={item}
                className="navbar-item"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="navbar-link"
                >
                  <span>{item}</span>
                </a>
              </li>
            ))}

          </ul>

          <a
            href="#contact"
            className="hidden md:flex navbar-button"
          >
            Let's Talk
          </a>

          <button
            type="button"
            className="md:hidden navbar-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <HiXMark /> : <HiBars3 />}
          </button>

        </div>

        {menuOpen && (
          <div className="md:hidden mobile-navbar">

            <ul className="flex flex-col items-center py-6 gap-6">

              {navItems.map((item) => (
                <li key={item}>

                  <a
                    href={`#${item.toLowerCase()}`}
                    className="mobile-navbar-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>

                </li>
              ))}

              <li>
                <a
                  href="#contact"
                  className="mobile-contact-button"
                  onClick={() => setMenuOpen(false)}
                >
                  Let's Talk
                </a>
              </li>

            </ul>

          </div>
        )}

      </nav>

    </header>
  );
}

export default Navbar;