import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes comunes
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import logo from "./assets/logo.png";
import navItems from "./components/navItems"; // ajustado a tu estructura
import Content from "./components/content";

// Páginas públicas
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Process from "./pages/Process";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Login from "./pages/Login";

// Ejemplo con Hook personalizado
import ComponenteCustonHook from "./components/components-ejemplo";
import CustomHookComponent from "./components/CustomHookComponent";

// Páginas privadas
import Dashboard from "./pages/Dashboard";
import Factura from "./pages/Factura";
import Cotizacion from "./pages/Cotizacion";
import CuentaCobro from "./pages/CuentaCobro";
import ProtectedRoute from "./components/ProtectedRoute";

// Página principal
function Home() {
  return (
    <div className="text-center">
      <h1>Bienvenido a la página principal</h1>
      <Content />
    </div>
  );
}

// Página de ejemplo para custom hook (ambas versiones)
const CustomHookPage = () => (
  <>
    <h1>Ejemplo de Hook personalizado</h1>
    <ComponenteCustonHook />
    <CustomHookComponent url="https://jsonplaceholder.typicode.com/users" />
  </>
);

// Componente principal de la aplicación
const App = () => {
  return (
    <Router>
      <Navbar logo={logo} navItems={navItems} />

      <main>
        <Routes>
          {/* Rutas públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/custom-hook" element={<CustomHookPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/process" element={<Process />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/login" element={<Login />} />

          {/* Rutas privadas */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/factura"
            element={
              <ProtectedRoute>
                <Factura />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cotizacion"
            element={
              <ProtectedRoute>
                <Cotizacion />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cuenta-cobro"
            element={
              <ProtectedRoute>
                <CuentaCobro />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
