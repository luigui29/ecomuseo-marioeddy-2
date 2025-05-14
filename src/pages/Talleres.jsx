import React from 'react'
import Footer from '../Components/sections/Footer.jsx'

//Assets
import taller_ecologico from '../assets/taller_ecologico.jpg'

const Talleres = () => {
  return (
    <div className='taller-background' style={{height: 'inherit'}}>
      {/* Titulo */}
      <div className="container mt-5">
        <div className="row">
          <h1 className="subtitle-font-kids">Nuestros Talleres</h1>
        </div>
      </div>

      {/* Talleres */}
      <div className='container mt-5' style={{marginBottom: '100px'}}>
        <div className="row taller-row">
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

      <Footer />
    </div>
  )
}

export default Talleres
