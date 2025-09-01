import pro1 from "../assets/img/site1.webp";
import pro2 from "../assets/img/propuesta.webp";
import pro3 from "../assets/img/site1.webp";
import pro4 from "../assets/img/propuesta.webp";
function Proyectos() {
    
  const proyectos = [
  {
    title: "Escalandia SPA de Cotizaciones",
      image: pro1,
    description:
      "Implementación de una Single Page Application para generación de cotizaciones rápidas en PDF desde terreno, mejorando la atención al cliente en eventos personalizados.",
    tags: ["React", "Node.js", "PDF", "Automatización"],
  },
  {
    title: "Automatización de Flujos con n8n",
      image: pro2,
    description:
      "Diseño e integración de flujos automatizados para cotizaciones, reservas y avisos con n8n Cloud, logrando una reducción del 40% en tiempos operativos.",
    tags: ["n8n", "Node.js", "API REST", "Automatización"],
  },
  {
    title: "Plataforma de Escalada Deportiva",
      image: pro3,
    description:
      "Diseño e implementación de API REST y SPA para control y seguimiento de escalada deportiva, incluyendo generación de PDFs personalizados para usuarios.",
    tags: ["React", "Node.js", "PostgreSQL", "API REST"],
  },
  {
    title: "Identidad Visual y Branding para PYMEs",
      image: pro4,
    description:
      "Desarrollo de identidad visual, branding y piezas gráficas para emprendimientos y pequeñas empresas, con enfoque en comunicación visual efectiva.",
    tags: ["Diseño Gráfico", "Branding", "UX/UI", "Figma"],
  },
];

  return (
       <section className="section" id="proyectos">
        <h2 className="section-title">Proyectos</h2>
        <div className="cards-grid">
          {proyectos.map((proyecto, index) => (
            <div key={index} className="project-card">
              <img src={proyecto.image} alt={proyecto.title} className="project-image" />
              <div className="project-content">
                <h3>{proyecto.title}</h3>
                <p>{proyecto.description}</p>
                <div className="tags">
                  {proyecto.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}

export default Proyectos
