import React from 'react';
import './navBar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Empresa XXXX</a>
      </div>
      <ul className="navbar-links">
        <li><a href="/about">Sobre nosotros</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;