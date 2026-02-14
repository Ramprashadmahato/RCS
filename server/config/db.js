// config/db.js
const { Sequelize } = require('sequelize');

// Create a new Sequelize instance with SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // database file will be created here
  logging: false                // disable SQL logging in console
});

module.exports = sequelize;
