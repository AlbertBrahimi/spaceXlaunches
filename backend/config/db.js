const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'user_login' 
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to database');
});

module.exports = db;
