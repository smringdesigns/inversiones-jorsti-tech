import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"; // Importa el CSS

const NavBar = ({ logo, navItems }) => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>

      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.link} className="nav-item">
            <Link to={item.link} className="nav-link">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
