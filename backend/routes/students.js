const express = require('express');
const router = express.Router();

// Mock database
let students = [];

// GET all students
router.get('/', (req, res) => {
    res.status(200).json(students);
});

// POST a new student
router.post('/', (req, res) => {
    const { name, age, grade } = req.body;
    const newStudent = { id: students.length + 1, name, age, grade };
    students.push(newStudent);
    res.status(201).json(newStudent);
});

// UPDATE a student
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, age, grade } = req.body;
    const studentIndex = students.findIndex(s => s.id === parseInt(id));
    if (studentIndex !== -1) {
        students[studentIndex] = { id: parseInt(id), name, age, grade };
        res.status(200).json(students[studentIndex]);
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
});

// DELETE a student
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const studentIndex = students.findIndex(s => s.id === parseInt(id));
    if (studentIndex !== -1) {
        students.splice(studentIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
});

module.exports = router;