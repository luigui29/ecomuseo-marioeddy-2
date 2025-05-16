import React from 'react'

// Components

import Hero from '../Components/Hero.jsx'
import CardMap from '../Components/CardMap.jsx'
import Footer from '../Components/sections/Footer.jsx'

// Assets
import decoracion_i from '../assets/decoraciones/DecoracionIzquierda.png'
import decoracion_d from '../assets/decoraciones/DecoracionDerecha.png'
import titere_1 from '../assets/titeres-1.png'
import titere_2 from '../assets/titeres-2.png'
import eddy_foto from '../assets/eddy-salazar-foto-1.jpg'
import mario_foto from '../assets/mario-pereira-foto-1.jpg'

const HomePage = () => {
  return (
    <div className="museum-background">
      <main>
        <Hero/>

        {/* Nuestro Ecomuseo */}
        <section className="my-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-auto align-items-center position-relative">
                <img 
                  src={decoracion_i} 
                  alt="decoración izquierda" 
                  className="img-fluid me-3 decoracion-titulo" 
                  id="decoracion-izquierda"
                />
                <h2 className="section-title subtitle-font mb-0 text-center position-relative homepage-titulo"><b>Nuestro EcoMuseo</b></h2>
                <img 
                  src={decoracion_d} 
                  alt="decoración derecha" 
                  className="img-fluid ms-3 decoracion-titulo" 
                  id="decoracion-derecha"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Sección Sobre Nosotros */}
        <div className='container sobre-nosotros-container'>
          <div className="row">
            <div className="col-6">
                <img className='ecomuseo-autor-img' src={eddy_foto} alt="Eddy Salazar" style={{width:"50%"}}/>
            </div>
            <div className="col-6">
                <img className='ecomuseo-autor-img' src={mario_foto} alt="Mario Pereira" style={{width:"50%"}}/>
            </div>
          </div>
          {/* Texto Historia */}
          <div className="row-6">
            <div className="row">Fundados en 2024</div>
            <div className="row">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora molestiae architecto quae, nihil eligendi sequi alias labore aut explicabo porro nemo natus ut, doloremque, consequuntur consectetur in assumenda sapiente id.</div>
          </div>
        </div>


        {/* Titeres Decorativos */}
        <div className='visitanos-div'>
          <img src={titere_1} alt="titeres" id="visitanos-titere-1"/>
          <div className='subtitle-font visitanos-text'> <b>Visítanos!</b> </div>
          <img src={titere_2} alt="titeres" id="visitanos-titere-2"/>
        </div>

        {/* Sección Ubicación */}
        <div className='ubicacion-div py-0'>
            <div className="container ubicacion-container mx-0 h-auto p-3 mw-100">
              <CardMap />
            </div>
        </div>
      </main>
      
     <Footer/>
    </div>
  )
}

export default HomePage
