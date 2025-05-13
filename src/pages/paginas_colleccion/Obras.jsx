import React from 'react'
import { getObras } from '../../Components/utils/ApiFun.js'
import { useEffect, useState } from 'react'
import styles from './Obras.module.css'

const ObraItem = ({ obra }) => {
  // Verificar si obra existe
  if (!obra) {
    return (
      <div className={`container ${ styles.collectionItemContainer} w-75`}>
        <div className='text-center p-5'>
          <h3>No hay datos disponibles</h3>
        </div>
      </div>
    )
  }

  // Obtener valores con fallbacks
  const imagen = obra.imagen || 'https://picsum.photos/600/400?random=2'
  const titulo = obra.titulo || 'Obra sin título'
  
  // Manejar descripción que puede ser un objeto o string
  let descripcionTexto = 'No hay descripción disponible'
  if (obra.descripcion) {
    if (typeof obra.descripcion === 'string') {
      descripcionTexto = obra.descripcion
    } else if (typeof obra.descripcion === 'object') {
      // Si es un objeto, intentar convertirlo a string o usar una propiedad relevante
      descripcionTexto = obra.descripcion.texto || JSON.stringify(obra.descripcion)
    }
  }
  
  // Normalizar autores para evitar renderizar objetos
  let autoresArray = [];
  if (Array.isArray(obra.autores)) {
    autoresArray = obra.autores;
  } else if (obra.autores && typeof obra.autores === 'object') {
    // Si es un objeto único, ponerlo en un array
    autoresArray = [obra.autores];
  } else if (typeof obra.autores === 'string') {
    // Si es un string, ponerlo en un array
    autoresArray = [obra.autores];
  }

  // Debug: Ver los datos de autores
  console.log('Datos de autores:', obra.autores);
  
  // Extraer nombres de autores, si existen
  const autoresTexto = autoresArray.map(a => {
    // Si es un string, usarlo directamente
    if (typeof a === 'string') return a;
    // Si es un objeto, usar la propiedad autor.descripcion si existe
    if (typeof a === 'object' && a !== null) {
      return a.autor?.descripcion || '';
    }
    return '';
  }).filter(Boolean).join(', ') || 'Autor desconocido';

  // Debug: Ver los datos de actores
  console.log('Datos de actores:', obra.actores);
  
  // Normalizar actores para evitar renderizar objetos
  let actoresArray = [];
  if (Array.isArray(obra.actores)) {
    actoresArray = obra.actores;
  } else if (obra.actores && typeof obra.actores === 'object') {
    actoresArray = [obra.actores];
  } else if (typeof obra.actores === 'string') {
    actoresArray = [obra.actores];
  }
  // Extraer nombres de actores, si existen
  const actoresTexto = actoresArray.map(a => {
    // Si es un string, usarlo directamente
    if (typeof a === 'string') return a;
    // Si es un objeto, usar la propiedad actor.descripcion si existe
    if (typeof a === 'object' && a !== null) {
      return a.actor?.descripcion || '';
    }
    return '';
  }).filter(Boolean).join(', ') || 'Actor desconocido';

  const anio = obra.anio || '';

  return (
    <div className={`container ${styles.collectionItemContainer} ${styles.w75}`}>
      <div className='container'>
        <div className='row'>
          <div className={`col-8 pe-0 ${styles.itemImageContainer}`}>
            <img src={imagen} alt={titulo} className={`item-image ${styles.itemImage}`} />
          </div>
          <div className={`col-4 ${styles.itemContent}`}>
            <h2 className={`item-title ${styles.itemTitle}`}>{titulo}</h2>
            {anio && <div className={`item-year ${styles.itemYear}`}>Año: {anio}</div>}
            <div className={`item-description ${styles.itemDescription}`}>
              {descripcionTexto}
            </div>
          </div>
        </div>
        
        {autoresTexto.length > 0 && (
          <div className={styles.relatedSection}>
            <div className={styles.relatedHeader}>Autores</div>
            <div className={styles.relatedContent}>
              <div className={styles.relatedItem}>{autoresTexto}</div>
            </div>
          </div>
        )}
        {actoresTexto.length > 0 && (
          <div className={styles.relatedSection}>
            <div className={styles.relatedHeader}>Actores</div>
            <div className={styles.relatedContent}>
              <div className={styles.relatedItem}>{actoresTexto}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const Obras = () => {
  const [obras, setObras] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchObras = async () => {
      try {
        setLoading(true)
        const response = await getObras()
        // Verificamos que la respuesta tenga la estructura esperada
        if (response && response.success && Array.isArray(response.data)) {
          setObras(response.data)
        } else {
          console.error('Los datos de obras no tienen el formato esperado:', response)
          setObras([])
          setError('Los datos recibidos no tienen el formato esperado')
        }
      } catch (err) {
        console.error('Error al cargar obras:', err)
        setError('Error al cargar los datos de obras')
      } finally {
        setLoading(false)
      }
    }
    fetchObras()
  }, [])

  if (loading) {
    return (
      <div className='museum-background'>
        <div className={styles.obrasContainer}>
          <div className="pb-5" style={{paddingTop: "12rem"}}>
            <div className="text-center text-white">
              <h3>Cargando obras...</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className='museum-background'>
        <div className={styles.obrasContainer}>
          <div className="pb-5" style={{paddingTop: "12rem"}}>
            <div className="text-center text-white">
              <h3>Error: {error}</h3>
              <p>Por favor, intenta nuevamente más tarde.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='museum-background'>
      <div className={styles.obrasContainer}>
        <div className="pb-5" style={{paddingTop: "12rem"}}>
          {loading && (
            <div className={styles.loading}>
              <h3>Cargando obras...</h3>
            </div>
          )}

          {error && (
            <div className={styles.error}>
              <h3>Error: {error}</h3>
              <p>Por favor, intenta nuevamente más tarde.</p>
            </div>
          )}

          {!loading && !error && obras.length === 0 && (
            <div className="text-center text-white">
              <h3>No hay obras disponibles</h3>
            </div>
          )}
          {obras.length > 0 ? (
            obras.map((obra, index) => (
              <ObraItem key={obra.id || `obra-${index}`} obra={obra} />
            ))
          ) : (
            <div className="text-center text-white">
              <h3>No hay obras disponibles</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Obras