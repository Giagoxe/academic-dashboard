const express = require('express');
const router = express.Router();

// In-memory database for grades
let grades = [];

// Endpoint to upload grades
router.post('/upload', (req, res) => {
    const { studentId, courseId, grade } = req.body;
    if (!studentId || !courseId || grade === undefined) {
        return res.status(400).send('Invalid input.');
    }
    grades.push({ studentId, courseId, grade });
    res.status(201).send('Grade uploaded successfully.');
});

// Endpoint to retrieve grades
router.get('/retrieve', (req, res) => {
    if (grades.length === 0) {
        return res.status(404).send('No grades found.');
    }
    res.status(200).json(grades);
});

module.exports = router;