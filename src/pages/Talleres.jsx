import React from 'react'
import Footer from '../Components/sections/Footer.jsx'
import { getTalleres } from '../Components/utils/ApiFun.js'
import { useEffect, useState } from 'react'


//Assets
import taller_ecologico from '../assets/taller_ecologico.jpg'
import flores_derecha from '../assets/decoraciones/flower-side-right.png'
import flores_izquierda from '../assets/decoraciones/flower-side-left.png'

const Talleres = () => {
  const [talleres, setTalleres] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTalleres = async () => {
      try {
        const response = await getTalleres()
        // Verificamos que la respuesta tenga la estructura esperada
        if (response && response.success && Array.isArray(response.data)) {
          setTalleres(response.data)
        } else {
          console.error('Los datos de talleres no tienen el formato esperado:', response)
          setTalleres([])
          setError('Los datos recibidos no tienen el formato esperado o la API falló.')
        }
      } catch (err) {
        console.error('Error al cargar talleres:', err)
        setError('Error al cargar los datos de talleres')
      } finally {
        setLoading(false)
      }
    }
    fetchTalleres()
  }, [])
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
    {talleres.length > 0 ? (
      talleres.map((taller, index) => (
        <div key={taller.id || `taller-${index}`} className="row taller-disponible-row mx-auto my-4 p-3 align-items-center border rounded shadow-sm">
          <div className="col-10">
            <div className="taller-disponible-title fs-5 fw-bold">
              {taller.descripcion}
            </div>
          </div>
          <div className="col-2 d-flex justify-content-end align-items-center"> {/* Use flexbox to center/end the circle */}
            {/* Dynamic Colored Circle */}
            <div
              className={`rounded-circle p-2 me-2 ${ // rounded-circle makes it a circle, p-2 adds padding (size), me-2 adds margin-right
                taller.disponibilidad === 'DISPONIBLE' ? 'bg-success' :
                taller.disponibilidad === 'OCUPADO' ? 'bg-danger' :
                taller.disponibilidad === 'PROXIMAMENTE' ? 'bg-warning' :
                'bg-secondary' // Default color
              }`}
              style={{ width: '20px', height: '20px' }} // Explicitly define size
              title={taller.disponibilidad} // Add a tooltip for accessibility
            >
              {/* This div is intentionally empty, its color is its purpose */}
            </div>
          </div>
        </div>
      ))
    ) : (
      <div className="row taller-disponible-row mx-auto my-5 p-2 text-center alert alert-info">
        <div className="col-12">
          <div className="taller-disponible-title fs-5">
            No hay talleres disponibles en este momento.
          </div>
        </div>
      </div>
    )}
  </div>
</div>

      {/* Formulario */}
      <div className="container fluid my-5">
        <div className="container d-flex justify-content-center">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSczM6_UUbgBJSJHFNYXqsRtSUKyApXx-BDJfa-BIZvgJzYH_w/viewform?embedded=true" width="640" height="640" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Talleres
