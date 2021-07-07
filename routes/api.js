const axios = require('axios');
const express = require('express');

const router = express.Router();

router.get('/employees', async (req, res) => {
  try {
    const response = await axios.get('https://randomuser.me/api/?nat=us&results=100');
    res.json({ results: response.data.results });
  } catch (error) {
    res.json({ error: 'Error fetching employees' });
    console.error(error);
  }
});

module.exports = router;
