import { useState } from "react";

import "./Header.css";

import Logo from "../../assets/logo/logo.jpeg";

const links = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className={`navbar ${isOpen ? "navbar_open" : ""}`}>
        <a
          href="#home"
          onClick={() => setIsOpen(false)}
        >
          <img src={Logo} alt="Logo" className="navbar__logo" />
        </a>

        <button
          type="button"
          className={`navbar__toggle ${isOpen ? "navbar__toggle_close" : ""}`}
          aria-expanded={isOpen}
          aria-controls="navbar__links"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((open) => !open)}
        ></button>

        <nav
          id="navbar__links"
          className={`navbar__links${isOpen ? " navbar__links_open" : ""}`}
        >
          {links.map((link) => (
            <a
              className="navbar__link"
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
