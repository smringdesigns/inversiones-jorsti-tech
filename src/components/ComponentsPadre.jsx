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

// Estilos en línea aplicados al Navbar y sus elementos usando variables CSS
const styles = {
  navbar: {
    backgroundColor: "var(--color-dark)",  // Color oscuro del root
    padding: "20px 20px",
  },

  navList: {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-around",
    padding: 0,
    margin: 0,
  },

  navItem: {
    color: "var(--color-white)",  // Color blanco definido en root
    textDecoration: "none",
    fontSize: "18px",
    padding: "10px 15px",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  },
};

export default Navbar;
