import React from 'react'

//Componentes
import Footer from '../Components/sections/Footer.jsx'

//Assets
import cortinas from '../assets/decoraciones/curtains.png'
import mario from '../assets/marioeddy3.png'
import titere_1 from '../assets/titeres-1.png'
import titere_2 from '../assets/titeres5.png'
import obra from '../assets/obra3.png'

const Collection = () => {
  return (
    <div className='museum-background'>
      <main>
        <div className='position-relative'>
          {/* Header y Cortinas */}
          <div className='position-relative collection-page-div'>
            <img src={cortinas} alt="cortinas" className='position-absolute w-100 mt-5'/>
            <div className='position-absolute collection-header'>
              <h2 className='subtitle-font collection-title'>Colección</h2>
              <div className="row position-absolute collection-links" style={{zIndex : 2}}>
                <div className='col-4 text-center caption-font'><a className='c-link' href="/autores">Autores</a></div>
                <div className='col-4 text-center caption-font'><a className='c-link' href="/obras">Obras</a></div>
                <div className='col-4 text-center caption-font'><a className='c-link' href="/titeres">Títeres</a></div>
              </div>   
            </div>
            { /* Decoración */ }
            <div className="position-relative" id="collection-decoration-div" style={{zIndex : 1}}>
              <div className="row position-relative" style={{minHeight: '53vh'}}>
                <img src={mario} alt="mario" className='collection-decoration' id='collection-mario' />
                <img src={titere_1} alt="titere" className='collection-decoration' id='collection-titere-1'/>
                <img src={titere_2} alt="titere" className='collection-decoration' id='collection-titere-2'/>
                <img src={obra} alt="papagayo" className='collection-decoration' id='collection-obra' />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Collection
