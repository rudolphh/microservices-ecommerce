const express = require('express');
const app = express();
const logger = require('./src/utils/logger');

const port = 3000;

// Middleware
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello Order World!');
});

// Start server
app.listen(port, () => {
  logger.info(`Order service listening at http://localhost:${port}`);
});
