import React from 'react'
import { getAutores } from '../../Components/utils/ApiFun.js'
import { useEffect, useState } from 'react'
import './Autores.module.css'

const AutorItem = ({ autor }) => {
  // Verificar si autor existe
  if (!autor) {
    return (
      <div className='container collection-item-container w-75'>
        <div className='text-center p-5'>
          <h3>No hay datos disponibles</h3>
        </div>
      </div>
    )
  }

  // Obtener valores con fallbacks
  const imagen = autor.imagen || 'https://picsum.photos/600/400?random=1'
  const nombre = autor.descripcion || 'Autor sin nombre'
  
  const obras = autor.obras || []

  return (
    <div className='container collection-item-container w-75'>
      <div className='container'>
        <div className='row'>
          <div className="col-8 pe-0 item-image-container">
            <img src={imagen} alt={nombre} className='item-image'/>
          </div>
          <div className="col-4 item-content">
            <h2 className="item-title">{nombre}</h2>
          </div>
        </div>
        
        {Array.isArray(obras) && (
          <div className='related-section'>
            <div className="related-header">Obras</div>
            <div className="related-content">
              {obras.length > 0 ? (
                obras.map((obra, index) => {
                  // Manejar diferentes formatos de datos de obra
                  let tituloObra;
                  if (typeof obra === 'string') {
                    tituloObra = obra;
                  } else if (typeof obra === 'object') {
                    // Si es un objeto, intentar obtener el título de la obra
                    tituloObra = obra.titulo || obra.nombre || JSON.stringify(obra);
                  } else {
                    tituloObra = 'Obra desconocida';
                  }
                  
                  return (
                    <div key={`obra-${index}`} className='related-item'>{tituloObra}</div>
                  );
                })
              ) : (
                <div className='related-item'>No hay obras disponibles</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const Autores = () => {
  const [autores, setAutores] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchAutores = async () => {
      try {
        setLoading(true)
        const response = await getAutores()
        // Verificamos que la respuesta tenga la estructura esperada
        if (response && response.success && Array.isArray(response.data)) {
          setAutores(response.data)
        } else {
          console.error('Los datos de autores no tienen el formato esperado:', response)
          setAutores([])
          setError('Los datos recibidos no tienen el formato esperado')
        }
      } catch (err) {
        console.error('Error al cargar autores:', err)
        setError('Error al cargar los datos de autores')
      } finally {
        setLoading(false)
      }
    }
    fetchAutores()
  }, [])

  if (loading) {
    return (
      <div className='museum-background'>
        <div className="pb-5" style={{paddingTop: "12rem"}}>
          <div className="text-center text-white">
            <h3>Cargando autores...</h3>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className='museum-background'>
        <div className="pb-5" style={{paddingTop: "12rem"}}>
          <div className="text-center text-white">
            <h3>Error: {error}</h3>
            <p>Por favor, intenta nuevamente más tarde.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='museum-background'>
      <div className="pb-5" style={{paddingTop: "12rem"}}>
        {autores.length > 0 ? (
          autores.map((autor, index) => (
            <AutorItem key={autor.id || `autor-${index}`} autor={autor} />
          ))
        ) : (
          <div className="text-center text-white">
            <h3>No hay autores disponibles</h3>
          </div>
        )}
      </div>
    </div>
  )
}

export default Autores
