/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';
import logoIcon from '../assets/icon.png';
import fondoIcon from '../assets/fondo.avif';
import imagenIcon from '../assets/icons/login.png';
import videoBackground from '../assets/video/fondo-mimadre.mp4'; // Asegúrate de agregar el video en esta ruta

function Home({ correoUsuario }) {
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
        <h2 className="main-titulo">Échales un vistazo a las principales tendencias para esta temporada</h2>
        <div className="trends">
          <div className="trend-item">
            <img src={logoIcon} alt="Decoración Pinkoween" />
            <Link to="/decoracion-pinkoween">
              <p>Decoración Pinkoween</p>
            </Link>
          </div>
          <div className="trend-item">
            <img src={fondoIcon} alt="Decoración Pinkoween" />
            <Link to="/contacto-contacto">
              <p>contacto contacto</p>
            </Link>
          </div>
          <div className="trend-item">
            <img src={imagenIcon} alt="Decoración Pinkoween" />
            <Link to="/decoracion-pinkoween">
              <p>Decoración Pinkoween</p>
            </Link>
          </div>
          <div className="trend-item">
            <img src={fondoIcon} alt="Decoración Pinkoween" />
            <Link to="/decoracion-pinkoween">
              <p>Decoración Pinkoween</p>
            </Link>
          </div>
          <div className="trend-item">
            <img src={logoIcon} alt="Decoración Pinkoween" />
            <Link to="/decoracion-pinkoween">
              <p>Decoración Pinkoween</p>
            </Link>
          </div>
          <div className="trend-item">
            <img src={fondoIcon} alt="Decoración Pinkoween" />
            <Link to="/contacto-contacto">
              <p>contacto contacto</p>
            </Link>
          </div>
          <div className="trend-item">
            <img src={imagenIcon} alt="Decoración Pinkoween" />
            <Link to="/decoracion-pinkoween">
              <p>Decoración Pinkoween</p>
            </Link>
          </div>
          {/* Otros items */}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
