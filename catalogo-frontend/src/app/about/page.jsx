import React from 'react';
import './page.css';

export default function AboutPage() {
  return (
    <div className="about-container">
      <div className="about-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6913.185966270139!2d-71.26207247654379!3d-29.962383938730248!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9691cb5e29ca53a5%3A0xc6cf325aa2ac1809!2sFerreter%C3%ADa%20Materiales%20El%C3%A9ctricos%20Coquimbo%20VILUZ!5e0!3m2!1sen!2scl!4v1724022684601!5m2!1sen!2scl"
          width="100%"
          height="100%"
          style={{border: 0}}
          allowFullScreen=""
          aria-hidden="false"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          tabIndex="0"
          frameBorder="0">

        </iframe>
      </div>
      <div className="about-text">
        <h1>Sobre el negocio</h1>
        <p>
          ¡Bienvenido a nuestro negocio! Nos especializamos en ofrecer productos de la más alta calidad,
          y nuestra misión es garantizar la satisfacción total de nuestros clientes. Ubicados en un lugar céntrico,
          nos esforzamos por ofrecer un excelente servicio y productos que cumplan con todas sus expectativas.
        </p><br/>
        <p>
        Fundada en [año de fundación], nuestra empresa ha crecido gracias al apoyo de nuestros clientes
          y al compromiso de nuestro equipo. Ofrecemos una amplia variedad de productos y servicios diseñados
          para satisfacer sus necesidades.
        </p>
      </div>
    </div>
  );
}