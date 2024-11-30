/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';
import '../DecoracionPinkoween.css';
import videoBackground from '../assets/video/videoanimacion.mp4'; // agregar el video en esta ruta
import animacionvideo from '../assets/video/animacion-video.mp4'; // agregar el video en esta ruta
import fondoanimacion from '../assets/video/fondo-animacion.mp4'; // agregar el video en esta ruta

function VideoItem({ videoSrc, title, description }) {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="video-item">
      <video controls className="video">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-details">
        <h3>{title}</h3>
        <p>{description}</p>
        {showMore && <p className="extra-text">Este es el texto adicional que se muestra al hacer clic en el botón mas.</p>}
        <button className="show-more-btn" onClick={handleShowMore}>
          {showMore ? 'Mostrar menos' : 'Mostrar más'}
        </button>
      </div>
    </div>
  );
}

function DecoracionPinkoween({ correoUsuario }) {
  return (
    <div className="app">
      <Header correoUsuario={correoUsuario} />

      <main className="main-content">
        <h2 className="main-titulo">Videos relacionados a .....</h2>
        <p>¡Explora nuestra exclusiva colección de decoración para un Halloween rosado y elegante!</p>

        {/* Lista de videos */}
        <div className="video-list">
          <VideoItem 
            videoSrc={videoBackground} 
            title="Decoración Rosa 1" 
            description="Decoración temática Pinkoween ideal para fiestas."
          />
          <VideoItem 
            videoSrc={animacionvideo} 
            title="Decoración Rosa 2" 
            description="Otra idea creativa para decorar tu fiesta."
          />
          <VideoItem 
            videoSrc={fondoanimacion} 
            title="Decoración Rosa 3" 
            description="Increíbles decoraciones para un Pinkoween inolvidable."
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default DecoracionPinkoween;
