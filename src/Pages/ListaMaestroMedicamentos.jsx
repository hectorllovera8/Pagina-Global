import React, { useEffect, useState } from 'react';
import TablaMaestroMedicamentos from '../Components/TablaMaestroMedicamentos';
import Herocontroldeinventario from '../Components/Herocontroldeinventario';

const API = "http://localhost:3000/api/medicamentos";

const ListaMaestroMedicamentos = () => {
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

    return (
        <div>
            <Herocontroldeinventario/>
            <h1 className='text-center py-4'>({datos.length}) Medicamentos Registrados en el Sistema</h1>
            <TablaMaestroMedicamentos items={datos} /> {/* Pasa el array completo */}
        </div>
    );
};

export default ListaMaestroMedicamentos;
