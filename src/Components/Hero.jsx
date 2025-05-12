import React from 'react';
import imagenPrincipal from '../assets/img-principal.jpeg';
import imagenAfuera from '../assets/ecomuseo-carousel-2.jpg';
import imagenTaller from '../assets/ecomuseo-carousel-3.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-section mt-5">
      <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <div className="hero-container">
              <img src={imagenAfuera} alt="Entrada del Ecomuseo" className="hero-image" />
              <div className="hero-overlay"></div>
            </div>
            <div className="hero-content animate__animated animate__fadeIn">
              <h2 className="hero-title">Ecomuseo de Títeres Marioeddy</h2>
              <p className="hero-subtitle">Para ser Titiritero vivirás la historia de un viajero...</p>
              <button className="hero-button">Conoce más</button>
            </div>
          </div>
          
          <div className="carousel-item" data-bs-interval="5000">
            <div className="hero-container">
              <img src={imagenPrincipal} alt="Exhibición de títeres" className="hero-image" />
              <div className="hero-overlay"></div>
            </div>
            <div className="hero-content animate__animated animate__fadeIn">
              <h2 className="hero-title">Nuestra Colección</h2>
              <p className="hero-subtitle">Descubre títeres tradicionales de Venezuela y Latinoamérica</p>
              <button className="hero-button">Conoce más</button>
            </div>
          </div>
          
          <div className="carousel-item">
            <div className="hero-container">
              <img src={imagenTaller} alt="Taller de títeres" className="hero-image" />
              <div className="hero-overlay"></div>
            </div>
            <div className="hero-content animate__animated animate__fadeIn">
              <h2 className="hero-title">Talleres Educativos</h2>
              <p className="hero-subtitle">Aprende sobre el arte en el mundo con nuestros maestros</p>
              <button className="hero-button">Conoce más</button>
            </div>
          </div>
        </div>
        
        <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
