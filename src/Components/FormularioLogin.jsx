import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader'; // Asegúrate de que la ruta sea correcta

const FormularioLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Estado de cargando
  const navigate = useNavigate();

  const resetForm = () => {
    setUsername('');
    setPassword('');
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Iniciar el loader

    // Simulación de validación y redirección
    setTimeout(() => {
      if (username === 'admin' && password === '123456') {
        resetForm();
        navigate('/ControldeInventario'); // Redirigir a la página de "control de inventario"
      } else {
        setError('Usuario o contraseña incorrectos, intente de nuevo');
        setLoading(false); // Detener el loader si hay error
      }
    }, 10000); // Simulación de tiempo de carga de 1 segundo
  };

  return (
    <div
      className="card p-5 shadow"
      style={{
        width: '100%',
        maxWidth: '600px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Ajustar la opacidad para ver el fondo
        borderRadius: '15px',
        padding: '25px',
        boxSizing: 'border-box',
        position: 'relative', // Necesario para el loader
      }}
    >
      <h2 className="text-center mb-4" style={{ color: '#333', fontWeight: 'bold' }}>Iniciar Sesión</h2>
      {loading ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <Loader /> {/* Mostrar el loader mientras carga */}
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label" style={{ color: '#333' }}>Usuario</label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="form-label" style={{ color: '#333' }}>Contraseña</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
        </form>
      )}
      <p className='text-center py-4'>Ingrese los datos para acceder</p>
    </div>
  );
};

export default FormularioLogin;
