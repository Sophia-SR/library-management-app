// user.js

const db = require('../config/db');

const createUser = async ({ id, username, email, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const query = 'INSERT INTO users (id, username, email, password) VALUES ($1, $2, $3, $4)';
  await db.query(query, [id, username, email, hashedPassword]);
};

const getUserByEmail = async (email) => {
  const query = 'SELECT * FROM users WHERE email = $1';
  const result = await db.query(query, [email]);
  return result.rows[0];
};

module.exports = { createUser, getUserByEmail };