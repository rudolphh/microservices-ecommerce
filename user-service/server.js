const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello User World!');
});

// Start server
app.listen(port, () => {
  console.log(`User service listening at http://localhost:${port}`);
});
