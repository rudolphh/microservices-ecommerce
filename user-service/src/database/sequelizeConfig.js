const {Sequelize} = require('sequelize');
const logger = require('../utils/logger');

const sequelize = new Sequelize(
    process.env.POSTGRES_DB, // db
    process.env.POSTGRES_USER, // db user
    process.env.POSTGRES_PASSWORD, // db pass
    {
        host: process.env.POSTGRES_HOST,
        dialect: 'postgres',
        pool: {
            max: 10,
            min: 2,
            acquire: 30000,
            idle: 10000
        }
    }
);

// test the connection
const initializeDatabase = async () => {
    try {
        await sequelize.authenticate();
        logger.info('Database connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database: ', error);
        process.exit(1); // Exit the process if connection fails
    }
}

// Function to synchronize models with the database
const syncDatabase = async () => {
    try {
        // Sync all models
        // Use { force: true } for development/testing to drop and recreate tables
        await sequelize.sync({ alter: true }); 
        logger.info('Database models have been synchronized.');
    } catch (error) {
        console.error('Unable to sync database models: ', error);
        process.exit(1); // Exit the process if syncing fails
    }
}


module.exports = { sequelize, initializeDatabase, syncDatabase };
