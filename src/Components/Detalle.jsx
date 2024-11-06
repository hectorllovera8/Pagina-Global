import React from 'react'

const Detalle = ({ item }) => {
  return (
    <div
      className="modal fade modal-lg" id={`modal-${item.id}`} tabIndex="-1" aria-labelledby={`exampleModalLabel-${item.id}`} aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id={`exampleModalLabel-${item.id}`}>
                <strong>Nombre:</strong> <span style={{ color: 'red' }}>{item.nombre}</span> 
            </h1>
            
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div className="modal-body">
            <div className="row">
              <div className="col-md-6" style={{ lineHeight: '1.2' }}>
                <img src={item.imagen} alt={item.nombre} className="img-fluid" style={{ objectFit: 'contain', maxHeight: '400px', width: '100%' }}
                />
              </div>

              <div className="col-md-6" style={{ lineHeight: '1.2' }}>
                <h5 className='py-4'><strong>Código Producto:</strong> 0{item.id}</h5>
                <p><strong>Principio Activo:</strong> {item.principio_activo}</p>
                <p><strong>Presentación:</strong> {item.presentacion}</p>
                <p><strong>Descripción:</strong> {item.descripcion}</p>
                <p><strong>Función:</strong> {item.funcion}</p>
                <p><strong>Marca:</strong> {item.marca}</p>
                <p><strong>Laboratorio:</strong> {item.laboratorio}</p>
                <p><strong>Cantidad de Dosis:</strong> {item.cantidad_dosis}</p>
                <p><strong>Empaque:</strong> {item.forma_empaque}</p>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal">
              Cerrar
            </button>
            <button type="button" className="btn btn-primary">
              Cargar Inventario
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalle;