import { useEffect, useState } from "react";
import Cardprod from "../Components/Cardprod";
import Herocontroldeinventario from "../Components/Herocontroldeinventario";
import Paginador from '../Components/Paginador'

const API = "http://localhost:3000/api/medicamentos";
const ControldeInventario = () => {
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
    <>
    <Herocontroldeinventario/>
    
    <h3 className="text-center py-4"> Control de Medicamentos </h3>
         <h3 className="text-center">({datos.length}) Medicamentos Registrados</h3>
         <div className="container">
            <div className="row ">
                 {datos && datos.map((item)=>(
                  <Cardprod key={item.id} item={item}/>
                  ))}
            </div>
            <Paginador/>
        </div>
      </>
  )
}

export default ControldeInventario