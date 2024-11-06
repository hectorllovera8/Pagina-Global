import React from 'react'

const Footer = () => {
  return (
    <footer className="py-3 my-4 bg-black">
  <ul className="nav justify-content-center border-bottom pb-3 mb-3" data-bs-theme="dark">
    <li className="nav-item"><a href="/inicio" className="nav-link px-2 text-body-secondary">Inicio</a></li>
    <li className="nav-item"><a href="/nosotros" className="nav-link px-2 text-body-secondary">Nosotros</a></li>
    <li className="nav-item"><a href="/gestiondeseguridad" className="nav-link px-2 text-body-secondary">Gestión de Seguridad</a></li>
    <li className="nav-item"><a href="/higieneocupacional" className="nav-link px-2 text-body-secondary">Higiene Ocupacional</a></li>
    <li className="nav-item"><a href="/saludocupacional" className="nav-link px-2 text-body-secondary">Salud Ocupacional</a></li>
    <li className="nav-item"><a href="/educacionyformacion" className="nav-link px-2 text-body-secondary">Educación y Formación</a></li>
    <li className="nav-item"><a href="/contacto" className="nav-link px-2 text-body-secondary">Contácto</a></li>
  </ul>
  <p className="text-center text-body-secondary" data-bs-theme="dark">© 2016-2024 Company, Global Safety, C.A.</p>
</footer>

  )
}

export default Footer