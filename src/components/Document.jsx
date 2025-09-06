import React, { useState } from "react";
import "../styles/document.css"; // Importa los estilos globales
import logo from "../assets/logo.png"; // Ruta corregida

const Document = ({ tipo }) => {
  const [items, setItems] = useState([]);
  const [descripcion, setDescripcion] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [valor, setValor] = useState("");

  // Agregar ítem
  const agregarItem = () => {
    if (!descripcion || !cantidad || !valor) return;
    const nuevoItem = {
      id: Date.now(),
      descripcion,
      cantidad: parseInt(cantidad),
      valor: parseFloat(valor),
      subtotal: parseInt(cantidad) * parseFloat(valor),
    };
    setItems([...items, nuevoItem]);
    setDescripcion("");
    setCantidad("");
    setValor("");
  };

  // Eliminar ítem
  const eliminarItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // Calcular total
  const total = items.reduce((acc, item) => acc + item.subtotal, 0);

  // Clases dinámicas
  const headerClass =
    tipo === "Factura"
      ? "factura-header"
      : tipo === "Cotizacion"
      ? "cotizacion-header"
      : "cuenta-cobro-header";

  return (
    <div className="documento-container">
      {/* Cabecera de la empresa */}
      <div className="empresa-header">
        <img src={logo} alt="Logo empresa" className="empresa-logo" />
        <div>
          <h2>JORSTI TECH</h2>
          <p><b>NIT:</b> 1003313900-1</p>
          <p><b>Dirección:</b> Tv 25 a # 16 c bis - 34</p>
          <p><b>Email:</b> jorstitech@gmail.com</p>
          <p><b>Tel:</b> +57 300 876 5301</p>
        </div>
      </div>

      {/* Cabecera dinámica */}
      <div className={`documento-header ${headerClass}`}>
        <h1>{tipo.toUpperCase()}</h1>
        <div>
          <p><b>Fecha:</b> {new Date().toLocaleDateString()}</p>
          <p><b>No.</b> {Date.now()}</p>
        </div>
      </div>

      {/* Tabla */}
      <table className="documento-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Valor Unitario</th>
            <th>Subtotal</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.descripcion}</td>
              <td>{item.cantidad}</td>
              <td>${item.valor}</td>
              <td>${item.subtotal}</td>
              <td>
                <button
                  className="btn-delete no-print"
                  onClick={() => eliminarItem(item.id)}
                >
                  ✖
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="4" className="documento-total">TOTAL</td>
            <td colSpan="2" className="documento-total">${total}</td>
          </tr>
        </tbody>
      </table>

      {/* Inputs */}
      <div className="documento-form no-print">
        <input
          type="text"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <input
          type="number"
          placeholder="Cantidad"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor Unitario"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <button className="btn-add" onClick={agregarItem}>
          Agregar Ítem
        </button>
      </div>

      {/* Botón imprimir */}
      <div className="documento-actions no-print">
        <button onClick={() => window.print()}>Imprimir {tipo}</button>
      </div>
    </div>
  );
};

export default Document;


