const { Pool } = require('pg');

const pool = new Pool({
  user: 'ubuntu', // Replace with your PostgreSQL username
  host: 'localhost', // Replace with your PostgreSQL host
  database: 'postgres', // Replace with your database name
  password: '', // Replace with your PostgreSQL password
  port: 5432, // Default PostgreSQL port
});

module.exports = pool;