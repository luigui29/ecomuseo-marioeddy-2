// src/Pages/Actores/Actores.js

import React, { useEffect, useState } from 'react';
import { getTiteres } from '../../Components/utils/ApiFun.js'; // Asegúrate de tener getActors en ApiFun.js
import TitereItem from '../paginas_colleccion/TiteraItem.jsx'; // Asegúrate de la ruta correcta


const Titeres = () => {
  const [actores, setActores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActores = async () => {
      try {
        setLoading(true);
        const response = await getTiteres(); // Llama a tu función API para obtener actores

        if (response && response.success && Array.isArray(response.data)) {
          setActores(response.data);
          console.log(response.data)
        } else {
          console.error('Los datos de actores no tienen el formato esperado:', response);
          setActores([]);
          setError('Los datos recibidos no tienen el formato esperado o la API falló.');
        }
      } catch (err) {
        console.error('Error al cargar actores:', err);
        setError('Error al cargar los datos de actores. Por favor, intenta nuevamente más tarde.');
      } finally {
        setLoading(false);
      }
    };
    fetchActores();
  }, []);

  if (loading) {
    return (
      <div className='museum-background'>
        <div className="pb-5" style={{paddingTop: "12rem"}}>
          <div className='text-center text-white'>
            <h3>Cargando actores...</h3>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='museum-background'>
        <div className="pb-5" style={{paddingTop: "12rem"}}>
          <div className='text-center text-white'>
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
        Actores
      </div>
      <div className="pb-5" style={{paddingTop: "12rem"}}>
        {actores.length > 0 ? (
          actores.map((actor, index) => (
            // Usa actor.idactor como key, ya que es la clave primaria
            <TitereItem key={actor.idactor || `actor-${index}`} actor={actor} />
          ))
        ) : (
          <div className='text-center text-white'>
            <h3>No hay actores disponibles.</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Titeres;