import React from 'react'
import { getAutores } from '../../Components/utils/ApiFun.js'
import { useEffect, useState } from 'react'
import styles from './Autores.module.css'
import decoracion from '../../assets/anillo_dorado_1.png'

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
  const reseña  = autor.resenia
  
  const obras = autor.obras || []

  return (
    <div className={`container ${styles.collectionItemContainer} w-75 my-5`}>
      <div className='container'>
        <div className='row pt-3'>
          <div className={`col-md-8 px-0 d-flex position-relative ${styles.itemImageContainer}`}>
            <img src={decoracion} alt="decoracion" className={`position-absolute ${styles.decoracionImage}`}/>
            <img src={imagen} alt={nombre} className={`position-absolute ${styles.itemImage}`}/>
          </div>
          <div className={`col-md-4 d-flex flex-column ${styles.itemContent}`}>
            <h2 className={`ps-2 mb-0 ${styles.itemTitle}`}>{nombre}</h2>
            <h3 className={`p-1 pb-0 mb-0 ${styles.itemDescription}`}>{reseña}</h3>
          </div>
        </div>
        
        {Array.isArray(obras) && (
          <div className={`pb-3 ${styles.relatedSection}`}>
            <div className={`${styles.relatedHeader}`}>Obras</div>
            <div className={`${styles.relatedContent}`}>
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
                    <div key={`obra-${index}`} className={`${styles.relatedItem}`}>{tituloObra}</div>
                  );
                })
              ) : (
                <div className={`${styles.relatedItem}`}>No hay obras disponibles</div>
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
          setError('Los datos recibidos no tienen el formato esperado o la API falló.')
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
          <div className={styles.loading}>
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
          <div className={styles.error}>
            <h3>Error: {error}</h3>
            <p>Por favor, intenta nuevamente más tarde.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='museum-background'>
      <div className="container-fluid subtitle-font position-absolute" style={{marginTop: '100px', textAlign: 'center'}}>
        Autores
      </div>
      <div className="pb-5" style={{paddingTop: "12rem"}}>
        {autores.length > 0 ? (
          autores.map((autor, index) => (
            <AutorItem key={autor.id || `autor-${index}`} autor={autor} />
          ))
        ) : (
          <div className={styles.loading}>
            <h3>No hay autores disponibles</h3>
          </div>
        )}
      </div>
    </div>
  )
}

export default Autores
