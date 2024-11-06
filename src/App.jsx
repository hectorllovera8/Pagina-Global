import { useState } from "react";


import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Pages/Inicio";
import Nosotros from "./Pages/Nosotros";
import GestiondeSeguridad from "./Pages/GestiondeSeguridad";
import HigieneOcupacional from "./Pages/HigieneOcupacional";
import SaludOcupacional from "./Pages/SaludOcupacional";
import EducacionyFormacion from "./Pages/EducacionyFormacion";
import Contacto from "./Pages/Contacto";
import ControldeInventario from "./Pages/ControldeInventario";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Registrarnuevomedicamento from "./Pages/Registrarnuevomedicamento";
import Login from "./Pages/Login";
import ListaMaestroMedicamentos from "./Pages/ListaMaestroMedicamentos";
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';   
import EntradaMedicamentos from "./Pages/EntradaMedicamentos";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
      <Header/>
      
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/gestiondeseguridad" element={<GestiondeSeguridad />} />
          <Route path="/higieneocupacional" element={<HigieneOcupacional />} />
          <Route path="/saludocupacional" element={<SaludOcupacional />} />
          <Route path="/educacionyformacion" element={<EducacionyFormacion />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/controldeinventario" element={<ControldeInventario />} />
          <Route path="/registrarnuevomedicamento" element={<Registrarnuevomedicamento />} />
          <Route path="/listamaestromedicamentos" element={<ListaMaestroMedicamentos />} />
          <Route path="/entradamedicamentos" element={<EntradaMedicamentos />} />
          <Route path="*" element={<Inicio />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
