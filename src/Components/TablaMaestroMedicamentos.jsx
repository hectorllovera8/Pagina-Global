import React from 'react';

const TablaMaestroMedicamentos = ({ items }) => {
  return (
    <div className="container mt-5">
      
      <table className="table table-striped table-hover table-bordered">
        <thead className="table-primary text-center">
          <tr>
            <th className="text-center align-middle p-2">N°</th>
            <th className="text-center align-middle p-2">Imagen</th>
            <th className="text-center align-middle p-2">Nombre</th>
            <th className="text-center align-middle p-2">Principio Activo</th>
            <th className="text-center align-middle p-2">Marca</th>
            <th className="text-center align-middle p-2">Laboratorio</th>
            <th className="text-center align-middle p-2">Función</th>
            <th className="text-center align-middle p-2">Presentación</th>
            <th className="text-center align-middle p-2">Descripción</th>
            <th className="text-center align-middle p-2">Forma de Empaque</th>
            <th className="text-center align-middle p-2">Cantidad de Dosis</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className="text-center align-middle p-2">{item.id}</td>
              <td className="text-center align-middle p-2">
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  className="img-fluid"
                  style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                />
              </td>
              <td className="text-center align-middle p-2">{item.nombre}</td>
              <td className="text-center align-middle p-2">{item.principio_activo}</td>
              <td className="text-center align-middle p-2">{item.marca}</td>
              <td className="text-center align-middle p-2">{item.laboratorio}</td>
              <td className="text-center align-middle p-2">{item.funcion}</td>
              <td className="text-center align-middle p-2">{item.presentacion}</td>
              <td className="text-center align-middle p-2">{item.descripcion}</td>
              <td className="text-center align-middle p-2">{item.forma_empaque}</td>
              <td className="text-center align-middle p-2">{item.cantidad_dosis}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaMaestroMedicamentos;
