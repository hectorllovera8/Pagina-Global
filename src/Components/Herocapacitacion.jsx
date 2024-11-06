import React from "react";
import formacion1 from "../assets/formacion1.jpg";
import extincion2 from "../assets/extincion2.jpg";
import primerosauxilios1 from "../assets/primerosauxilios1.jpg";

const Herocapacitacion = () => {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"    >
      <div className="carousel-inner">
        
        <div className="carousel-item active" data-bs-interval={10000}>
        <img src={formacion1} className="d-block w-100" alt="..." style={{ height: '500px', objectFit: 'cover' }}/>
        </div>
        
        <div className="carousel-item" data-bs-interval={2000}>
          <img src={extincion2} className="d-block w-100" alt="..." style={{ height: '500px', objectFit: 'cover' }} />
        </div>
       
        <div className="carousel-item"data-bs-interval={2000}>
            <img src={primerosauxilios1} className="d-block w-100" alt="..." style={{ height: '500px', objectFit: 'cover', objectPosition: 'top' }} />
        </div>
     
      </div>
      
      <button
        className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
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

export default Herocapacitacion;
