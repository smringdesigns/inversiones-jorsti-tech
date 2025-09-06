// src/components/card.jsx
import React from "react";
import "../styles/card.css"; // Asegúrate de tener un archivo CSS para estilos

const Card = ({ title, description }) => {
  return (
    <section className="card">
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
};

export default Card;
// Componente Card reutilizable que muestra un título y una descripción