// src/components/footer.jsx
import React from "react";
import { Link } from "react-router-dom"; // ✅ Importa Link
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram
} from "react-icons/fa6";
import "../styles/footer.css";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Columna 1 */}
        <div className="footer-section">
          <Link to="/">
            <img 
              src={logo} 
              alt="JorSti Tech Logo" 
              className="footer-logo" 
              title="Volver al inicio"
            />
          </Link>
          <p>
            Soluciones digitales accesibles y efectivas: 
            desarrollo web, asesorías ICETEX, envíos y servicios 
            financieros en un solo lugar.
          </p>
        </div>

        {/* Columna 2 */}
        <div className="footer-section">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/services">Servicios</Link></li>
            <li><Link to="/process">Procesos</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
            <li><Link to="/icetex">Icetex</Link></li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div className="footer-section">
          <h4>Servicios</h4>
          <ul>
            <li>Sitios Web Responsivos</li>
            <li>E-commerce</li>
            <li>Optimización Móvil</li>
            <li>SEO</li>
            <li>Mantenimiento Web</li>
          </ul>
        </div>

        {/* Columna 4 */}
        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaXTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <hr />
      <p className="footer-bottom">
        © 2025 Inversiones JorSti Tech. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
