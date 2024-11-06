import React from 'react'
import img01 from '../assets/img01.jpg'


const Seccioninicio1 = () => {
  return (
<div className='container'>
      <section className="py-5 bg-light">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2>¿Quiénes somos?</h2>
            <h5 className="text-primary mb-3">Líderes en Seguridad y Salud Laboral y más</h5>
            <p>
              En Global Safety, C.A., somos una destacada empresa de asesoría y consultoría,
              especializada en proveer soluciones integrales en materia de Seguridad y Salud Laboral,
              Educación y Formación, Higiene Ocupacional, Servicios de Salud Ocupacional en modalidad
              outsourcing y soporte jurídico. Nuestra misión es salvaguardar el bienestar de su empresa
              y su equipo de trabajo, promoviendo un ambiente laboral seguro, saludable y productivo.
            </p>
            <a href="/quienes-somos" className="btn btn-primary mt-3">Conoce más</a>
          </div>
          <div className="col-lg-6 text-center">
            <img src={img01} alt="Global Safety" className="img-fluid rounded shadow" />
          </div>
        </div>
      </section>

      <hr className="my-4" style={{ borderTop: '2px solid #13357B' }} /> {/* Línea divisoria */}

      <section className="py-5 bg-light">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center">
            <img src={img01} alt="Nuestro Enfoque" className="img-fluid rounded shadow" />
          </div>
          <div className="col-lg-6">
            <h2>Nuestro Enfoque</h2>
            <p>
              Nos enorgullecemos de contar con un equipo de profesionales altamente capacitados y
              experimentados en diversas áreas de la seguridad y salud laboral. Cada miembro de nuestro
              equipo está comprometido con la excelencia, y dedica su experiencia para brindar soluciones
              personalizadas, ajustadas a las necesidades específicas de su empresa.
            </p>
            <a href="/nuestro-enfoque" className="btn btn-primary mt-3">Conoce más</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Seccioninicio1