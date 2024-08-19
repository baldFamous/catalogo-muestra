import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Contacto</h3>
        <p>Teléfono: +569 xxxx xxxx</p>
        <p>Email: <a href="mailto:correo@gmail.com">correo@gmail.com</a></p>
      </div>
      <div className="footer-section">
        <h3>Redes Sociales</h3>
        <div className="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>
      </div>
      <div className="footer-section">
        <p>© 2024 Catalogo XXXX</p>
        <p>Página creada por <a href="mailto:bastian.dev24@gmail.com">DevBastian</a></p>
      </div>
    </footer>
  );
}

