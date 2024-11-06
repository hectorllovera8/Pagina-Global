import React from 'react'
import supervisor from '../assets/supervisor.png'
import estetoscopio from '../assets/estetoscopio.png'
import dosimetro from '../assets/dosimetro.png'
import capacitacion from '../assets/capacitacion.png'
import sonometro from '../assets/sonometro2.jpg'
import imagen1 from '../assets/4.png'
import './MarketingInicio.css'
const MarketingInicio = () => {
  return (
    <>
<div className="container marketing py-5">
  <div className="row">

    <div className="col-lg-3 d-flex flex-column align-items-center justify-content-between">
      <div className="circulo" style={{ backgroundColor: '#3867d6' }}> 
        <img src={supervisor} alt="Descripción de la imagen"/>  
      </div>
      <h2 className="fw-normal text-center m-2">Asesoría/Consultoría</h2>
      <p className="text-center flex-grow-1">Nuestro compromiso es ofrecerte soluciones integrales y accesibles en materia de seguridad y salud laboral, somos tú solución en seguridad y salud laboral.</p>
      <p className="text-center"><a className="btn btn-secondary" href="/gestiondeseguridad">Ver más »</a></p>
    </div>

    <div className="col-lg-3 d-flex flex-column align-items-center justify-content-between">
      <div className="circulo" style={{ backgroundColor: '#a55eea' }}> 
        <img src={estetoscopio} alt="Descripción de la imagen"/>  
      </div>
      <h2 className="fw-normal text-center m-2">Salud Ocupacional</h2>
      <p className="text-center flex-grow-1">Nos complace presentarte una amplia gama de servicios especializados en salud ocupacional, diseñados específicamente para satisfacer las necesidades de tu organización.</p>
      <p className="text-center"><a className="btn btn-secondary" href="/saludocupacional">Ver más »</a></p>
    </div>

    <div className="col-lg-3 d-flex flex-column align-items-center justify-content-between">
      <div className="circulo" style={{ backgroundColor: '#fa8231' }}> 
        <img src={dosimetro} alt="Descripción de la imagen"/>  
      </div>
      <h2 className="fw-normal text-center m-1">Higiene Ocupacional</h2>
      <p className="text-center flex-grow-1 m-2">En GLOBAL SAFETY, entendemos la importancia de mantener un ambiente de trabajo seguro y saludable. Por eso, ofrecemos todas las evaluaciones de riesgos que necesitas.</p>
      <p className="text-center"><a className="btn btn-secondary" href="/higieneocupacional">Ver más »</a></p>
    </div>

    <div className="col-lg-3 d-flex flex-column align-items-center justify-content-between">
      <div className="circulo" style={{ backgroundColor: '#ffd32a' }}> 
        <img src={capacitacion} alt="Descripción de la imagen"/>  
      </div>
      <h2 className="fw-normal text-center m-2">Educación/Formación</h2>
      <p className="text-center flex-grow-1">Nuestra dedicación a la excelencia se refleja en cada uno de nuestros programas de formación, diseñados meticulosamente para brindar el más alto estándar de conocimientos y habilidades en el campo.</p>
      <p className="text-center"><a className="btn btn-secondary" href="/educacionyformacion">Ver más »</a></p>
    </div>

  </div> {/* /.row */}
</div>


 
 
<div className='marketing' >
 
 <hr className="featurette-heading"  />
    <div className="row featurette p-5" style={{ background: 'rgb(2,0,36)', background: 'linear-gradient(270deg, rgba(2,0,36,1) 0%, rgba(184,12,154,0.6643032212885154) 35%, rgba(0,212,255,1) 100%)' }} >
        <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1 py-5">ASESORÍAS/
                CONSULTORÍAS. <span className="text-body-secondary"> <br/>¡Expertos en Seguridad y Salud Laboral a tu Disposición!</span>
            </h2>
            <p className="lead">En Global Safety, C.A., nos enorgullece brindar servicios de asesoría y consultoría en todo lo relacionado con Seguridad y Salud Laboral.
                Nuestro equipo de profesionales altamente capacitados está listo para ayudarte a garantizar un entorno de trabajo seguro y saludable para ti y tus empleados.
            </p>
        </div>
        <div className="col-md-5">
            <img src={imagen1} alt className="img-fluid img-thumbnail" width={550} height={400}/>
        </div>
    </div>


 <hr className="featurette-divider" />
    <div className="row featurette p-5" style={{ background: 'rgb(2,0,36)', background: 'linear-gradient(69deg, rgba(2,0,36,1) 0%, rgba(12,184,46,0.6643032212885154) 45%, rgba(0,181,255,0.896796218487350) 100%)' }}>
        <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">Higiene Ocupacional. <br/><span className="text-body-secondary">Identificamos, Evaluamos y Controlamos tus Factores de Riesgos.</span>
            </h2>
            <p className="lead">Como empresa dedicada a la higiene ocupacional, nos especializamos en la identificación y evaluación de diversos factores de riesgo presentes en el entorno laboral. Nuestro 
                objetivo es garantizar la seguridad y salud de los trabajadores al ofrecer soluciones efectivas para abordar estos riesgos.
            </p>
        </div>
        <div className="col-md-5 order-md-1">
             <img src={sonometro} alt className="img-fluid img-thumbnail" width={550} height={400}/>
        </div>
  </div>
 
 <hr className="featurette-divider" />
  <div className="row featurette">
    <div className="col-md-7">
      <h2 className="featurette-heading fw-normal lh-1">And lastly, this one. <span className="text-body-secondary">Checkmate.</span></h2>
      <h4 className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ex cupiditate dignissimos doloribus ratione perferendis placeat suscipit nulla fugiat quasi, consequuntur reprehenderit tempora minima nihil, veniam ab esse, repellendus excepturi.</h4>
    </div>
    <div className="col-md-5">
    <img src={imagen1} alt className="img-fluid img-thumbnail" width={550} height={400}/>
    </div>
  </div>
  <hr className="featurette-divider" />
  
</div>
</>
  )
}

export default MarketingInicio