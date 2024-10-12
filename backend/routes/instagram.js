// routes/instagram.js

import express from 'express';
import axios from 'axios';

const router = express.Router();

// Replace 'YOUR_ACCESS_TOKEN' with your actual Instagram access token
const ACCESS_TOKEN = 'IGQWRPTEQ2Mk1ncUY0OHo1ZAG9KQVdNRmYycy03SUc2YmF5VE1iWTM4dmx2cjR6OUhsR1poRzNkNU5zdi04ZAWRWVTVnZAGoxXzF5WVQ0U1FSVXpDSnhueG4taXlOU0JVa3drbWVxZA3ZAoZADVkVEZADMWJoc0t2STVtcm8ZD';

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
