import React from 'react'
import carrusel1 from '../assets/carrusel1.jpg'
import carrusel2 from '../assets/carrusel2.jpg'
import carrusel3 from '../assets/carrusel3.jpg'
import carrusel4 from '../assets/carrusel4.jpg'
import trabajadorseñalizar from '../assets/trabajadorseñalizar.png'
import './HeroInicio.css'
import Button from './Button'

const HeroInicio = () => {
  return (
    <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel" data-bs-wrap="true">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={0} className="active" aria-label="Slide 1" aria-current="true" />
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={1} aria-label="Slide 2" />
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={2} aria-label="Slide 3" />
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={3} aria-label="Slide 4" />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className='img-fluid' src={carrusel1} alt="" width={2500} height={2000} />
          <div className="container">
            <div className="carousel-caption text-start text-center">
              <h1>Experiencia y Soluciones Integrales Personalizadas para tu Empresa</h1>
              <p className="opacity-75">Diseñando un Futuro más Seguro y Saludable para tu Empresa.</p>
              <div className='d-flex justify-content-center'>
                <div className='col-md-4 d-flex justify-content-center'>
                  <p style={{ margin: '0 5px' }}><a className="btn btn-lg btn-primary" href="#">Ver más</a></p>
                  <p style={{ margin: '0 5px' }}></p><Button/>
                </div>
              </div>
            </div>
            <div className="worker-image-container">
              <img className="worker-image" src={trabajadorseñalizar} alt="Trabajador señalizando" />
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <img className='img-fluid' src={carrusel2} alt="" width={2500} height={2000} />
          <div className="container">
            <div className="carousel-caption">
              <h1>Salud Ocupacional</h1>
              <p className="opacity-75">Te brindamos un servicio personalizado y ajustado a las necesidades de tu organización</p>
              <p><a className="btn btn-lg btn-primary" href="/gestiondeseguridad">Conoce más</a></p>
            </div>
            <div className="worker-image-container">
              <img className="worker-image" src={trabajadorseñalizar} alt="Trabajador señalizando" />
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <img className='img-fluid' src={carrusel3} alt="" width={2500} height={2000} />
          <div className="container">
            <div className="carousel-caption">
              <h1>Higiene Ocupacional</h1>
              <p className="opacity-75">Evaluaciones de riesgos en puestos de trabajo</p>
              <p><a className="btn btn-lg btn-primary" href="/higieneocupacional">Conoce más</a></p>
            </div>
            <div className="worker-image-container">
              <img className="worker-image" src={trabajadorseñalizar} alt="Trabajador señalizando" />
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <img className='img-fluid' src={carrusel4} alt="" width={2500} height={2000} />
          <div className="container">
            <div className="carousel-caption">
              <h1>Salud Ocupacional In Company</h1>
              <p className="opacity-75">Contamos con profesionales de la medicina ocupacional, los cuales colocamos a tu disposición bajo la modalidad de outsourcing, ideal para tu servicio de salud.</p>
              <p><a className="btn btn-lg btn-primary" href="/saludocupacional"> Conoce más</a></p>
            </div>
            <div className="worker-image-container">
              <img className="worker-image" src={trabajadorseñalizar} alt="Trabajador señalizando" />
            </div>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
       
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default HeroInicio
