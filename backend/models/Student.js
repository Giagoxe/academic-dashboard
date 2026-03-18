const mongoose = require('mongoose');

// Define the schema for the Student model
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
    createdAt: { type: Date, default: Date.now }
});

// Create the model from the schema
const Student = mongoose.model('Student', studentSchema);

// Database queries
// Find all students
const findAllStudents = async () => {
    return await Student.find();
};

// Find a student by ID
const findStudentById = async (id) => {
    return await Student.findById(id);
};

// Create a new student
const createStudent = async (studentData) => {
    const student = new Student(studentData);
    return await student.save();
};

// Update a student
const updateStudent = async (id, updatedData) => {
    return await Student.findByIdAndUpdate(id, updatedData, { new: true });
};

// Delete a student
const deleteStudent = async (id) => {
    return await Student.findByIdAndDelete(id);
};

module.exports = { findAllStudents, findStudentById, createStudent, updateStudent, deleteStudent };