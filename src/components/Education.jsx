import cafe1 from "../assets/img/alfa.png";
import cafe2 from "../assets/img/beta.png";
import cafe3 from "../assets/img/gama.png";

function Education() {
  const estudios = [
    {
      title: "Front End",
      institution: "Desafío Latam",
      period: "2024",
      description:
        "Desarrollo con React, HTML5, CSS3 y enfoque responsivo y UX/UI.",
      tags: ["React", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
      image: cafe1,
    },
    {
      title: "Stack Tecnológico",
      institution: "FullStack",
      period: "2025",
      description:
        " ",
      tags: ["JavaScript", "PostgreSQL", "Async/Await", "Figma", "Axios", "Postman", "ThunderClient", "Visual Studio Code", "JsonWebToken", "Bcrypt"],
      image: cafe2,
    },
    {
      title: "Backend",
      institution: "Desafío Latam",
      period: "2015",
      description:
        "Enfoque en APIs, bases de datos y arquitectura de software escalable y segura.",
      tags: ["Node.js", "ExpressJs", "SQL", "APIs REST"],
      image: cafe3,
    },
  ];

  return (
    <section className="section" id="estudios">
        <h2 className="section-title">Fullstack</h2>
      <div className="cafetera-container">
        {estudios.map((estudio, idx) => (
          <div key={estudio.title} className="estudio-hover-card">
            <img src={estudio.image} alt={estudio.title} className="cafe-img" />
            <div className={` card-float card-float-${idx}`}>
              <h3>{estudio.title}</h3>
              <p className="card-meta">
                {estudio.institution} • {estudio.period}
              </p>
              <p>{estudio.description}</p>
              <div className="tags">
                {estudio.tags.map((tag, i) => (
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
  );
}

export default Education;
