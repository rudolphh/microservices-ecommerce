import express from 'express';
import logger from './src/utils/logger.js';

const app = express();


const port = 3000;

// Middleware
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello Product World!');
});

// Start server
app.listen(port, () => {  
  logger.info(`Product service listening at http://localhost:${port}`);
});
