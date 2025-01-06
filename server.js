const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

// Connect to the database
connectDB();

const app = express();

// Middleware to parse JSON
app.use(express.json({ extended: true }));

// Routes
app.use('/api/register', require(path.join(__dirname, 'routes', 'register')));
app.use('/api/auth', require(path.join(__dirname, 'routes', 'auth')));
app.use('/api/guests', require(path.join(__dirname, 'routes', 'guests')));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  const clientBuildPath = path.join(__dirname, 'client', 'build');
  app.use(express.static(clientBuildPath));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(clientBuildPath, 'index.html'));
  });
}

// Define the port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on
