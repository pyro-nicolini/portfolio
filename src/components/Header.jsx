import { useEffect } from "react";
import perfil from "../assets/img/perfil.png";

function Header({ scrollY, setScrollY, parallaxRef, scrollToSection }) {
  // Efecto parallax
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="hero" id="inicio">
      <div className="parallax-bg"></div>

      <div className="hero-content">
        <div className="perfil-orbit-container">
          <img src={perfil} alt="Perfil" className="perfil" />
          <img className="luna react" src="https://cdn.worldvectorlogo.com/logos/react-1.svg" alt="React" title="React" style={{ width: "2rem", height: "2rem" }} />
          <img className="luna postgres" src="https://cdn.worldvectorlogo.com/logos/postgresql.svg" alt="PostgreSQL" title="PostgreSQL" style={{ width: "2rem", height: "2rem" }} />
          <img className="luna nodejs" src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" alt="Node.js" title="Node.js" style={{ width: "2rem", height: "2rem" }} />
          <img className="luna express" src="https://cdn.worldvectorlogo.com/logos/expressjs.svg" alt="Express.js" title="Express.js" style={{ width: "2rem", height: "2rem" }} />
        </div>
        <h1 className="text-shadow">Piero Nicolini</h1>
        <p>Desarrollador Full Stack & Diseñador UX/UI</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", margin: "1rem 0" }}>
        </div>
        <button
          className="cta-button"
          onClick={() => scrollToSection("proyectos")}
        >
          Ver mis proyectos
        </button>
      </div>
    </section>
  );
}

export default Header;
