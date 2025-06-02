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
              <div className="col align-items-center position-relative">
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
          <div className="container">
            <div className="row nuestro-museo-desc caption-font position-relative">
              Nace el 21 de Marzo de 2024 (Día Mundial del Títere), su nombre es una fusión en homenaje a dos legendarios del teatro del guiñol. Su fundador y director es el licenciado y titiritero Mario R. Pereira, quien es creador también del teatro de titeres especie (1987) y del festival escolar de títeres alegría (1985). Actualmente contamos con el apoyo de la Secretaria Cultural de la Gobernación del Estado Bolívar, con la asignación a tiempo completo de dos activadoras culturales, y que son a la vez guías recreadoras para atender con eficacia y eficiencia al público asistente.
            </div>
            <div className="row">
              <div className="col-6 d-flex flex-column">
                <div className='subtitle-font' style={{margin: '0 auto'}}> Visión </div>
                <div className='misvis-desc'> Ser un referente cultural en la promocion del arte de los titeres, conectando tradicion e innovacion para inspirar a diferentes generaciones. </div>
              </div>
              <div className="col-6 d-flex flex-column">
                <div className='subtitle-font' style={{margin: '0 auto'}}> Misión </div>
                <div className='misvis-desc'> Educar, entretener y preservar el patrimonio de los títeres mediante diversas experiencias interactivas, accesibles a diferentes edades. </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Sección Sobre Nosotros */}
        <div className='container sobre-nosotros-container'>
          <div className="row gx-5">
            <div className="col-md-6">
              <div className="row mt-5">
                <div className="col px-0 autor-img-col">
                  <div className="position-relative d-flex justify-content-center autor-background-fadeout">
                    <img className='ecomuseo-autor-img' src={eddy_foto} alt="Eddy Salazar"/>
                    <h3 className='position-absolute caption-font autor-caption mb-0'><span>Eddy </span><span>Salazar </span></h3>
                  </div>
                </div>
              </div>
              <div className="row d-flex flex-column historia-background">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora molestiae architecto quae, nihil eligendi sequi alias labore aut explicabo porro nemo natus ut, doloremque, consequuntur consectetur in assumenda sapiente id.
              </div>
            </div>
            <div className="col-md-6">
              <div className="row mt-5">
                <div className="col px-0 autor-img-col">
                  <div className="position-relative d-flex justify-content-center autor-background-fadeout">
                    <img className='ecomuseo-autor-img' src={mario_foto} alt="Mario Pereira"/>
                    <h3 className='position-absolute caption-font autor-caption mb-0'><span>Mario </span><span>Pereira </span></h3>
                  </div>
                </div>
              </div>
              <div className="row d-flex flex-column historia-background">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora molestiae architecto quae, nihil eligendi sequi alias labore aut explicabo porro nemo natus ut, doloremque, consequuntur consectetur in assumenda sapiente id.
              </div>
            </div>
          </div>
        </div>


        {/* Titeres Decorativos */}
        <div className='visitanos-div'>
          <img src={titere_1} alt="titeres" id="visitanos-titere-1"/>
          <div className='subtitle-font visitanos-text'> <b>Visítanos!</b> </div>
          <img src={titere_2} alt="titeres" id="visitanos-titere-2"/>
        </div>

        {/* Sección Ubicación */}
        <div className='ubicacion-div' id="ubicacion">
            <div className="container ubicacion-container mx-0 h-auto mw-100">
              <CardMap />
            </div>
        </div>
      </main>
      
      <Footer/>
    </div>
  )
}

export default HomePage
