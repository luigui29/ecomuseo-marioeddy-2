import React, { useState } from 'react';
import './Gallery.css';
import img1 from '../assets/gallery/1.jpg';
import img7 from '../assets/gallery/7.jpg';
import img3 from '../assets/gallery/3.jpg';
import img4 from '../assets/gallery/4.jpg';
import img5 from '../assets/gallery/5.jpg';
import img6 from '../assets/gallery/6.jpg';

const galleryImages = [
  { 
    id: 1, 
    src: img1, 
    alt: 'Exhibición de títeres tradicionales',
    category: 'exhibiciones'
  },
  { 
    id: 2, 
    src: img7, 
    alt: 'Taller para niños',
    category: 'talleres' 
  },
  { 
    id: 3, 
    src: img3, 
    alt: 'Colección histórica',
    category: 'colecciones'
  },
  { 
    id: 4, 
    src: img4, 
    alt: 'Visitas guiadas',
    category: 'visitas' 
  },
  { 
    id: 5, 
    src: img5, 
    alt: 'Exposición temporal',
    category: 'exhibiciones'
  },
  { 
    id: 6, 
    src: img6, 
    alt: 'Arte popular',
    category: 'colecciones'
  }
];

const Gallery = () => {
  const [_activeIndex, setActiveIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('todos');

  const filteredImages = filter === 'todos' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const categories = ['todos', ...new Set(galleryImages.map(img => img.category))];

  const handleNext = () => {
    setActiveIndex(prev => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex(prev => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const openModal = (index) => {
    setSelectedImage(filteredImages[index]);
    setActiveIndex(index);
  };

  const closeModal = () => setSelectedImage(null);

  return (
    <section className="gallery-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 display-5 fw-bold text-primary">
          <i className="bi bi-images me-2"></i>Nuestra Galería
        </h2>
        
        {/* Filtros */}
        <div className="d-flex justify-content-center flex-wrap mb-4 gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`btn ${filter === category ? 'btn-primary' : 'btn-outline-primary'}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Galería principal */}
        <div className="row g-4">
          {filteredImages.map((image, index) => (
            <div key={image.id} className="col-lg-4 col-md-6">
              <div 
                className="gallery-card card h-100 border-0 shadow-sm overflow-hidden"
                onClick={() => openModal(index)}
                role="button"
                tabIndex="0"
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="img-fluid gallery-image"
                  loading="lazy"
                />
                <div className="gallery-caption p-3">
                  <p className="mb-0 text-center fw-medium">
                    <i className={`bi ${getCategoryIcon(image.category)} me-2`}></i>
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal/Lightbox */}
        {selectedImage && (
          <div className="modal fade show d-block" tabIndex="-1" style={{backgroundColor: 'rgba(0,0,0,0.9)'}}>
            <div className="modal-dialog modal-dialog-centered modal-xl">
              <div className="modal-content border-0 bg-transparent">
                <div className="modal-header border-0">
                  <button 
                    type="button" 
                    className="btn-close btn-close-white" 
                    onClick={closeModal}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body text-center">
                  <img 
                    src={selectedImage.src} 
                    alt={selectedImage.alt}
                    className="img-fluid"
                    style={{maxHeight: '80vh'}}
                  />
                  <p className="text-white mt-3">{selectedImage.alt}</p>
                </div>
                <div className="modal-footer border-0 justify-content-between">
                  <button 
                    type="button" 
                    className="btn btn-outline-light"
                    onClick={handlePrev}
                  >
                    <i className="bi bi-chevron-left"></i> Anterior
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-outline-light"
                    onClick={handleNext}
                  >
                    Siguiente <i className="bi bi-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Función auxiliar para obtener iconos por categoría
function getCategoryIcon(category) {
  switch(category) {
    case 'exhibiciones': return 'bi-collection';
    case 'talleres': return 'bi-people';
    case 'colecciones': return 'bi-archive';
    case 'visitas': return 'bi-eye';
    default: return 'bi-image';
  }
}

export default Gallery;