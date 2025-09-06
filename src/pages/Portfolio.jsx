import React from "react";
import { Link } from "react-router-dom";
import "../styles/section.css";
import "../components/CTA" // Importa estilos del CTA

const Portfolio = () => {
  return (
    <section className="text-center">
      <h1>Portafolio de Servicios</h1>
      <p>
        En JorSti Tech ofrecemos una variedad de servicios diseñados para satisfacer las
        necesidades tecnológicas y logísticas de nuestras comunidades. Nuestro portafolio incluye
        algunos de nuestros trabajos más recientes que muestran nuestra experiencia y calidad.
      </p>

      {/* CTA integrado */}
      <div className="cta-container">
        <h2>
          Conecta con <span className="highlight">JORSTI TECH</span> y potencia tu negocio.
        </h2>
        <p>
          Soluciones digitales, asesorías educativas y servicios cercanos para impulsar tu
          crecimiento.
        </p>
        <Link to="/contact" className="section-button">
          ¡Trabajemos juntos!
        </Link>
      </div>
    </section>
  );
};

export default Portfolio;
