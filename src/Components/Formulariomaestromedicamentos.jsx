import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap

const API = "http://localhost:3000/api/medicamentos";
const Formulariomaestromedicamentos = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        principio_activo: '',
        marca: '',
        laboratorio: '',
        funcion: '',
        presentacion: '',
        descripcion: '',
        forma_empaque: '',
        cantidad_dosis: '',
        imagen: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('/api/medicamentos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Error al agregar el medicamento');
            }

            const data = await response.json();
            console.log('Medicamento agregado:', data);
            // Aquí puedes agregar lógica adicional, como limpiar el formulario o mostrar un mensaje de éxito.
            setFormData({
                nombre: '',
                principio_activo: '',
                marca: '',
                laboratorio: '',
                funcion: '',
                presentacion: '',
                descripcion: '',
                forma_empaque: '',
                cantidad_dosis: '',
                imagen: ''
            });
        } catch (error) {
            console.error('Error:', error);
            // Manejo de errores, como mostrar un mensaje al usuario.
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-lg" style={{ backdropFilter: 'blur(10px)', opacity: 0.9 }}>
                <h2 className="text-center mb-4">Agregar Nuevo Medicamento</h2>
                
                <div className="mb-3">
                    <label className="form-label">Nombre:</label>
                    <input type="text" name="nombre" className="form-control" value={formData.nombre} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Principio Activo:</label>
                    <input type="text" name="principio_activo" className="form-control" value={formData.principio_activo} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Marca:</label>
                    <input type="text" name="marca" className="form-control" value={formData.marca} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Laboratorio:</label>
                    <input type="text" name="laboratorio" className="form-control" value={formData.laboratorio} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Función:</label>
                    <input type="text" name="funcion" className="form-control" value={formData.funcion} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Presentación:</label>
                    <input type="text" name="presentacion" className="form-control" value={formData.presentacion} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Descripción:</label>
                    <textarea name="descripcion" className="form-control" value={formData.descripcion} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Forma de Empaque:</label>
                    <input type="text" name="forma_empaque" className="form-control" value={formData.forma_empaque} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Cantidad de Dosis:</label>
                    <input type="number" name="cantidad_dosis" className="form-control" value={formData.cantidad_dosis} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Imagen (URL):</label>
                    <input type="text" name="imagen" className="form-control" value={formData.imagen} onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-primary w-100">Agregar Medicamento</button>
            </form>
        </div>
    );
};

export default Formulariomaestromedicamentos;