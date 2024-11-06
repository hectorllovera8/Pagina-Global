import React, { useEffect, useState } from "react";
import { Paginator } from 'primereact/paginator';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
const API = "http://localhost:3000/api/medicamentos";

const Paginador = () => {
    const [datos, setDatos] = useState([]);
    const getDatos = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();
        console.log(data);
        setDatos(data);
      } catch (error) {
        console.error(error);
      }
    };
    useEffect(() => {
      getDatos();
    }, []);

  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  return (
    <>
   
    
    
    
    </>
  );
};

export default Paginador;