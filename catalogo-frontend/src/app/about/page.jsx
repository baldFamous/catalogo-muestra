import React from 'react';
import './page.css';

export default function AboutPage() {
  return (
    <div className="about-container">
      <div className="about-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=..."
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
      <div className="about-text">
        <h1>Sobre el negocio</h1>
        <p>
          ¡Bienvenido a nuestro negocio! Nos especializamos en ofrecer productos de la más alta calidad, y nuestra misión es garantizar la satisfacción total de nuestros clientes. Ubicados en un lugar céntrico, nos esforzamos por ofrecer un excelente servicio y productos que cumplan con todas sus expectativas.
        </p>
        <p>
          Fundada en [año de fundación], nuestra empresa ha crecido gracias al apoyo de nuestros clientes y al compromiso de nuestro equipo. Ofrecemos una amplia variedad de productos y servicios diseñados para satisfacer sus necesidades.
        </p>
      </div>
    </div>
  );
}