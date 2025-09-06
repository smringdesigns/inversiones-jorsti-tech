import React from "react";
import "../styles/content.css";
import { Link } from "react-router-dom";

const Content = () => (
  <div>
    <section className="landing-section">
      <div className="landing-content">
        <h1 className="landing-title">
          CONECTAMOS TECNOLOGÍA Y SERVICIOS <br />
          CON QUIEN MÁS LO NECESITAN
        </h1>
        <p className="landing-subtitle">
          En JorSti Tech desarrollamos soluciones digitales, asesorías y servicios que impulsan
          negocios y comunidades hacia el futuro.
        </p>

        <a href="/services" className="landing-button">
          Explora nuestros servicios
        </a>
      </div>
    </section>

    {/* CTA adicional */}
    <section>
      <div className="cta-container">
        <h2>
          Dale vida digital a tu negocio con <span className="highlight">JORSTI TECH</span>
        </h2>
        <p>
          Soluciones tecnológicas, asesorías educativas y servicios cercanos para tu día a día.
        </p>
        <Link to="/contact" className="section-button">
          ¡Contáctanos hoy!
        </Link>
      </div>
    </section>
  </div>
);

export default Content;

