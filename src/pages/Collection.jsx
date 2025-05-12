import React from 'react'

//Componentes
import Footer from '../Components/sections/Footer.jsx'

//Assets
import cortinas from '../assets/decoraciones/curtains.png'
import titiriteros from '../assets/titiriteros-1.png'

const Collection = () => {
  return (
    <div className='museum-background' style={{height: "inherit"}}>
      <main style={{height: "inherit"}}>
        <div className='position-relative' style={{height: "inherit"}}>
          {/* Header y Cortinas */}
          <div className='position-relative museum-background' style={{height: "100vh", overflow: "hidden"}}>
            <img src={cortinas} alt="cortinas" className='position-absolute w-100 mt-5'/>
            <h2 className='position-absolute subtitle-font collection-title mb-0'>Colección</h2>      
          </div>
          { /* Ir a Colección */}
          <div className="row position-absolute collection-links">
            <div className='col-4 text-center'>
              <div className="row-2">
                <a href="/autores">autores</a>
              </div>
              <div className="row-10">
                <img src={titiriteros} alt="titiriteros" style={{width: "30%"}}/>
              </div>
            </div>
            <div className='col-4 text-center'><a href="/obras">obras</a></div>
            <div className='col-4 text-center'><a href="/titeres">títeres</a></div>
          </div> 
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Collection
