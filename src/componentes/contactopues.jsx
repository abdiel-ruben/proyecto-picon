/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';
import fondoIcon from '../assets/fondo.avif';
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
        <img src={fondoIcon} alt="Decoración Pinkoween" />
        <h2 className="main-titulo">CONTACTO</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus excepturi </p>

      </main>
      
      <Footer />
    </div>
  );
}

export default DecoracionPinkoween;
