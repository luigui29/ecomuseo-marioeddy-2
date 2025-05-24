import React from 'react';
import styles from './Titeres.module.css'; // Asumiendo que tienes un archivo CSS para Actores
import decoracion from '../../assets/anillo_dorado_1.png'

const TitereItem = ({ actor }) => {
  if (!actor) {
    return (
      <div className='container collection-item-container w-75'>
        <div className='text-center p-5'>
          <h3>No hay datos disponibles para este actor.</h3>
        </div>
      </div>
    );
  }

  const imagen = actor.imagen || 'https://picsum.photos/600/400?random=2'; // Diferente random para actores
  const nombre = actor.descripcion || 'Actor sin nombre';
  const caracteristicas = actor.caracteristicas || 'Sin características.'; // Usas 'caracteristicas' para actores
  
  // Las obras ya vienen anidadas y formateadas desde el backend (gracias al modelo Actor.js)
  const obras = actor.obras || [];

  return (
    <div className={`container ${styles.collectionItemContainer} w-75 my-5`}>
      <div className='container'>
        <div className='row pt-3'>
          <div className={`col-md-8 px-0 ${styles.itemImageContainer}`}>
            <img src={imagen} alt={nombre} className={`${styles.itemImage}`}/>
          </div>
          <div className={`col-md-4 d-flex flex-column ${styles.itemContent}`}>
            <h2 className={`ps-2 mb-0 ${styles.itemTitle}`}>{nombre}</h2>
            <p className={`p-1 pb-0 mb-0 ${styles.itemDescription}`}>{caracteristicas}</p>
          </div>
        </div>
        
        {Array.isArray(obras) && (
          <div className={`pb-3 ${styles.relatedSection}`}>
            <div className={`${styles.relatedHeader}`}>Obras en las que participa</div> {/* Texto más descriptivo */}
            <div className={`${styles.relatedContent}`}>
              {obras.length > 0 ? (
                obras.map((obra, index) => {
                  // 'obra' ya es el objeto 'history' gracias al re-formateo del backend
                  const tituloObra = obra.titulo || 'Obra sin título';
                  return (
                    <div key={obra.idhistory || `obra-${index}`} className={`${styles.relatedItem}`}>{tituloObra}</div>
                  );
                })
              ) : (
                <div className={`${styles.relatedItem}`}>No hay obras asociadas a este actor.</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TitereItem;