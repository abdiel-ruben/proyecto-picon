/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';
import logoIcon from '../assets/icon.png';
import videoBackground from '../assets/video/fondo-mimadre.mp4'; // Asegúrate de agregar el video en esta ruta

function DecoracionPinkoween({ correoUsuario }) {
  return (
    <div className="app">
      <Header correoUsuario={correoUsuario} />
      
      {/* Video de fondo */}
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src={videoBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <main className="main-content">
        <img src={logoIcon} alt="Decoración Pinkoween" />
        <h2 className="main-titulo">Decoración Pinkoween</h2>
        <p>¡Explora nuestra exclusiva colección de decoración para un Halloween rosado y elegante!</p>

        <img src={logoIcon} alt="Decoración Pinkoween" />
        <h2 className="main-titulo">Decoración Pinkoween</h2>
        <p>¡Explora nuestra exclusiva colección de decoración para un Halloween rosado y elegante!</p>

        <img src={logoIcon} alt="Decoración Pinkoween" />
        <h2 className="main-titulo">Decoración Pinkoween</h2>
        <p>¡Explora nuestra exclusiva colección de decoración para un Halloween rosado y elegante!</p>
        {/* Agrega más contenido o imágenes aquí */}
      </main>
      
      <Footer />
    </div>
  );
}

export default DecoracionPinkoween;
