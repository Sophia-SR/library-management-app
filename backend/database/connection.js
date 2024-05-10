const { Pool } = require('pg');

const pool = new Pool({
  user: 'sophiarafat',
  host: 'localhost',
  database: 'sophiarafat',
  password: 'Rumpapum123!',
  port: 5432,
});

module.exports = pool;