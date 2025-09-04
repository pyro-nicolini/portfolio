import { Home, GraduationCap, FolderOpen, Mail, Rocket } from "lucide-react";
import Toggle from "./Toggle";

function Nav({ scrollToSection, darkMode, toggleTheme }) {
  return (
    <>
      <nav className="nav">
        <div className="nav-container">
          <Toggle toggleTheme={toggleTheme} darkMode={darkMode} />
          <button
            className="nav-item"
            onClick={() => scrollToSection("inicio")}
          >
            <Home />
          </button>
          <button
            className="nav-item"
            onClick={() => scrollToSection("estudios")}
            alt="Scroll to Estudios"
            aria-label="Scroll to Estudios"
          >
            <GraduationCap />
          </button>
          <button
            className="nav-item"
            onClick={() => scrollToSection("proyectos")}
            alt="Scroll to Proyectos"
            aria-label="Scroll to Proyectos"
          >
            <Rocket />
          </button>
          <button
            className="nav-item"
            onClick={() => scrollToSection("experiencia")}
            alt="Scroll to Experiencia"
            aria-label="Scroll to Experiencia"
          >
            <FolderOpen />
          </button>
          <button
            className="nav-item"
            onClick={() => scrollToSection("contacto")}
            alt="Scroll to Contacto"
            aria-label="Scroll to Contacto"
          >
            <Mail />
          </button>
        </div>

      </nav>
    </>
  );
}

export default Nav;
