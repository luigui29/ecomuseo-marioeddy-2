import React from 'react';
import { getObras, getTiteres, getAutores } from '../../Components/utils/ApiFun.js'; 
import { useEffect, useState } from 'react';
import styles from './Obras.module.css';


const ObraItem = ({ obra, allActors, allAuthors }) => {
  if (!obra) {
    return (
      <div className={`container ${styles.collectionItemContainer} w-75`}>
        <div className='text-center p-5'>
          <h3>No hay datos disponibles</h3>
        </div>
      </div>
    );
  }

  const imagen = obra.imagen || 'https://picsum.photos/600/400?random=2';
  const titulo = obra.titulo || 'Obra sin título';

  let descripcionTexto = 'No hay descripción disponible';
  if (obra.descripcion) {
    if (typeof obra.descripcion === 'string') {
      descripcionTexto = obra.descripcion;
    } else if (typeof obra.descripcion === 'object' && obra.descripcion !== null) {
      descripcionTexto = obra.descripcion.texto || JSON.stringify(obra.descripcion);
    }
  }

  // --- OBTENER ACTOR PRINCIPAL ---
  // El ID del actor principal viene directamente en el objeto 'obra'
  const idActorPrincipal = obra.idactor;
  let nombreActorPrincipal = 'Actor principal desconocido';
  if (idActorPrincipal && allActors && Array.isArray(allActors)) {
    const foundActor = allActors.find(actor => actor.idactor === idActorPrincipal);
    if (foundActor) {
      nombreActorPrincipal = foundActor.descripcion;
    }
  }

  // --- OBTENER AUTOR PRINCIPAL ---
  // El ID del autor principal viene directamente en el objeto 'obra'
  const idAutorPrincipal = obra.idautor;
  let nombreAutorPrincipal = 'Autor principal desconocido';
  if (idAutorPrincipal && allAuthors && Array.isArray(allAuthors)) {
    const foundAuthor = allAuthors.find(author => author.idautor === idAutorPrincipal);
    if (foundAuthor) {
      nombreAutorPrincipal = foundAuthor.descripcion;
    }
  }

  // --- PROCESAR ACTORES ADICIONALES (del array anidado 'actores') ---
  let actoresAdicionalesTexto = '';
  if (Array.isArray(obra.actores) && obra.actores.length > 0) {
    // Filtramos los actores anidados para excluir el principal (si es que aparece ahí también)
    // y mapeamos a sus descripciones
    const filteredActores = obra.actores
      .filter(a => a.idactor !== idActorPrincipal) // Excluye al actor principal ya manejado
      .map(a => a.actor?.descripcion) // Accede a la descripción dentro del objeto 'actor' anidado
      .filter(Boolean); // Elimina valores nulos/vacíos

    actoresAdicionalesTexto = filteredActores.join(', ');
  }

  // --- PROCESAR AUTORES ADICIONALES (del array anidado 'autores') ---
  let autoresAdicionalesTexto = '';
  if (Array.isArray(obra.autores) && obra.autores.length > 0) {
    // Filtramos los autores anidados para excluir el principal (si es que aparece ahí también)
    // y mapeamos a sus descripciones
    const filteredAutores = obra.autores
      .filter(a => a.idautor !== idAutorPrincipal) // Excluye al autor principal ya manejado
      .map(a => a.autor?.descripcion) // Accede a la descripción dentro del objeto 'autor' anidado
      .filter(Boolean); // Elimina valores nulos/vacíos

    autoresAdicionalesTexto = filteredAutores.join(', ');
  }

  return (
    <div className={`container ${styles.collectionItemContainer} ${styles.w75}`}>
      <div className='container'>
        <div className='row pt-3'>
          <div className={`col-md-8 px-0 ${styles.itemImageContainer}`}>
            <img src={imagen} alt={titulo} className={`item-image ${styles.itemImage}`} />
          </div>
          <div className={`col-md-4 ${styles.itemContent}`}>
            <h2 className={`${styles.itemTitle}`}>{titulo}</h2>
            <div className={`${styles.itemDescription}`}>
              {descripcionTexto}
            </div>
          </div>
        </div>

        {/* Sección de Autor Principal */}
        {nombreAutorPrincipal && nombreAutorPrincipal !== 'Autor principal desconocido' && (
          <div className={styles.relatedSection}>
            <div className={styles.relatedHeader}>Autor Principal</div>
            <div className={styles.relatedContent}>
              <div className={styles.relatedItem}>**{nombreAutorPrincipal}**</div>
            </div>
          </div>
        )}

        {/* Sección de Autores Adicionales */}
        {autoresAdicionalesTexto.length > 0 && (
          <div className={styles.relatedSection}>
            <div className={styles.relatedHeader}>Otros Autores</div>
            <div className={styles.relatedContent}>
              <div className={styles.relatedItem}>{autoresAdicionalesTexto}</div>
            </div>
          </div>
        )}

        {/* Sección de Actor Principal */}
        {nombreActorPrincipal && nombreActorPrincipal !== 'Actor principal desconocido' && (
          <div className={styles.relatedSection}>
            <div className={styles.relatedHeader}>Actor Principal</div>
            <div className={styles.relatedContent}>
              <div className={styles.relatedItem}>**{nombreActorPrincipal}**</div>
            </div>
          </div>
        )}

        {/* Sección de Actores Adicionales */}
        {actoresAdicionalesTexto.length > 0 && (
          <div className={`pb-3 ${styles.relatedSection}`}>
            <div className={styles.relatedHeader}>Otros Actores</div>
            <div className={styles.relatedContent}>
              <div className={styles.relatedItem}>{actoresAdicionalesTexto}</div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};




const Obras = () => {
  const [obras, setObras] = useState([]);
  const [allActors, setAllActors] = useState([]); // Nuevo estado para todos los actores
  const [allAuthors, setAllAuthors] = useState([]); // Nuevo estado para todos los autores
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => { // Renombrado a fetchData para cargar todo
      try {
        setLoading(true);

        // Cargar Obras
        const obrasResponse = await getObras();
        if (obrasResponse && obrasResponse.success && Array.isArray(obrasResponse.data)) {
          setObras(obrasResponse.data);
        } else {
          console.error('Los datos de obras no tienen el formato esperado:', obrasResponse);
          setObras([]);
          setError('Los datos de obras recibidos no tienen el formato esperado');
        }

        // Cargar Todos los Actores
        const actorsResponse = await getTiteres();
        if (actorsResponse && actorsResponse.success && Array.isArray(actorsResponse.data)) {
          setAllActors(actorsResponse.data);
        } else {
          console.error('Los datos de actores no tienen el formato esperado:', actorsResponse);
          setAllActors([]); // Asegurarse de que sea un array vacío si hay un error
        }

        // Cargar Todos los Autores
        const authorsResponse = await getAutores();
        if (authorsResponse && authorsResponse.success && Array.isArray(authorsResponse.data)) {
          setAllAuthors(authorsResponse.data);
        } else {
          console.error('Los datos de autores no tienen el formato esperado:', authorsResponse);
          setAllAuthors([]); // Asegurarse de que sea un array vacío si hay un error
        }

      } catch (err) {
        console.error('Error al cargar datos:', err);
        setError('Error al cargar los datos.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []); // El array de dependencias vacío significa que se ejecuta solo una vez al montar el componente

  if (loading) {
    return (
      <div className='museum-background'>
        <div className={styles.obrasContainer}>
          <div className="pb-5" style={{ paddingTop: "12rem" }}>
            <div className={`${styles.loading}`}>
              <h3>Cargando obras y datos relacionados...</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='museum-background'>
        <div className={styles.obrasContainer}>
          <div className="pb-5" style={{ paddingTop: "12rem" }}>
            <div className="text-center text-white">
              <h3>Error: {error}</h3>
              <p>Por favor, intenta nuevamente más tarde.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='museum-background'>
      <div className="container-fluid subtitle-font position-absolute" style={{marginTop: '100px', textAlign: 'center'}}>
        Obras
      </div>
      <div className={styles.obrasContainer}>
        <div className="pb-5" style={{ paddingTop: "12rem" }}>
          {!loading && !error && obras.length === 0 && (
            <div className="text-center text-white">
              <h3>No hay obras disponibles</h3>
            </div>
          )}
          {obras.length > 0 ? (
            obras.map((obra, index) => (
              <ObraItem
                key={obra.idhistory || `obra-${index}`} // Usar idhistory que viene en tu API
                obra={obra}
                allActors={allActors} // Pasar todos los actores como prop
                allAuthors={allAuthors} // Pasar todos los autores como prop
              />
            ))
          ) : (
            <div className="text-center text-white">
              <h3>No hay obras disponibles</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Obras;