import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import pro1 from "../assets/img/site1.webp";
import pro2 from "../assets/img/propuesta.webp";
import pro3 from "../assets/img/site1.webp";
import pro4 from "../assets/img/propuesta.webp";

function Proyectos() {
  const proyectos = [
    {
      title: "Escalandia SPA de Cotizaciones",
      images: [pro1, pro2], // ahora puede tener varias imágenes
      description:
        "Implementación de una Single Page Application para generación de cotizaciones rápidas en PDF desde terreno, mejorando la atención al cliente en eventos personalizados.",
      tags: ["React", "Node.js", "PDF", "Automatización"],
    },
    {
      title: "Automatización de Flujos con n8n",
      images: [pro2, pro3],
      description:
        "Diseño e integración de flujos automatizados para cotizaciones, reservas y avisos con n8n Cloud, logrando una reducción del 40% en tiempos operativos.",
      tags: ["n8n", "Node.js", "API REST", "Automatización"],
    },
    {
      title: "Plataforma de Escalada Deportiva",
      images: [pro3, pro1],
      description:
        "Diseño e implementación de API REST y SPA para control y seguimiento de escalada deportiva, incluyendo generación de PDFs personalizados para usuarios.",
      tags: ["React", "Node.js", "PostgreSQL", "API REST"],
    },
    {
      title: "Identidad Visual y Branding para PYMEs",
      images: [pro4, pro2],
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
            {/* Slider de imágenes */}
            <Swiper
              modules={[Navigation]}
              navigation={true}
              spaceBetween={10}
              slidesPerView={1}
              className="project-slider"
            >
              {proyecto.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img src={img} alt={`${proyecto.title} - ${i}`} className="project-image" />
                </SwiperSlide>
              ))}
            </Swiper>

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
  );
}

export default Proyectos;
