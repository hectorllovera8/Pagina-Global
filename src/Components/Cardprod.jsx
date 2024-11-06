import React from 'react'
import Detalle from './Detalle'



const Cardprod = ({ item }) => {
  return (
    <>
      <div className="col-md-4 col-lg-3 mb-4">
  <div className="card h-100" data-bs-theme="dark">

    {/* Card Header */}
    <div className="card-header p-0" style={{ height: '250px', overflow: 'hidden' }}>
      <img
        src={item.imagen}
        alt={item.nombre}
        className="img-fluid w-100 h-100"
        style={{ objectFit: 'cover' }}
      />
    </div>

   {/* Card Body */}

<div className="card-body text-center" style={{ padding: '10px' }}>
  <h3 className="text-center lead text-info font-italic" style={{ lineHeight: '1.05', marginBottom: '5px' }}><span>{item.nombre}</span>
  </h3>
  
</div>

    {/* Card Footer */}
    <div className="card-footer text-center" style={{ padding: '10px' }}>
      <p className="mb-2">
        {item.descripcion} <br /> 
        <strong>Cantidad de Dosis:</strong> {item.cantidad_dosis}
      </p>

      <button
        className="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target={`#modal-${item.id}`}
        style={{ width: '100%' }}
      >
        Ver Detalle
      </button>
    </div>
  </div>

  {/* Modal correspondiente al producto */}
  <Detalle item={item} />
</div>
    </>
  );
};

export default Cardprod;