
function Exp() {
    const experiencia = [
  {
    title: "Founder & Fullstack Developer",
    company: "Escalandia.cl",
    period: "2017 – Actualidad",
    description:
      "Diseño y desarrollo del sitio web e identidad de marca. Implementación de SPA para generación de cotizaciones rápidas en PDF desde terreno. Automatización de flujos de trabajo con n8n Cloud reduciendo tiempos operativos en un 40%. Diseño de la lógica de ventas y gestión comercial, captando más de 6.000 usuarios para campañas de marketing.",
    tags: ["React", "Node.js", "PostgreSQL", "n8n", "Automatización"],
  },
  {
    title: "Proyectos y Trabajos Freelance",
    company: "Freelance",
    period: "2013 – Actualidad",
    description:
      "Desarrollo de identidad visual y piezas gráficas para emprendimientos y PYMEs. Diseño gráfico y de producto enfocados en branding y comunicación visual. Implementación de API REST y SPA para control de escalada deportiva. Creación de generadores de PDFs personalizados para respuestas rápidas a clientes.",
    tags: ["Branding", "API REST", "SPA", "Diseño Gráfico", "UX/UI"],
  },
];


  return (
      <section className="section" id="experiencia">
        <h2 className="section-title">Experiencia</h2>
        <div className="cards-grid">
          {experiencia.map((exp, index) => (
            <div key={index} className="card">
              <h3>{exp.title}</h3>
              <p className="card-meta">
                {exp.company} • {exp.period}
              </p>
              <p>{exp.description}</p>
              <div className="tags">
                {exp.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}

export default Exp
