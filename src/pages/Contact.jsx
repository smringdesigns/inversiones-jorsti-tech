import React, { useState } from "react";
import "../styles/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "573008765301"; // Número de WhatsApp
    const text = `Hola, soy ${formData.nombre}.
Correo: ${formData.email}
Teléfono: ${formData.telefono}
Mensaje:
${formData.mensaje}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");

    // ✅ Limpiar el formulario después de enviar
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      mensaje: ""
    });
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-form-container">
        <h2>Contáctanos</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            name="nombre"
            type="text"
            placeholder="Tu nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="contact-input"
          />
          <input
            name="email"
            type="email"
            placeholder="Tu correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
            className="contact-input"
          />
          <input
            name="telefono"
            type="text"
            placeholder="Tu celular"
            value={formData.telefono}
            onChange={handleChange}
            required
            className="contact-input"
          />
          <textarea
            name="mensaje"
            rows="4"
            placeholder="Tu mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
            className="contact-textarea"
          />
          <button type="submit" className="contact-button">
            Enviar por WhatsApp
          </button>
        </form>
      </div>

      <div className="contact-info-container">
        <h3>Nuestros Datos</h3>
        <p><strong>Dirección:</strong> Valledupar, Colombia</p>
        <p><strong>Teléfono:</strong> +57 300 876 5301</p>
        <p><strong>Email:</strong> jorstitech@gmail.com</p>
        <p><strong>Email:</strong> administrador@inversionesjorsti.com</p>
        <p><strong>Horario:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM</p>
      </div>
    </div>
  );
};

export default Contact;
