import React from 'react';
import './page.css';

export default function AboutPage() {
  return (
    <div className="about-container">
      <div className="about-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8836.276445391672!2d-71.25078595177912!3d-29.91033024735126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9691ca6e79d321d7%3A0xf0b7e8b847331af7!2sUniversidad%20Santo%20Tom%C3%A1s!5e0!3m2!1ses!2scl!4v1724468029194!5m2!1ses!2scl"
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