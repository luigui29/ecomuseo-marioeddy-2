import React from 'react'
import '../card.css';


const CardTiteres = ({
  name,
  descripcion,
  img
}) => {
  return (
    <div>  <div className="card card-container card-body ">
      { img && <img src={img} className="card-img-top rounded-circle card-img " alt="..."/>}
        <div className="card-body">
          { name && <h3 className='card-title'>{name}</h3>}
          {descripcion && <p className="card-text">{descripcion}</p>}
        </div>
      </div>
    </div>
  )
}

export default CardTiteres