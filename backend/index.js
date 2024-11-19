const db = require('./db');
const express = require('express');
const cors = require('cors'); // Import the CORS package

db();
const app = express();
const port = 5000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to enable CORS
app.use(cors({ origin: 'http://localhost:3000' })); // Allow requests from the React app

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/login', require('./Routes/auth'));
app.use('/api/notes', require('./Routes/notes'));

// Start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
