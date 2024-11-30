
import React, { useState } from 'react';
import appFirebase from '../credenciales';
import { getAuth, signOut } from 'firebase/auth';
import userIcon from '../assets/login.png'; // Ajusta la ruta según tu proyecto
import whatsappIcon from '../assets/icons/whatsapp.jpg';
import fasebookIcon from '../assets/icons/fasebook.jpg';
import tiktokIcon from '../assets/icons/tiktok.jfif';
import instagramIcon from '../assets/icons/instagram.jpg';
import logooriginalIcon from '../assets/icons/logooriginal.png'; // Importa el logo correctamente
import logoIcon from '../assets/icon.png'; // Importa el logo correctamente

const auth = getAuth(appFirebase);

function Header({ correoUsuario }) {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header className="header">
      <div className="header-top">
        <p className="header-titulo">
          Aqui encontraras una bariedad de cosas.
        </p>
        <div className="user-info">
          <div className="header-redes">
            <a href="https://wa.me/qr/2QRUCXL6DR5WF1">
              <img src={whatsappIcon} alt="WhatsApp Icon" className="header-icon" />
            </a>
            <a href="https://web.facebook.com/">
              <img src={fasebookIcon} alt="Facebook Icon" className="header-icon" />
            </a>
            <a href="https://www.tiktok.com/">
              <img src={tiktokIcon} alt="TikTok Icon" className="header-icon" />
            </a>
            <a href="https://www.instagram.com/">
              <img src={instagramIcon} alt="Instagram Icon" className="header-icon" />
            </a>
          </div>
          <div className='usuario-ingresado'>
            <img src={userIcon} alt="User Icon" className="user-icon" />
            <span>
              <b>¡Me alegra que estés aquí !</b> {correoUsuario}
            </span>
            <button className="btnsalir" onClick={() => signOut(auth)}>
              Salir
            </button>
          </div>
        </div>
      </div>
      <div className="header-main">
        <div className="logo-container">
          <img src={logooriginalIcon} alt="Logo" className="logo" />
        </div>
        <div className="menu-container">
          <button className="menu-button" onClick={toggleMenu}>
            ☰ Categorías
          </button>
          {menuVisible && (
            <div className="dropdown-menu">
              <ul>
                <li>Accesorios</li>
                <li>Arte y objetos de colección</li>
                <li>Baño y belleza</li>
                <li>Bebé</li>
                <li>Bodas</li>
                <li>Bolsos y monederos</li>
                <li>Electrónica y accesorios</li>
                <li>Herramientas y materiales para arte...</li>
                <li>Hogar y decoración</li>
                <li>Joyería</li>
                <li>Juguetes y juegos</li>
                <li>Libros, películas y música</li>
              </ul>
            </div>
          )}
        </div>
        <div className="search-container">
          <input type="text" className="search-bar" placeholder="Busca lo que se te ocurra" />
          <button className="search-button">  </button>
        </div>
        <div className="header-icons">
          <span className="icon">❤️</span>
          <span className="icon">🎁</span>
          <span className="icon">🛒</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
