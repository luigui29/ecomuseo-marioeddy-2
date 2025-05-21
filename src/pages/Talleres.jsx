import React from 'react'
import Footer from '../Components/sections/Footer.jsx'

//Assets
import taller_ecologico from '../assets/taller_ecologico.jpg'
import flores_derecha from '../assets/decoraciones/flower-side-right.png'
import flores_izquierda from '../assets/decoraciones/flower-side-left.png'

const Talleres = () => {
  return (
    <div className='taller-background d-flex flex-column'>
      {/* Titulo */}
      <div className="container" style={{paddingTop: '100px'}}>
        <div className="row">
          <h1 className="subtitle-font-kids">Nuestros Talleres</h1>
        </div>
      </div>

      {/* Descripcion */}
      <div className="container taller-container" style={{paddingTop: '50px'}}>
        <div className="row">
          <div className="col-12 taller-caption">Brigada Ecológica Protectores del Verde Azul</div>
        </div>
        <div className="row">
          <div className="col-12 taller-desc"><b>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</b></div>
        </div>
      </div>

      {/* Taller */}
      <div className='container taller-container-pc position-relative' style={{marginTop: '100px', marginBottom: '100px'}}>

        <div inert={'true'}>
          <img className='position-absolute taller-decoracion' id='taller-decoracion-d' src={flores_derecha} alt="flores" />
        </div>

        <div inert={'true'}>
          <img className='position-absolute taller-decoracion' id='taller-decoracion-i' src={flores_izquierda} alt="flores" />
        </div>

        <div className="row taller-row-pc">
          <div className='col-6 pe-0'>
            <div className='taller-div h-100'>
              <iframe style={{minHeight: '100%', width: '100%'}} src="https://docs.google.com/forms/d/e/1FAIpQLScd7-vm54f7iegNZU5jypWoQejxwE_09EQ48WtSeOHYL_hh-g/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
            </div>
          </div>
          <div className="col-6 ps-0">
            <img className="img-fluid taller-img" src={taller_ecologico} alt="taller ecologico"/>
          </div>
        </div>
      </div>

      <div className="container taller-container-mobile my-5">
        <div className="row taller-row-mobile">
          <div className="col-12 px-5">
            <img className="img-fluid taller-img" src={taller_ecologico} alt="taller ecologico"/>
          </div>
        </div>
        <div className="row taller-row-mobile">
          <div className="col-12 px-5">
            <div className='taller-div h-100'>
              <iframe style={{minHeight: '100%', width: '100%'}} src="https://docs.google.com/forms/d/e/1FAIpQLScd7-vm54f7iegNZU5jypWoQejxwE_09EQ48WtSeOHYL_hh-g/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Talleres
