// Database configuration for PostgreSQL connection

const { Pool } = require('pg');

const pool = new Pool({
  user: 'your_user', // replace with your database user
  host: 'localhost', // replace with your host
  database: 'your_database', // replace with your database name
  password: 'your_password', // replace with your database password
  port: 5432, // replace with your port, default is 5432
});

module.exports = pool;