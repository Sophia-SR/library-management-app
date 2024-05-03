const { Sequelize } = require('sequelize');

// Database configuration
const sequelize = new Sequelize('sophiarafat', 'sophiarafat', 'Rumpapum123!', {
  host: 'localhost',
  dialect: 'postgres',
});

// Test the database connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

// Export the Sequelize instance and testConnection function
module.exports = { sequelize, testConnection };
