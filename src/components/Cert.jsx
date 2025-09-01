
function Cert() {

     
const certificaciones = [
  {
    title: "Desarrollo Full Stack (en progreso)",
    institution: "Autodidacta",
    period: "2025",
    description:
      "Formación autodidacta en desarrollo web con JavaScript, React, Vite y Node.js, enfocado en aplicaciones modernas.",
  },
  {
    title: "Frontend con React y Vite",
    institution: "Proyectos personales",
    period: "2024 - 2025",
    description:
      "Experiencia práctica creando componentes reutilizables, gestionando estado y optimizando aplicaciones con React y Vite.",
  },
  {
    title: "Backend con Node.js y Express",
    institution: "Proyectos personales",
    period: "2025",
    description:
      "Práctica en la creación de APIs REST, manejo de rutas, middlewares y conexión con bases de datos.",
  },
  {
    title: "Bases de Datos (SQL y NoSQL)",
    institution: "Autodidacta",
    period: "2025",
    description:
      "Aprendizaje en el diseño y consulta de bases de datos relacionales (MySQL/PostgreSQL) y no relacionales (MongoDB).",
  },
];

  return (
      <section className="section">
        <h2 className="section-title">Certificaciones</h2>
        <div className="cards-grid">
          {certificaciones.map((cert, index) => (
            <div key={index} className="card">
              <h3>{cert.title}</h3>
              <p className="card-meta">
                {cert.institution} • {cert.period}
              </p>
              <p>{cert.description}</p>
            </div>
          ))}
        </div>
      </section>

  )
}

export default Cert
