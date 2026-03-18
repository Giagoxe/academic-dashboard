import React from 'react';

const Dashboard = () => {
    // Datos de ejemplo, ajustar según sea necesario
    const estadísticasEstudiantes = [
        { nombre: 'Alice', calificación: 'A', asistencia: '95%' },
        { nombre: 'Bob', calificación: 'B', asistencia: '90%' },
        { nombre: 'Charlie', calificación: 'C', asistencia: '85%' }
    ];

    return (
        <div>
            <h1>Resumen de Estadísticas y Calificaciones de Estudiantes</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Calificación</th>
                        <th>Asistencia</th>
                    </tr>
                </thead>
                <tbody>
                    {estadísticasEstudiantes.map((estudiante, índice) => (
                        <tr key={índice}>
                            <td>{estudiante.nombre}</td>
                            <td>{estudiante.calificación}</td>
                            <td>{estudiante.asistencia}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;