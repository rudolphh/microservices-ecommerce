require('dotenv').config()
const express = require('express');
const app = express();
const { initializeDatabase, syncDatabase } = require('./src/database/sequelizeConfig')
const { swaggerUi, swaggerSpec } = require('./src/config/swagger');
const logger = require('./src/utils/logger');
const healthRoutes = require('./src/api/routes/health');


initializeDatabase();

// Middleware
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api', healthRoutes);// health check endpoints of the service

// Server Swagger Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// // Basic route
// app.get('/', (req, res) => {
//   res.send('Hello User World!');
// });


// Initialize the database and start the server
const startServer = async () => {
  await initializeDatabase(); // Ensure database connection is successful
  await syncDatabase(); // Sync database models
  
  const port = process.env.APP_PORT || 3000;
  app.listen(port, () => {
      logger.info(`User service listening at http://localhost:${port}`);
  });
};

startServer();
