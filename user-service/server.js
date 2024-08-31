import { initializeDatabase, syncDatabase } from './src/database/sequelizeConfig.js';
import { swaggerSpec, swaggerUi } from './src/config/swagger.js';

import dotenv from 'dotenv';
import express from 'express';
import healthRoutes from './src/api/routes/health.js';
import logger from './src/utils/logger.js';
import userRoutes from './src/api/routes/userRoutes.js';

dotenv.config()

initializeDatabase();

const app = express();

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
