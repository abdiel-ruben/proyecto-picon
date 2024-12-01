/* eslint-disable no-unused-vars */
import React from 'react';
import whatsappIcon from '../assets/icon-footer/whatsap.png';
import fasebookIcon from '../assets/icon-footer/facebook.png';
import tiktokIcon from '../assets/icon-footer/tiktok.png';
import instagramIcon from '../assets/icon-footer/instagram.png';
import llamadaIcon from '../assets/icon-footer/llamada.png'

function Footer() {
  return (
    <footer className="footer">
      <h3>Centro de educacion y rehabilitacion de ciegos de Huanuco</h3>
      <p>Contáctenos: 931 397 346 - 925 362 093</p>
      <p>Av. Javier Heraud  Amarilis Huanuco</p>
      <p>&copy; 2024 Todos los derechos reservados.</p>
      
      <div className="footer-desarrollo">
        <div className="footer-redes">
          <h6><b>Redes sociales: </b></h6>
          <div className="footer-redes-imagen">
            <a href="https://wa.me/qr/2QRUCXL6DR5WF1">
              <p><img src={whatsappIcon} alt="WhatsApp Icon" className="header-icon" />WhatsApp.</p>
            </a>
            <a href="https://web.facebook.com/profile.php?id=61552655624139">
              <p><img src={fasebookIcon} alt="Facebook Icon" className="header-icon" />Facebook.</p>
            </a>
            <a href="https://www.tiktok.com/@andielpicon?_t=8pa27ERAGE1&_r=1">
              <p><img src={tiktokIcon} alt="TikTok Icon" className="header-icon" />TikTok.</p>
            </a>
            <a href="https://www.instagram.com/">
              <p><img src={instagramIcon} alt="Instagram Icon" className="header-icon" />Instagram.</p>
            </a>
            <a href="tel:+51928943285">
              <p><img src={llamadaIcon} alt="Instagram Icon" className="header-icon" />llamada.</p>
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
