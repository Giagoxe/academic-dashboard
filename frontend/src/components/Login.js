import React, { useState } from 'react';

const IniciarSesión = () => {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');

  const manejarEnvío = (e) => {
    e.preventDefault();
    // Lógica para autenticación
    if (nombreUsuario === 'prueba' && contraseña === 'contraseña') {
      console.log('Sesión iniciada exitosamente');
      setError('');
    } else {
      setError('Credenciales inválidas');
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={manejarEnvío}>
        <div>
          <label>
            Nombre de Usuario:
            <input type="text" value={nombreUsuario} onChange={(e) => setNombreUsuario(e.target.value)} required />
          </label>
        </div>
        <div>
          <label>
            Contraseña:
            <input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} required />
          </label>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default IniciarSesión;