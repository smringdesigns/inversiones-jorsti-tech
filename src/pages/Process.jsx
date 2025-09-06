import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";  
import "../styles/section.css";
import "../components/CTA"; // Importa estilos del CTA

const Process = () => {
  return (
    <div className="process-container">
      <section className="text-center">
        <h1>Procesos</h1>
        <p>
          En JorSti Tech, nuestros procesos están diseñados para garantizar la eficiencia, 
          la calidad y la satisfacción del cliente en cada proyecto que emprendemos. 
          A continuación, se describen los pasos clave que seguimos para asegurar el éxito 
          de nuestras soluciones tecnológicas y logísticas:
        </p>
      </section>

      <div className="card-container">
        <Card 
          title="Consulta" 
          description="Analizamos tus necesidades para definir la mejor solución personalizada." 
        />
        <Card 
          title="Diseño" 
          description="Diseñamos una ruta clara adaptada a tu servicio específico." 
        />
        <Card 
          title="Ejecución" 
          description="Implementamos la solución paso a paso garantizando calidad en cada fase." 
        />
        <Card 
          title="Entrega" 
          description="Entregamos con seguimiento, capacitación y soporte posventa." 
        />
      </div>

      {/* CTA al final */}
      <div className="cta-container text-center">
        <h2>
          Conecta con <span className="highlight">JORSTI TECH</span> y dale vida digital a tu negocio.
        </h2>
        <p>
          Soluciones tecnológicas, asesorías educativas y servicios cercanos para tu día a día.
        </p>
        <Link to="/contact" className="section-button">
          ¡Hablemos ahora!
        </Link>
      </div>
    </div>
  );
};

export default Process;
