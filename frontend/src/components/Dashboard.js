import React from 'react';

const Dashboard = () => {
    // Sample data, adjust as needed
    const studentStats = [
        { name: 'Alice', grade: 'A', attendance: '95%' },
        { name: 'Bob', grade: 'B', attendance: '90%' },
        { name: 'Charlie', grade: 'C', attendance: '85%' }
    ];

    return (
        <div>
            <h1>Student Statistics and Grades Overview</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Grade</th>
                        <th>Attendance</th>
                    </tr>
                </thead>
                <tbody>
                    {studentStats.map((student, index) => (
                        <tr key={index}>
                            <td>{student.name}</td>
                            <td>{student.grade}</td>
                            <td>{student.attendance}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;