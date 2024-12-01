/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';
import logoIcon from '../assets/icon.png';
import imagenIcon from '../assets/icons/login.png';
import fondoIcon from '../assets/relatos/portada.jpg';
import Comentario from '../assets/comentarios/comentario.avif';
import Audiovideo from '../assets/comentarios/audiovideo.jpg'

function Home({ correoUsuario }) {
  return (
    <div className="app">
      <Header correoUsuario={correoUsuario} />

      <main className="main-content">
        <h2 className="main-titulo">Modulos del sistema</h2>
        <div className="trends">
          <div className="trend-item">
            <img src={fondoIcon} alt="Relatos" />
            <Link to="/relatos-relatos">
              <p>Publicación de Relatos</p>
            </Link>
          </div>
          <div className="trend-item">
            <img src={Comentario} alt="Relatos" />
            <Link to="/comentarios-comentarios">
              <p>Interacción/Comentarios</p>
            </Link>
          </div>
          <div className="trend-item">
            <img src={Audiovideo} alt="Decoración Pinkoween" />
            <Link to="/decoracion-pinkoween">
              <p>Audio / Videos</p>
            </Link>
          </div>
          {/* <div className="trend-item">
            <img src={fondoIcon} alt="Decoración Pinkoween" />
            <Link to="/contacto-contacto">
              <p>Textos - libros</p>
            </Link>
          </div>
          <div className="trend-item">
            <img src={imagenIcon} alt="Decoración Pinkoween" />
            <Link to="/decoracion-pinkoween">
              <p>algunos videos</p>
            </Link>
          </div>
          <div className="trend-item">
            <img src={fondoIcon} alt="Decoración Pinkoween" />
            <Link to="/contacto-contacto">
              <p>Publicación de Relatos</p>
            </Link>
          </div> */}
          {/* Otros items */}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
