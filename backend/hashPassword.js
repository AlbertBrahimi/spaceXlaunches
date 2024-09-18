const bcrypt = require('bcrypt');
const saltRounds = 10;
const db = require('./config/db'); // Import your DB connection

const hashPassword = async (username, password) => {
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.query(query, [username, hash], (err, results) => {
      if (err) throw err;
      console.log('User added:', results.insertId);
      db.end(); // Close the database connection after the operation
    });
  } catch (err) {
    console.error('Error hashing password:', err);
  }
};

// Example usage: add a user with username 'admin' and password 'admin123'
hashPassword('admin', 'admin123');
