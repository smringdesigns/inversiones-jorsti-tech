import React from "react";

// Componente Navbar que acepta cualquier contenido a través de children
const Navbar = ({ children }) => {
  return (
    <nav style={styles.navbar}>
      {/* La lista de navegación (ul) contiene los elementos hijos */}
      <ul style={styles.navList}>
        {children /* Renderiza los elementos hijos que se pasan al Navbar */}
      </ul>
    </nav>
  );
};

// Estilos en línea aplicados al Navbar y sus elementos
const styles = {
  // Estilo para la barra de navegación (Navbar)
  navbar: {
    backgroundColor: "#333",  // Establece un color de fondo gris oscuro para la barra de navegación
    padding: "20px 20px",     // Agrega espacio interno (padding) a la barra de navegación
  },

  // Estilo para la lista (ul) que contiene los enlaces
  navList: {
    listStyle: "none",        // Elimina los puntos de la lista
    display: "flex",          // Hace que los elementos de la lista se muestren en fila (horizontales)
    justifyContent: "space-around", // Distribuye los elementos de manera uniforme a lo largo de la lista
    padding: 0,               // Elimina el padding predeterminado de la lista
    margin: 0,                // Elimina el margen predeterminado de la lista
  },

  // Estilo para cada elemento de la lista (li), que es un enlace de navegación
  navItem: {
    color: "white",            // Establece el color del texto a blanco
    textDecoration: "none",    // Elimina el subrayado de los enlaces
    fontSize: "18px",          // Establece el tamaño de la fuente a 18 píxeles
    padding: "10px 15px",      // Añade un poco de espacio alrededor del texto del enlace
    borderRadius: "5px",       // Añade bordes redondeados para un aspecto más suave
    transition: "background-color 0.3s ease", // Añade una transición suave al cambiar el color de fondo al hacer hover
  }
};

export default Navbar;

