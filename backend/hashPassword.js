const bcrypt = require('bcrypt');
const saltRounds = 10;
const db = require('./config/db'); 

const hashPassword = async (username, password) => {
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.query(query, [username, hash], (err, results) => {
      if (err) throw err;
      console.log('User added:', results.insertId);
      db.end(); 
    });
  } catch (err) {
    console.error('Error hashing password:', err);
  }
};

hashPassword('admin', 'admin123');
