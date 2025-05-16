import React from 'react';
import Mapa from './Mapa';

const CardMap = () => {
  return (
    <div className="card border-0 shadow-lg h-auto">
      {/* PC VIEW */}
      <div className="row g-0 h-100 card-map-pc">
        <div className="col-md-6 p-4 d-flex flex-column">
          <h3 className="card-title text-primary">Horarios</h3>
          <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item bg-transparent d-flex align-items-center">
              <i className="bi bi-clock me-2 text-primary"></i>
              Lunes a Viernes: 8:30am - 4:30pm / Sábado: 8:30am - 1:30pm
            </li>
            <li className="list-group-item bg-transparent d-flex align-items-center">
              <i className="bi bi-x-circle me-2 text-danger"></i>
              Domingo: Cerrado
            </li>
          </ul>
          <div style={{marginTop: "70px"}}>
            <h5 className="text-muted">Dirección</h5>
            <p className="mb-0">
              <i className="bi bi-geo-alt-fill me-2 text-primary"></i>
              Casa de la Cultura Ateneo, El Roble, Av. Guayana, San Félix, Ciudad Guayana, Edo. Bolívar
            </p>
          </div>
        </div>
        <div className="col-md-6 bg-light">
          <div className="h-100 w-100" style={{minHeight: '300px'}}>
            <Mapa/>
          </div>
        </div>
      </div>

      {/* PHONE VIEW */}
      <div className="row border-0 h-auto card-map-mobile">
        <div className="col-12 d-flex flex-column">
          <h3 className="card-title text-primary mt-2 ms-2" style={{fontSize: '1rem'}}>Horarios</h3>
          <ul className="list-group list-group-flush mb-3" style={{fontSize: '0.8rem'}}>
            <li className="list-group-item bg-transparent d-flex align-items-center">
              <i className="bi bi-clock me-2 text-primary"></i>
              Lunes a Viernes: 8:30am - 4:30pm / Sábado: 8:30am - 1:30pm
            </li>
            <li className="list-group-item bg-transparent d-flex align-items-center">
              <i className="bi bi-x-circle me-2 text-danger"></i>
              Domingo: Cerrado
            </li>
          </ul>
          <div>
            <h5 className="text-muted ms-2" style={{fontSize: '1rem'}}>Dirección</h5>
            <p className="ms-2" style={{fontSize: '0.8rem'}}>
              <i className="bi bi-geo-alt-fill text-primary"></i>
              Casa de la Cultura Ateneo, El Roble, Av. Guayana, San Félix, Ciudad Guayana, Edo. Bolívar
            </p>
          </div>
        </div>
      </div>
      <div className="row border-0 card-map-mobile" style={{height: '300px'}}>
        <Mapa />
      </div>
    </div>
  );
};

export default CardMap;