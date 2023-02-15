import React from "react";
import "./Header.css";

const Navbar = ()=> {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <h1 to="/" className="navbar-link">
            Accueil
          </h1>
        </li>
        <li className="navbar-item">
          <h1 to="/about" className="navbar-link">
            À propos
          </h1>
        </li>
        <li className="navbar-item">
          <h1 to="/contact" className="navbar-link">
            Contact
          </h1>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
