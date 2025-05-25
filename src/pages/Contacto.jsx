import React, { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario enviados:', formData);
    alert('¡Mensaje enviado! Nos pondremos en contacto contigo pronto.');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="museum-background-2">
      <div className='container py-5'>
        <h2 className='text-center my-4 subtitle-font'>Contacto</h2>
        <p className='text-center mb-5 caption-font'>
          ¿Tienes alguna pregunta o quieres colaborar? ¡Nos encantaría saber de ti!
        </p>

        <div className='row justify-content-center'>
          {/* Sección de Información de Contacto */}
          <div className='col-lg-5 col-md-8 mb-4 px-0'> {/* Columna para información de contacto, responsive */}
            <div className='card shadow-sm h-100 gold-card'> {/* Tarjeta con sombra y altura completa */}
              <div className='card-body gold-card-body'>
                <h3 className='card-title text-center mb-4 caption-font'>Nuestra Información</h3> {/* Título de la tarjeta */}
                <p className='d-flex align-items-center mb-3'> {/* Flexbox para alinear ícono y texto */}
                  <i className="bi bi-geo-alt-fill me-3 fs-5 text-info"></i> {/* Ícono con margen y color */}
                Casa de la Cultura Ateneo, El Roble, Av. Guayana, San Félix, Ciudad Guayana, Edo. Bolívar
                </p>
                <p className='d-flex align-items-center mb-3'>
                  <i className="bi bi-phone-fill me-3 fs-5 text-info"></i>
                  +58 412-8276613
                </p>
                <p className='d-flex align-items-center mb-3'>
                  <i className="bi bi-envelope-fill me-3 fs-5 text-info"></i>
                  Javivuelacielo@gmail.com
                </p>
                <p className='d-flex align-items-center mb-4'>
                  <i className="bi bi-clock-fill me-3 fs-5 text-info"></i>
                  Lunes a Viernes: 8:30am - 4:30pm / Sábado: 8:30am - 1:30pm
                </p>

                <div className='text-center mt-4'> {/* Centra los enlaces sociales */}
                  <h3 className='mb-3 caption-font'>Síguenos</h3>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-primary me-3 fs-3">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-primary me-3 fs-3">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-primary fs-3">
                    <i className="bi bi-tiktok"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Contacto;