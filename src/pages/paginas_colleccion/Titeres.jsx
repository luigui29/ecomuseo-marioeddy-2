import React from 'react'
import { getTiteres } from '../../Components/utils/ApiFun.js'
import { useEffect, useState } from 'react'
import styles from './Titeres.module.css'


const TitereItem = ({ titere }) => {
  // Verificar si titere existe
  if (!titere) {
    return (
      <div className={`container ${styles.collectionItemContainer} w-75`}>
        <div className='text-center p-5'>
          <h3>No hay datos disponibles</h3>
        </div>
      </div>
    )
  }

  // Obtener valores con fallbacks
  const imagen = titere.imagen || 'https://picsum.photos/600/400?random=3'
  const nombre = titere.descripcion || 'Títere sin nombre'
  const caracteristicas = titere.caracteristicas
  const obras = titere.obras || []

  return (
    <div className={`container ${styles.collectionItemContainer} w-75`}>
      <div className='container'>
        <div className='row'>
          <div className={`col-8 pe-0 ${styles.itemImageContainer}`}>
            <img src={imagen} alt={nombre} className={`item-image ${styles.itemImage}`} />
          </div>
          <div className={`col-4 ${styles.itemContent}`}>
            <h2 className={`item-title ${styles.itemTitle}`}>{nombre}</h2>
            <h3 className={`item-title ${styles.itemTitle}`}>{caracteristicas}</h3>
          </div>
        </div>
        
        {Array.isArray(obras) && (
          <div className={styles.relatedSection}>
            <div className={styles.relatedHeader}>Obras</div>
            <div className={styles.relatedContent}>
              {obras.length > 0 ? (
                obras.map((obra, index) => {
                  // Manejar diferentes formatos de datos de obra
                  let tituloObra;
                  if (typeof obra === 'string') {
                    tituloObra = obra;
                  } else if (typeof obra === 'object') {
                    // Si es un objeto, intentar obtener el título de la obra
                    tituloObra = obra.titulo  || JSON.stringify(obra);
                  } else {
                    tituloObra = 'Obra desconocida';
                  }
                  
                  return (
                    <div key={`obra-${index}`} className={styles.relatedItem}>{tituloObra}</div>
                  );
                })
              ) : (
                <div className={styles.relatedItem}>No hay obras disponibles</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const Titeres = () => {
  const [titeres, setTiteres] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTiteres = async () => {
      try {
        setLoading(true)
        const response = await getTiteres()
        // Verificamos que la respuesta tenga la estructura esperada
        if (response && response.success && Array.isArray(response.data)) {
          setTiteres(response.data)
        } else {
          console.error('Los datos de títeres no tienen el formato esperado:', response)
          setTiteres([])
          setError('Los datos recibidos no tienen el formato esperado')
        }
      } catch (err) {
        console.error('Error al cargar títeres:', err)
        setError('Error al cargar los datos de títeres')
      } finally {
        setLoading(false)
      }
    }
    fetchTiteres()
  }, [])

  if (loading) {
    return (
      <div className='museum-background'>
        <div className="pb-5" style={{paddingTop: "12rem"}}>
          <div className="text-center text-white">
            <h3>Cargando títeres...</h3>
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
    )
  }

  return (
    <div className='museum-background'>
      <div className={styles.titeresContainer}>
        <div className="pb-5" style={{paddingTop: "12rem"}}>
          {loading && (
            <div className={styles.loading}>
              <h3>Cargando títeres...</h3>
            </div>
          )}

          {error && (
            <div className={styles.error}>
              <h3>Error: {error}</h3>
              <p>Por favor, intenta nuevamente más tarde.</p>
            </div>
          )}

          {!loading && !error && titeres.length === 0 && (
            <div className="text-center text-white">
              <h3>No hay títeres disponibles</h3>
            </div>
          )}

          {titeres.length > 0 && (
            titeres.map((titere, index) => (
              <TitereItem key={titere.id || `titere-${index}`} titere={titere} />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Titeres