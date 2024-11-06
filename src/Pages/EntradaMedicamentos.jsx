import React, { useEffect, useState } from 'react';
import Herocontroldeinventario from '../Components/Herocontroldeinventario';
import TablaEntrada from '../Components/TablaEntrada';

const API = "http://localhost:3000/api/entrada_medicamentos";

const EntradaMedicamentos = () => {
  const [datos, setDatos] = useState([]);

  const getDatos = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      console.log(data); // Para verificar en consola que los datos son correctos
      setDatos(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getDatos();
  }, []);

  return (
    <div>
      <Herocontroldeinventario />
      <h1 className="text-center py-4">({datos.length}) Medicamentos Ingresados</h1>
      <TablaEntrada items={datos} />
    </div>
  );
}

export default EntradaMedicamentos;
