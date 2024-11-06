import React from 'react';

const TablaEntrada = ({ items }) => {
  return (
    <div className="container mb-2 d-flex justify-content-center align-items-center" style={{ minHeight: '30vh' }}>
    <table className="table table-striped table-hover table-bordered">
      <thead className="table-primary text-center">
        <tr>
          <th className="text-center align-middle p-2">Código</th>
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
          <th className="text-center align-middle p-2">Lote</th>
          <th className="text-center align-middle p-2">Fecha Vencimiento</th>
          <th className="text-center align-middle p-2">Proveedor Nombre</th>
          <th className="text-center align-middle p-2">Proveedor Cédula</th>
          <th className="text-center align-middle p-2">Cantidad Recibida</th>
          <th className="text-center align-middle p-2">Fecha Entrada</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={item.id}>
            <td className="text-center align-middle p-2">{item.id}</td>
            <td className="text-center align-middle p-2">
              <img src={item.imagen} alt={item.nombre} className="img-fluid" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
            </td>
            <td className="text-center align-middle p-2">{item.nombre_medicamento}</td>
            <td className="text-center align-middle p-2">{item.principio_activo}</td>
            <td className="text-center align-middle p-2">{item.marca}</td>
            <td className="text-center align-middle p-2">{item.laboratorio}</td>
            <td className="text-center align-middle p-2">{item.funcion}</td>
            <td className="text-center align-middle p-2">{item.presentacion}</td>
            <td className="text-center align-middle p-2">{item.descripcion}</td>
            <td className="text-center align-middle p-2">{item.forma_empaque}</td>
            <td className="text-center align-middle p-2">{item.cantidad_dosis}</td>
            <td className="text-center align-middle p-2">{item.lote}</td>
            <td className="text-center align-middle p-2">
              {new Date(item.fecha_vencimiento).toLocaleDateString()}
            </td>
            <td className="text-center align-middle p-2">{item.proveedor_nombre}</td>
            <td className="text-center align-middle p-2">{item.proveedor_cedula}</td>
            <td className="text-center align-middle p-2">{item.cantidad_recibida}</td>
            <td className="text-center align-middle p-2">
              {new Date(item.fecha_entrada).toLocaleString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}

export default TablaEntrada;
