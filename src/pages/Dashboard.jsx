// src/pages/Dashboard.jsx
import { Link } from "react-router-dom";
import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Panel Administrativo</h1>
      <p>Selecciona una opción para empezar:</p>

      <div className="dashboard-cards">
        <Link to="/factura"  target="_blank" className="dashboard-card">
          <h2>🧾 Factura</h2>
          <p>Genera facturas de manera rápida y sencilla.</p>
        </Link>

        <Link to="/cotizacion"  target="_blank"  className="dashboard-card">
          <h2>📑 Cotización</h2>
          <p>Crea cotizaciones claras para tus clientes.</p>
        </Link>

        <Link to="/cuenta-cobro"  target="_blank"  className="dashboard-card">
          <h2>💰 Cuenta de Cobro</h2>
          <p>Administra cuentas de cobro de forma organizada.</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;


