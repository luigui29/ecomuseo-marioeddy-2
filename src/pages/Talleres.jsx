import React from 'react'
import Footer from '../Components/sections/Footer.jsx'

//Assets
import taller_ecologico from '../assets/taller_ecologico.jpg'
import flores_derecha from '../assets/decoraciones/flower-side-right.png'
import flores_izquierda from '../assets/decoraciones/flower-side-left.png'

const Talleres = () => {
  return (
    <div className='taller-background'>
      {/* Titulo y Descripcion */}
      <div className="container my-5 mx-auto" style={{paddingTop: '100px'}}>
        <div className="container-fluid">
          <div className="row">
            <h1 className="subtitle-font-kids">Nuestros Talleres</h1>
          </div>
          <div className="row taller-desc">
            El Ecomuseo Marioeddy ofrece varios talleres recreativos donde los jovenes pueden nutrirse y vivir el arte del teatro de titeres. A continuación se muestran los talleres disponibles actualmente y un formulario donde puede inscribirse a los talleres.
          </div>
        </div>
      </div>

      {/* Indicadores de Disponibilidad */}
      <div className="container-fluid">
        <div className="container mx-auto taller-desc">
          <div className="row">
            <div className="col-4"> {/* Indicador de Disponible */}
              <div className="row d-flex align-items-center justify-content-center">
                <div className="col-2 w-auto p-0 pb-2 d-flex justify-content-center"><div className="dibujo-disponible"></div></div>
                <div className="col-10 disponible-text">Disponible</div>
              </div>
            </div>
            <div className="col-4"> {/* Indicador de Pronto Disponible */}
              <div className="row d-flex align-items-center justify-content-center">
                <div className="col-2 w-auto p-0 pb-2 d-flex justify-content-center"><div className="dibujo-pronto"></div></div>
                <div className="col-10 disponible-text">Pronto Disponible</div>
              </div>
            </div>
            <div className="col-4"> {/* Indicador de No Disponible */}
              <div className="row d-flex align-items-center justify-content-center">
                <div className="col-2 w-auto p-0 pb-2 d-flex justify-content-center"><div className="dibujo-nodisponible"></div></div>
                <div className="col-10 disponible-text">No Disponible</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Talleres Disponibles */}
      <div className="container-fluid my-5">
        <div className="container m-auto taller-container">
          <div className="row taller-disponible-row mx-auto my-5 p-2">
            <div className="col-10">
              <div className="taller-disponible-title">
                Esperando por Titulo de Taller
              </div>
            </div>
            <div className="col-2">
              <div className="taller-disponible-circle ms-auto"></div>
            </div>
          </div>
          <div className="row taller-disponible-row mx-auto my-5 p-2">
            <div className="col-10">
              <div className="taller-disponible-title">
                Esperando por Titulo de Taller
              </div>
            </div>
            <div className="col-2">
              <div className="taller-disponible-circle ms-auto"></div>
            </div>
          </div>
          <div className="row taller-disponible-row mx-auto my-5 p-2">
            <div className="col-10">
              <div className="taller-disponible-title">
                Esperando por Titulo de Taller
              </div>
            </div>
            <div className="col-2">
              <div className="taller-disponible-circle ms-auto"></div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Talleres
