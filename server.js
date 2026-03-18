const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/auth', require('./routes/auth')); // Authentication routes
app.use('/students', require('./routes/students')); // Students management routes
app.use('/grades', require('./routes/grades')); // Grades management routes

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});