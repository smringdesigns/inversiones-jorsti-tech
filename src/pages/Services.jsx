import React from "react";
import Card from "../components/Card"; 
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="services-container">
      <div className="text-center">
        <h1>Nuestros Servicios</h1>
        <p>
          Ofrecemos soluciones digitales integrales adaptadas a las necesidades de tu negocio, 
          proyecto o comunidad. Desde tecnología hasta asesorías y logística, todo desde una sola 
          plataforma.
        </p>
      </div>

      <div className="card-container">
        <Card 
          title="Desarrollo Web" 
          description="Creamos sitios web personalizados y optimizados para tu negocio." 
        />
        <Card 
          title="Asesoría Estudiantil" 
          description="Te ayudamos a gestionar tus trámites con ICETEX de manera eficiente." 
        />
        <Card 
          title="Logística de Envíos" 
          description="Facilitamos tus envíos con Coordinadora para que lleguen a tiempo." 
        />
        <Card 
          title="Corresponsalía Bancaria" 
          description="Plataformas de corresponsalía bancaria para tu comodidad." 
        />
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
    </div>
  );
};

export default Services;
