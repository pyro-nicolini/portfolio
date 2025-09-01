import { useState, useEffect, useRef } from "react";
import Nav from "./components/nav";
import Header from "./components/Header";
import Education from "./components/Education";
import Cert from "./components/Cert";
import Exp from "./components/exp";
import Proyectos from "./components/Proyectos";
import ContactMe from "./components/ContactMe";


const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const parallaxRef = useRef(null);

  // Efecto de carga
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Cargar tema guardado
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  // Toggle tema
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
  };

  // Smooth scroll
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };




  return (
    <div className={`portfolio ${darkMode ? "dark" : ""}`}>
      {/* Loader */}
      <div className={`loader ${!isLoading ? "hidden" : ""}`}>
        <div className="loader-content">
          <div className="spinner"></div>
          <h2>Cargando portafolio...</h2>
        </div>
      </div>

      {/* Hero Section */}
      <Header
        scrollY={scrollY}
        setScrollY={setScrollY}
        parallaxRef={parallaxRef}
        scrollToSection={scrollToSection}
      />

      <Nav
        darkMode={darkMode}
        toggleTheme={toggleTheme}
        scrollToSection={scrollToSection}
      />
      <Education />
      <Proyectos />
      <Exp />
      <Cert />

      <ContactMe />
    </div>
  );
};

export default App;
