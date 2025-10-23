const mysql = require('mysql2');

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',       // replace with your MySQL username
  password: '',       // replace with your MySQL password
  database: 'library' // database name
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

module.exports = db;
