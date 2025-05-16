import React from 'react'

const Mapa = () => {
  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col-lg-8 col-md-10 col-12 w-100">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.4649257255655!2d-62.6747762!3d8.355839999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8dcbf1234fb908ef%3A0xa659cebc201d1e41!2sCasa%20de%20la%20Cultura%20Ateneo%20de%20Ciudad%20Guayana!5e0!3m2!1ses-419!2sve!4v1745794614919!5m2!1ses-419!2sve"
            loading="lazy"
            width="100%"
            height="100%">
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default Mapa
