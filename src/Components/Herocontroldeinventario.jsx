import React from 'react';
import heromedicina1 from '../assets/heromedicina1.png';
import heromedicina2 from '../assets/heromedicina2.png';

const Herocontroldeinventario = () => {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide hero-carousel" // Clase adicional para hero-specific styling
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval={10000}>
          <img
            src={heromedicina1}
            className="d-block w-100 hero-carousel-image"
            alt="..."
            style={{ height: '400px', objectFit: 'cover' }}
          />
        </div>

        <div className="carousel-item" data-bs-interval={2000}>
          <img
            src={heromedicina2}
            className="d-block w-100 hero-carousel-image"
            alt="..."
            style={{ height: '400px', objectFit: 'cover' }}
          />
        </div>

        <div className="carousel-item" data-bs-interval={2000}>
          <img
            src={heromedicina1}
            className="d-block w-100 hero-carousel-image"
            alt="..."
            style={{ height: '400px', objectFit: 'cover', objectPosition: 'top' }}
          />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Atrás</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Adelante</span>
      </button>
    </div>
  );
};

export default Herocontroldeinventario;
