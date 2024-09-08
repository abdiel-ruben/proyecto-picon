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
      <h3>Comercial Jhon Erick de Leonidas Lazaro Zarete</h3>
      <p>Contáctenos: 931 397 346 - 925 362 093</p>
      <p>Dirección: Plazuela Virgen del Carmen N° 269, Llata - Huamalíes - Huánuco</p>
      <p>&copy; 2024 Comercial Jhon Erick. Todos los derechos reservados.</p>
      
      <div className="footer-desarrollo">
        <div className="footer-redes">
          <h6><b>DESARROLLADO POR: </b>ING. Picon Reyes Abdiel Ruben</h6>
          <p>Si tienes alguna consulta no olvides de contactarme a través de mis redes sociales: </p>
          <div className="footer-redes-imagen">
            <a href="https://w.app/piconreyes">
              <p><img src={whatsappIcon} alt="WhatsApp Icon" className="header-icon" />WhatsApp.</p>
            </a>
            <a href="https://web.facebook.com/">
              <p><img src={fasebookIcon} alt="Facebook Icon" className="header-icon" />Facebook.</p>
            </a>
            <a href="https://www.tiktok.com/">
              <p><img src={tiktokIcon} alt="TikTok Icon" className="header-icon" />TikTok.</p>
            </a>
            <a href="https://www.instagram.com/">
              <p><img src={instagramIcon} alt="Instagram Icon" className="header-icon" />Instagram.</p>
            </a>
            <a href="https://www.instagram.com/">
              <p><img src={llamadaIcon} alt="Instagram Icon" className="header-icon" />llamada.</p>
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
