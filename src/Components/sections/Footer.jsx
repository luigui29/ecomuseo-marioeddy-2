import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="text-white py-4 position-relative" style={{zIndex: "99"}}>
        <div className="container text-center">
          <p>  Ecomuseo de Títeres Marioeddy - Todos los derechos reservados</p>
          <div className="social-links mt-3">
            <a href="#" className="text-white mx-2"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-white mx-2"><i className="bi bi-instagram"></i></a>
            <a href="#" className="text-white mx-2"><i className="bi bi-whatsapp"></i></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
