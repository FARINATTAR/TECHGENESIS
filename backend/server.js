// backend/server.js

import express from 'express';
import dotenv from 'dotenv';
import instagramRoutes from './routes/instagram.js'; // Import the Instagram routes

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Use the Instagram routes
app.use('/api/instagram', instagramRoutes);

// Root Route
app.get('/', (req, res) => {
  res.send('Welcome to TECHGENESIS Backend Server');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
