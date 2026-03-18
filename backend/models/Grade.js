const mongoose = require('mongoose');

// Define the Grade schema
const gradeSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    score: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// Create the Grade model
const Grade = mongoose.model('Grade', gradeSchema);

// Database queries
// Get all grades
const getAllGrades = () => Grade.find().populate('studentId courseId');

// Get grade by student and course
const getGradeByStudentAndCourse = (studentId, courseId) => {
    return Grade.findOne({ studentId, courseId }).populate('studentId courseId');
};

// Create a new grade
const createGrade = (gradeData) => {
    const grade = new Grade(gradeData);
    return grade.save();
};

// Update a grade
const updateGrade = (gradeId, gradeData) => {
    return Grade.findByIdAndUpdate(gradeId, gradeData, { new: true });
};

// Delete a grade
const deleteGrade = (gradeId) => {
    return Grade.findByIdAndDelete(gradeId);
};

module.exports = {
    getAllGrades,
    getGradeByStudentAndCourse,
    createGrade,
    updateGrade,
    deleteGrade
};