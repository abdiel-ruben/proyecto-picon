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
        <h2 className="main-titulo">CONTACTO</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio laborum harum iste sequi architecto. Sapiente quos natus consequuntur veniam neque illo delectus debitis maxime distinctio reiciendis! Doloremque fugit dolores aliquid? </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus placeat doloremque quam nulla atque. Magni enim obcaecati illo. Neque iusto voluptatum placeat? Qui asperiores facere dolore voluptas deserunt repudiandae unde!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio laborum harum iste sequi architecto. Sapiente quos natus consequuntur veniam neque illo delectus debitis maxime distinctio reiciendis! Doloremque fugit dolores aliquid? </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus placeat doloremque quam nulla atque. Magni enim obcaecati illo. Neque iusto voluptatum placeat? Qui asperiores facere dolore voluptas deserunt repudiandae unde!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio laborum harum iste sequi architecto. Sapiente quos natus consequuntur veniam neque illo delectus debitis maxime distinctio reiciendis! Doloremque fugit dolores aliquid? </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus placeat doloremque quam nulla atque. Magni enim obcaecati illo. Neque iusto voluptatum placeat? Qui asperiores facere dolore voluptas deserunt repudiandae unde!</p>
      </main>
      
      <Footer />
    </div>
  );
}

export default DecoracionPinkoween;
