// routes/instagram.js

import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv'; // Import dotenv

dotenv.config(); // Load environment variables from .env file

const router = express.Router();

// Use the access token from the environment variable
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

// Route to get user media
router.get('/user/media', async (req, res) => {
  try {
    const response = await axios.get(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,timestamp&access_token=${ACCESS_TOKEN}`
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching Instagram media');
  }
});

export default router;
