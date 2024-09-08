/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';
import logoIcon from '../assets/icon.png';

function DecoracionPinkoween({ correoUsuario }) {
  return (
    
    
    <div className="app">
      <Header correoUsuario={correoUsuario} />
      <main className="main-content">
        <img src={logoIcon} alt="Decoración Pinkoween" />
        <h2 className="main-titulo">contacto</h2>
        <p>¡Aqui va una variedad de contactos de una persona !</p>
        {/* Agrega más contenido o imágenes aquí */}
      </main>
      
      <Footer />
    </div>
  );
}

export default DecoracionPinkoween;
