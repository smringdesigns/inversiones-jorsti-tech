import { Link } from "react-router-dom";
import "../styles/cta.css"; // Importa estilos del CTA

export default function CTA() {
  return (
    <div className="cta-container text-center">
      <h2>
        Conecta con <span className="highlight">JORSTI TECH</span> y dale vida
        digital a tu negocio.
      </h2>
      <p>
        Soluciones tecnológicas, asesorías educativas y servicios cercanos para
        tu día a día.
      </p>
      <Link to="/contact" className="section-button">
        ¡Hablemos ahora!
      </Link>
    </div>
  );
}
