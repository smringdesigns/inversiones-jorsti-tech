// src/components/AboutPreview.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/section.css";

const About = () => {
  return (
    <section className="text-center">
      <h1>¿Quiénes Somos?</h1>
      <p>
        En JorSti Tech somos una empresa joven y dinámica que conecta tecnología y servicios
        con comunidades que lo necesitan. Trabajamos con compromiso, ética y pasión por la innovación.
      </p>

      <div className="about-values">
        <div className="value-box">
          <h4>💡 Misión</h4>
          <p>
            Brindar soluciones digitales, educativas y logísticas de calidad accesibles para todos.
          </p>
        </div>
        <div className="value-box">
          <h4>🚀 Visión</h4>
          <p>
            Ser líderes en tecnología inclusiva y sostenible en Colombia y Latinoamérica.
          </p>
        </div>
      </div>

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

export default About;
