const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Configure CORS with specific origin
app.use(cors({
  origin: `http://localhost:${process.env.REACT_APP_PORT || 3001}`,
  methods: ['GET'],
  credentials: true
}));

// Add error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

app.get('/api/standings', async (req, res) => {
  try {
    const response = await axios.get(
      'https://api.football-data.org/v4/competitions/PL/standings',
      {
        headers: {
          'X-Auth-Token': process.env.REACT_APP_FOOTBALL_API_KEY
        }
      }
    );
    
    // Log successful response
    console.log('API Response received:', response.status);
    
    res.json(response.data);
  } catch (error) {
    console.error('Detailed error:', error.response?.data || error.message);
    res.status(500).json({ 
      error: 'Failed to fetch standings',
      details: error.response?.data || error.message 
    });
  }
});

const PORT = process.env.SERVER_PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('API Key:', process.env.REACT_APP_FOOTBALL_API_KEY ? 'Present' : 'Missing');
}); 