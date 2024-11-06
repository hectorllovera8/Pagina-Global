import React from 'react'
import FormularioLogin from '../components/FormularioLogin';
import FONDO from '../assets/FONDO.jpg';
const AreaCliente = () => {

  return (
     <div
      style={{
        backgroundImage: `url(${FONDO})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FormularioLogin />
    </div>
  )
}

export default AreaCliente