import React from "react";
import Login from "../pages/Login";

// Array que contiene los elementos de navegación
const navItems = [
  { name: "Inicio", link: "/" },
  { name: "Acerca de", link: "/about" },
  { name: "Servicios", link: "/services" },
  { name: "Procesos", link: "/process" },
  { name: "Portafolio", link: "/portfolio" },
  { name: "Contacto", link: "/contact" },
  { name: "Icetex", link: "/Icetex" },
  { name: "Blog", link: "/blog" }, 
  { name: "Iniciar Sesión", link: "/login" }
];


export default navItems;
// Este archivo define los elementos de navegación que se utilizarán en el Navbar
// Puedes agregar, eliminar o modificar los elementos de navegación aquí
// Cada elemento es un objeto con un nombre ("name") y un enlace ("link") asociado
// Estos elementos se pueden importar y usar en otros componentes, como el Navbar
